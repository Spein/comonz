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
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        const authorKey = request.payload[0]
        const url = request.payload[1]
        const title = request.payload[2]
        const img = request.payload[3]
        let artToSend
        if (authorKey) {
            localStorage.setItem('authorkey', authorKey);
            localStorage.setItem('url', url);
            setTimeout(() => {
                //console.log(request.payload, localStorage.getItem("extensionOpened"))

                console.log(request.payload)

                if (request.payload[4]) {

                    let artTempStart = url
                    artTempStart = {
                        startTime: request.payload[4],
                        stopTime: null
                    }
                    artToSend = artTempStart
                    bakingContent(authorKey, url, title, img, artToSend)


                } else if (request.payload[5] && JSON.parse(localStorage.getItem('"' + url + '"'))) {
                    // console.log("dep")

                    let artTempStop = JSON.parse(localStorage.getItem('"' + url + '"'))
                    artTempStop.stopTime = request.payload[5]
                    artToSend = artTempStop
                    localStorage.removeItem('"' + url + '"')
                    bakingContent(authorKey, url, title, img, artToSend)

                }


            }, 1000);
        } else {
            localStorage.removeItem("inProgress");

            chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
            chrome.browserAction.setBadgeText({ text: "" });
            localStorage.setItem('authorkey', "nope");
            localStorage.setItem('url', "nope");
            localStorage.setItem('progress', "nope");
        }

    })

async function bakingContent(authorKey, url, title, img, artToSend) {


    //localStorage.setItem('authorkey', authorKey)
    const user = JSON.parse(localStorage.getItem("user"))
        //console.log(user)
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
            //console.log(artToSend, actualCount)
        if (artToSend && artToSend.startTime && artToSend.stopTime === null) {
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


                let interval = setInterval(function() {
                    let badgeCount = actualCount.toString()
                        // var path = './logo/image (' + badgeCount + ').png';
                        //chrome.browserAction.setIcon({ path: path });
                    chrome.browserAction.setBadgeText({ text: badgeCount });
                    localStorage.setItem('progress', actualCount)

                    actualCount--
                    if (actualCount <= 0 && user.transactions[url].status != "paid") {
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
                    function(request, sender, sendResponse, event) {
                        //console.log('onMessage', request.payload)
                        /*   localStorage.setItem('authorkey', "nope");
                          localStorage.setItem('url', "nope");
                          localStorage.setItem('progress', "nope"); */
                        localStorage.setItem('lastProgress', actualCount);
                        localStorage.setItem('lastUrl', url);
                        localStorage.setItem('lastAuthKey', authKey);
                        localStorage.setItem('lastTitle', title);
                        localStorage.setItem('lastImg', img);
                        updateCount(actualCount, 'onGoing', user.uid, url, authorKey)

                        localStorage.setItem('lastProgress', actualCount);
                        //console.log(chrome.tabs.tabMutednfo)
                        user.transactions[url].count = actualCount
                        user.transactions[url].status = "onGoing"
                        localStorage.setItem('user', JSON.stringify(user))
                            //event.preventDefault();
                        clearInterval(interval);



                    })




            } else {
                chrome.browserAction.setBadgeText({ text: "<3" });
                localStorage.removeItem('"' + url + '"')

            }
        } else if (artToSend.stopTime !== null && artToSend.startTime && (transaction.status != 'paid' || !transaction)) {
            localStorage.removeItem('"' + url + '"')
            localStorage.removeItem('inProgress')
                /*    localStorage.setItem('authorkey', "nope");
                   localStorage.setItem('url', "nope"); */
            localStorage.setItem('progress', "paid");
            let calcTimeprime = (artToSend.stopTime - artToSend.startTime) / 1000
            let calcTime = Math.floor(calcTimeprime)
            let calcCount = actualCount - calcTime
                //console.log(artToSend.stopTime, artToSend.startTime, calcTime, calcCount)
            updateCount(calcCount, 'onGoing', user.uid, url, authorKey)
            chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
            chrome.browserAction.setBadgeText({ text: "" });
            localStorage.setItem('progress', -1)

            user.transactions[url].count = calcCount
            user.transactions[url].status = "onGoing"
            localStorage.setItem('user', JSON.stringify(user))
        }
    }

}


chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log("onHighlightedout")
    localStorage.removeItem("inProgress");

    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    /*  localStorage.setItem('authorkey', "nope");
     localStorage.setItem('url', "nope");
     localStorage.setItem('progress', "nope"); */
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


});


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
        }).then(resolve(console.log("updated", progress, url)))
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

chrome.runtime.onConnect.addListener(function(port) {
    let url = localStorage.getItem('lastUrl');
    let authorKey = localStorage.getItem('lastAuthKey');
    let title = localStorage.getItem('lastTitle');
    let img = localStorage.getItem('lastImg');
    let artToSend = url
    artToSend = {
        startTime: Date.now(),
        stopTime: null
    }
    bakingContent(authorKey, url, title, img, artToSend)

    port.onDisconnect.addListener(() => {
        artToSend.stopTime = Date.now()
        console.log(port.name)
        bakingContent(authorKey, url, title, img, artToSend)


    })
})