var config = {
    apiKey: "AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw",
    authDomain: "pressformore-c0045.firebaseapp.com",
    databaseURL: "https://pressformore-c0045.firebaseio.com",
    projectId: "pressformore-c0045",
    storageBucket: "pressformore-c0045.appspot.com",
    messagingSenderId: "1059781682708"
};
firebase.initializeApp(config);
let authKey
async function bakingContent(authorKey, url, title, img, artToSend) {
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });


    if (authorKey) {
        localStorage.setItem('authorkey', authorKey)

        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user)

        var wallet = user.wallet.status;
        authKey = authorKey
        const userKey = user.authorKey
        if (wallet === "active" && userKey != authKey) {
            localStorage.setItem('"' + url + '"', JSON.stringify(artToSend))

            const transactions = user.transactions ? user.transactions : null
            const transaction = transactions ? transactions[url] : null

            const attCounter = user.wallet.Attcounter
            const onGoingArticle = {
                    count: attCounter,
                    authorKey: authKey,
                    status: 'onGoing'
                }
                // console.log(transactions, transaction)
            let actualCount = transaction ? transaction.count : onGoingArticle.count
            console.log(artToSend, actualCount)
            if (artToSend && artToSend.stopTime === null && !localStorage.getItem("inProgress")) {
                console.log(localStorage.getItem("inProgress"))
                if (!transactions) {
                    user.transactions = {}

                }
                if (!transaction) {
                    let art = url
                    user.transactions[url] = onGoingArticle
                        //console.log(user)
                    localStorage.setItem('user', JSON.stringify(user))

                }
                //console.log(actualCount)

                if (actualCount >= 0) {
                    if (!localStorage.getItem("inProgress")) {

                        localStorage.setItem('inProgress', 1)

                        let interval = setInterval(function() {
                            let badgeCount = actualCount.toString()
                                // var path = './logo/image (' + badgeCount + ').png';
                                //chrome.browserAction.setIcon({ path: path });
                            chrome.browserAction.setBadgeText({ text: badgeCount });
                            localStorage.setItem('progress', actualCount)

                            actualCount--
                            if (actualCount <= 0) {
                                chrome.browserAction.setBadgeText({ text: "<3" });
                                updateCount(-1, 'paid', user.uid, url, authorKey)
                                user.transactions[url].count = -1
                                user.transactions[url].status = "paid"
                                localStorage.setItem('user', JSON.stringify(user))
                                localStorage.setItem('progress', 'paid')

                                saveTransaction(authKey, url, user.uid, img, title)
                                clearInterval(interval)
                            }
                        }, 1000)
                        chrome.runtime.onMessage.addListener(
                            function(request, sender, sendResponse) {

                                console.log('onMessage')
                                localStorage.setItem('authorkey', null);
                                localStorage.setItem('url', null);
                                localStorage.setItem('progress', null);
                                clearInterval(interval);



                            })
                    }



                } else {
                    chrome.browserAction.setBadgeText({ text: "<3" });
                    localStorage.removeItem('"' + url + '"')

                }
            } else if (artToSend.stopTime !== null && artToSend.startTime && (transaction.status != 'paid' || !transaction)) {
                console.log("devrai finir")
                localStorage.removeItem('"' + url + '"')

                localStorage.removeItem('inProgress')
                localStorage.setItem('authorkey', null);
                localStorage.setItem('url', null);
                localStorage.setItem('progress', null);
                let calcTimeprime = (artToSend.stopTime - artToSend.startTime) / 1000
                let calcTime = Math.floor(calcTimeprime)
                let calcCount = actualCount - calcTime
                console.log(artToSend.stopTime, artToSend.startTime, calcTime, calcCount)
                updateCount(calcCount, 'onGoing', user.uid, url, authorKey)
                chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
                chrome.browserAction.setBadgeText({ text: "" });
                localStorage.setItem('progress', -1)

                user.transactions[url].count = calcCount
                user.transactions[url].status = "onGoing"
                localStorage.setItem('user', JSON.stringify(user))
            }


            // console.log("key:" + authorKey + "url:" + url + "title:" + title + "user:" + user + "wallet:" + wallet + 'actualcount' + actualCount)

        }


    }
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        const authorKey = request.payload[0]
        const url = request.payload[1]
        const title = request.payload[2]
        const img = request.payload[3]
        let artToSend
        setTimeout(() => {
            //console.log(request.payload, localStorage.getItem("extensionOpened"))

            localStorage.setItem('authorkey', authorKey);
            localStorage.setItem('url', url);
            if (request.payload[4]) {
                console.log(request.payload)

                let artTempStart = url
                artTempStart = {
                    startTime: request.payload[4],
                    stopTime: null
                }
                artToSend = artTempStart
                bakingContent(authorKey, url, title, img, artToSend)


            } else if (request.payload[5]) {
                // console.log("dep")
                console.log(request.payload)

                let artTempStop = JSON.parse(localStorage.getItem('"' + url + '"'))
                artTempStop.stopTime = request.payload[5]
                artToSend = artTempStop
                localStorage.removeItem('"' + url + '"')
                bakingContent(authorKey, url, title, img, artToSend)

            }
        }, 1000);


    })

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    // console.log(localStorage.getItem("extensionOpened"))
    console.log("onHighlightedout")
    localStorage.removeItem("inProgress");

    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    localStorage.setItem('authorkey', null);
    localStorage.setItem('url', null);
    localStorage.setItem('progress', null);
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


});


/* chrome.windows.onFocusChanged.addListener(function(window) {
    console.log(localStorage.getItem("extensionOpened"))

    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    localStorage.setItem('authorkey', null);
    localStorage.setItem('url', null);
    localStorage.setItem('progress', null);
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


}) */
chrome.windows.onRemoved.addListener((window) => {
    //console.log('removed')
    localStorage.clear();

})


function updateCount(progress, status, userId, url, authorKey) {
    return new Promise(function(resolve, reject) {
        console.log(progress, status, userId, url)
        let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + url)
        countRef.update({
            count: progress,
            status: status,
            authorKey: authorKey
        }).then(resolve(console.log("updated")))
    })
}

function saveTransaction(authorKey, url, userId, featuredImage, title) {
    firebase.database().ref('transactions/' + authorKey + "/" + url).once('value').then(function(snapshot) {
        var contentUrl = (snapshot.val());
        var date = new Date();
        var parsedDate = JSON.stringify(date);
        var tranRef = firebase.database().ref('transactions/' + authorKey + "/" + url + "/cTransactions/" + userId)
        if (contentUrl == undefined) {
            firebase.database().ref('transactions/' + authorKey + "/" + url).set({
                title: title,
                img: featuredImage,
            });
        }
        tranRef.update({
            date: parsedDate,

        })

    })
}