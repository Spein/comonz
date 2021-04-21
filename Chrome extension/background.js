var config = {
    apiKey: "AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw",
    authDomain: "pressformore-c0045.firebaseapp.com",
    databaseURL: "https://pressformore-c0045.firebaseio.com",
    projectId: "pressformore-c0045",
    storageBucket: "pressformore-c0045.appspot.com",
    messagingSenderId: "1059781682708"
};
firebase.initializeApp(config);
chrome.runtime.onMessageExternal.addListener((message) => {
    console.log(message.message.videosIds)
    let videoIds = message.message.videosIds
    videoIds.forEach(videoId => {
        let videoToadd = {
            id: videoId.id.videoId
        }
        let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + url)
        countRef.update({
            count: progress,
            status: status,
            authorKey: authorKey
        })
        console.log(videoId.id.videoId);

    })
})

let authKey
chrome.runtime.onMessage.addListener(
    async function(request, sender, sendResponse) {
        localStorage.removeItem('sentImg')
        localStorage.removeItem('sentTitle')
        localStorage.removeItem('sentUrl')
        localStorage.removeItem('sentKey')
        localStorage.removeItem('sentProgress')

        localStorage.removeItem('lastProgress')

        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        const user = JSON.parse(localStorage.getItem("user"))

        const url = request.payload[1]
        const title = request.payload[2]
        const img = request.payload[3]
        let partnerUrls = await firebase.database().ref('/partners/' + url).once('value').then(function(data) { return data.val() })
        console.log(partnerUrls)
        let artToSend
        if (request.payload[0] || partnerUrls) {

            const authorKey = request.payload[0] ? request.payload[0] : partnerUrls.key
            saveTransaction(authorKey, url, user.uid, img, title)

            localStorage.setItem('authorkey', authorKey);
            localStorage.setItem('url', url);


            //console.log(request.payload)

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



        } else {

            chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
            chrome.browserAction.setBadgeText({ text: "" });
            localStorage.removeItem('authorkey');
            localStorage.removeItem('url');
            localStorage.removeItem('progress');

        }

    })

async function bakingContent(authorKey, url, title, img, artToSend) {
    let triggerOn = true

    // localStorage.setItem("triggerOn", "on")
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
        console.log(transaction)
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
            console.log(transaction, onGoingArticle, actualCount)

            if (actualCount >= 0) {


                let interval = setInterval(function() {
                    let badgeCount = actualCount.toString()
                        // var path = './logo/image (' + badgeCount + ').png';
                        //chrome.browserAction.setIcon({ path: path });
                    chrome.browserAction.setBadgeText({ text: badgeCount });
                    //localStorage.setItem('progress', actualCount)

                    actualCount--
                    if (actualCount <= 0 && user.transactions[url].status != "paid") {
                        chrome.browserAction.setBadgeText({ text: "<3" });
                        updateCount(-1, 'paid', user.uid, url, authorKey)
                        user.transactions[url].count = -1
                        user.transactions[url].status = "paid"
                        localStorage.setItem('user', JSON.stringify(user))
                            //localStorage.setItem('progress', 'paid')

                        saveTransaction(authKey, url, user.uid, img, title)
                        clearInterval(interval)
                    }
                }, 1000)
                chrome.runtime.onMessage.addListener(
                    async function(request, sender, sendResponse, event) {
                        if (triggerOn) {
                            triggerOn = false
                                // console.log('ici')
                            updateCount(actualCount, 'onGoing', user.uid, url, authorKey)

                            user.transactions[url].count = actualCount
                            user.transactions[url].status = "onGoing"
                            localStorage.setItem('user', JSON.stringify(user))
                            clearInterval(interval);
                            localStorage.setItem('lastProgress', actualCount);

                        }
                    })




            } else {
                chrome.browserAction.setBadgeText({ text: "<3" });
                localStorage.removeItem('"' + url + '"')
                triggerOn = false
            }
        } else if (artToSend.stopTime !== null && artToSend.startTime && (transaction.status != 'paid' || !transaction)) {
            localStorage.removeItem('"' + url + '"')

        }
    }

}


chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log("onHighlightedout")
    localStorage.removeItem('lastProgress')
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('progress');
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


});

/* 
chrome.windows.onRemoved.addListener((window) => {
    localStorage.clear();

}) */


function updateCount(progress, status, userId, url, authorKey) {
    return new Promise(function(resolve, reject) {
        //console.log(progress, status, userId, url)
        let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + url)
        countRef.update({
            count: progress,
            status: status,
            authorKey: authorKey
        }).then(resolve(
            //console.log("updated", progress, url)
        ))
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
    //console.log(port)

    port.onDisconnect.addListener(() => {
        let url = localStorage.getItem('sentUrl');
        let authorKey = localStorage.getItem('sentKey');
        let title = localStorage.getItem('sentTitle');
        let img = localStorage.getItem('sentImg');
        let progress = localStorage.getItem('sentProgress');
        const user = JSON.parse(localStorage.getItem("user"))
            // console.log('disconnected ' + authorKey, url, user.uid, img, title)
        localStorage.removeItem('sentProgress', authorKey, url, user.uid, img, title)
        if (progress <= -1) {
            chrome.browserAction.setBadgeText({ text: "<3" });
            updateCount(-1, 'paid', user.uid, url, authorKey)
            user.transactions[url].count = -1
            user.transactions[url].status = "paid"
            localStorage.setItem('user', JSON.stringify(user))
            saveTransaction(authorKey, url, user.uid, img, title)

        } else {
            updateCount(progress, 'onGoing', user.uid, url, authorKey)
            user.transactions[url].count = progress
            user.transactions[url].status = "onGoing"
            localStorage.setItem('user', JSON.stringify(user))
        }
        localStorage.removeItem('sentImg')
        localStorage.removeItem('sentTitle')
        localStorage.removeItem('sentUrl')
        localStorage.removeItem('sentKey')


    })
})