var config = {
    apiKey: "AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw",
    authDomain: "pressformore-c0045.firebaseapp.com",
    databaseURL: "https://pressformore-c0045.firebaseio.com",
    projectId: "pressformore-c0045",
    storageBucket: "pressformore-c0045.appspot.com",
    messagingSenderId: "1059781682708"
};
firebase.initializeApp(config);

import * as setUser from '/js/setUser.js';

let authKey





async function bakingContent(authorKey, url, title, img, artToSend) {
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });


    if (authorKey) {
        localStorage.setItem('authorkey', authorKey)

        const featuredImg = img
        const user = JSON.parse(localStorage.getItem("user"))
        var wallet = user.walletStatus;
        authKey = authorKey
        const userKey = user.authorKey
        if (wallet === "active" && userKey != authKey) {
            const transactions = user.transactions ? user.transactions : null
            const transaction = transactions ? transactions[url] : null

            const attCounter = user.attCounter
            const onGoingArticle = {
                count: attCounter,
                authorKey: authKey,
                status: 'onGoing'
            }
            let actualCount = transaction ? transaction.count : onGoingArticle.count
            if (artToSend && artToSend.stopTime === null) {

                if (actualCount >= 0) {
                    let interval = setInterval(function() {
                        let badgeCount = actualCount.toString()
                        let extensionOpened = localStorage.getItem('extensionOpened')
                            // var path = './logo/image (' + badgeCount + ').png';
                            //chrome.browserAction.setIcon({ path: path });
                        chrome.browserAction.setBadgeText({ text: badgeCount });
                        localStorage.setItem('progress', actualCount)

                        actualCount--
                        if (actualCount === 0) {
                            chrome.browserAction.setBadgeText({ text: "<3" });
                            updateCount(-1, 'paid', user.uid, url)
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
                            localStorage.setItem('progress', -1)
                            clearInterval(interval);
                        })


                } else {
                    chrome.browserAction.setBadgeText({ text: "<3" });

                }
            } else if (artToSend.stopTime && artToSend.startTime) {
                let calcTime = Math.floor((artToSend.stopTime - artToSend.startTime) / 1000)
                let calcCount = actualCount - calcTime
                updateCount(calcCount, 'onGoing', user.uid, url)
                chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
                chrome.browserAction.setBadgeText({ text: "" });
                localStorage.setItem('progress', -1)

                user.transactions[url].count = calcCount
                user.transactions[url].status = "onGoing"
                localStorage.setItem('user', JSON.stringify(user))
            }


            console.log("key:" + authorKey + "url:" + url + "title:" + title + "user:" + user + "wallet:" + wallet + 'actualcount' + actualCount)
            localStorage.setItem('url', url);

        }

    } else {
        localStorage.setItem('authorkey', false);
        localStorage.setItem('url', false);
    }
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

        console.log(request.payload)
        const authorKey = request.payload[0]
        const url = request.payload[1]
        const title = request.payload[2]
        const img = request.payload[3]
        let artToSend
        if (request.payload[4]) {

            let artTempStart = url
            artTempStart = {
                startTime: request.payload[4],
                stopTime: null
            }
            artToSend = artTempStart
            localStorage.setItem('"' + url + '"', JSON.stringify(artTempStart))

        } else if (request.payload[5]) {
            let artTempStop = JSON.parse(localStorage.getItem('"' + url + '"'))
            artTempStop.stopTime = request.payload[5]
            artToSend = artTempStop
            localStorage.removeItem('"' + url + '"')
        }
        bakingContent(authorKey, url, title, img, artToSend)

    })

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log("onHighlightedout")
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    localStorage.setItem('authorkey', false);
    localStorage.setItem('url', false);
    localStorage.setItem('progress', null);
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


});

chrome.windows.onFocusChanged.addListener(function(window) {
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    localStorage.setItem('authorkey', false);
    localStorage.setItem('url', false);
    localStorage.setItem('progress', null);
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });


})
chrome.windows.onRemoved.addListener((window) => {
    console.log('removed')
    localStorage.clear();

})


function updateCount(progress, status, userId, url) {
    return new Promise(function(resolve, reject) {

        let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + url)
        countRef.update({
            count: progress,
            status: status
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