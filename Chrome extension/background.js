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



async function countDown(actualCount, url, authorKey, fimg) {
    const user = await JSON.parse(localStorage.getItem('user'))
    let status = true
    let ongoingCount = actualCount
    let fimage = fimg
    let authKey = authorKey
    console.log(ongoingCount)
    const interval = setInterval(() => {
        if (ongoingCount > 0) {

            ongoingCount -= 1;

            var path = './logo/image (' + ongoingCount + ').png';

            chrome.browserAction.setIcon({ path: path });
            var badgeText = ongoingCount.toString()
            localStorage.setItem('progress', ongoingCount);

            chrome.browserAction.setBadgeBackgroundColor({ color: [190, 190, 190, 230] });
            chrome.browserAction.setBadgeText({ text: badgeText });

            console.log("counting" + ongoingCount)
        } else if (ongoingCount === 0) {
            clearInterval(interval)

            var path = './logo/logo-0.png';
            chrome.browserAction.setIcon({ path: path });
            chrome.browserAction.setBadgeText({ text: "<3" });
            user.transactions[url].count = -1
            user.transactions[url].status = "paid"
            localStorage.setItem('user', JSON.stringify(user))
            updateCount(-1, 'paid', user.uid, url)
            saveTransaction(authKey, url, user.uid, fimage)
            clearInterval(interval);
        }
    }, 1000)



    chrome.tabs.onHighlighted.addListener(function(details, event) {
        if (status) {
            console.log("onHighlighted firedin" + event)

            setUser.retrieveUser().then(user => {
                console.log(user)
                clearInterval(interval)
                chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
                chrome.browserAction.setBadgeText({ text: "" });
                user.transactions[url].count = ongoingCount
                localStorage.setItem('user', JSON.stringify(user))
                if (ongoingCount > 0) {
                    updateCount(ongoingCount, "onGoing", user.uid, url)

                } else if (ongoingCount === 0) {
                    clearInterval(interval)

                    user.transactions[url].count = -1
                    user.transactions[url].status = "paid"
                    localStorage.setItem('user', JSON.stringify(user))
                    updateCount(-1, 'paid', user.uid, url)
                    saveTransaction(authKey, url, user.uid, fimage)
                }
                return
            })
            status = false
        }


    })
    chrome.windows.onFocusChanged.addListener(function(window) {
        if (window < 0) {
            if (status) {
                console.log(window)

                clearInterval(interval)
                chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
                chrome.browserAction.setBadgeText({ text: "" });

                if (ongoingCount > 0) {
                    user.transactions[url].count = ongoingCount
                    localStorage.setItem('user', JSON.stringify(user))
                    updateCount(ongoingCount, "onGoing", user.uid, url)

                } else if (ongoingCount === 0) {
                    user.transactions[url].count = -1
                    user.transactions[url].status = "paid"
                    localStorage.setItem('user', JSON.stringify(user))
                    updateCount(-1, 'paid', user.uid, url)
                    saveTransaction(authKey, url, user.uid, fimage)
                }
                status = false
                return
            }
        }
    })
}

function updateCount(progress, status, userId, url) {

    let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + url)
    countRef.update({
        count: progress,
        status: status
    })
}

function saveTransaction(authorKey, url, userId, featuredImage) {
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



async function interestAlchemy(authorKey, url, title, img) {
    if (authorKey) {
        localStorage.setItem('url', url);
        localStorage.setItem('authorkey', authorKey)

        const featuredImg = img
        const user = await setUser.retrieveUser()
        var wallet = user.walletStatus;
        let authK = authorKey
        const userKey = user.authorKey
        if (wallet === "active" && userKey != authK) {
            let actualCount
            const transactions = user.transactions ? user.transactions : null
            const transaction = transactions ? transactions[url] : null

            const attCounter = user.attCounter
            const onGoingArticle = {
                count: attCounter,
                authorKey: authK,
                status: 'onGoing'
            }

            if (!transaction) {
                console.log(user)
                firebase.database().ref('/users/' + user.uid + '/transactions/' + url).set(onGoingArticle)
                user.transactions[url] = onGoingArticle
                localStorage.setItem('user', JSON.stringify(user))
                actualCount = onGoingArticle.count, countDown(actualCount, url, authK, featuredImg)


            } else {
                console.log(user)

                actualCount = user.transactions[url].count
                if (actualCount < 0) {
                    var path = './logo/logo-0.png';
                    chrome.browserAction.setIcon({ path: path });
                    chrome.browserAction.setBadgeText({ text: "<3" });
                } else {
                    countDown(actualCount, url, authK, featuredImg)
                }

            }
            console.log("key:" + authorKey + "url:" + url + "title:" + title + "user:" + user + "wallet:" + wallet + 'actualcount' + actualCount)

        }

    } else {
        localStorage.setItem('authorkey', false);
        localStorage.setItem('url', false);
    }
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        const authorKey = request.payload[0]
        const url = request.payload[1]
        const title = request.payload[2]
        const img = request.payload[3]
        interestAlchemy(authorKey, url, title, img)
    })

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log("onHighlightedout" + tabId)
    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });

    localStorage.setItem('authorkey', false);
    localStorage.setItem('url', false);
    setUser.setUser(firebase.auth().currentUser.uid).then(chrome.tabs.executeScript(null, {
        "file": "content.js"
    }))


});

chrome.windows.onFocusChanged.addListener(function(window) {
    if (window > 0) {
        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        chrome.tabs.executeScript(null, {
            "file": "content.js"
        });
        localStorage.setItem('authorkey', false);
        localStorage.setItem('url', false);
    }
})
chrome.windows.onRemoved.addListener((window) => {
    console.log('removed')
    localStorage.clear();

})