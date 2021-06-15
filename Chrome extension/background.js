import { config } from './js/config.js';
import { bakingContent } from './js/bakingContent.js';
import { saveTransaction } from './js/saveTransaction.js';
import { updateCount } from './js/updateCount.js';
import { checkProfile } from './js/checkProfile.js';
firebase.initializeApp(config);
chrome.runtime.onMessageExternal.addListener((message) => {
    let user = JSON.parse(localStorage.getItem('user'));
    let userKey = user.authorDetails.key;
    console.log(user, message.message);
    if ((message.message.platform = 'youtube')) {
        let videoIds = message.message.videosIds;
        videoIds.forEach((videoId) => {
            let vidId = 'yt-' + videoId.id.videoId;
            let img = videoId.snippet.thumbnails.default.url;
            let title = videoId.snippet.title;
            let partnerRef = firebase.database().ref('/partners/' + vidId);
            console.log(partnerRef);
            partnerRef.set({
                key: userKey,
                img: img
            });
            saveTransaction(userKey, vidId, null, img, title, true);
        });
    }
});
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    console.log(sender, request.payload)
    localStorage.removeItem('sentImg');
    localStorage.removeItem('sentTitle');
    localStorage.removeItem('sentUrl');
    localStorage.removeItem('sentKey');
    localStorage.removeItem('lastProgress');
    chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
    chrome.browserAction.setBadgeText({ text: '' });
    let user = JSON.parse(localStorage.getItem('user'));
    let url = request.payload[1];
    let partnerUrls = await firebase.database().ref('/partners/' + url).once('value').then(function(data) {
        return data.val();
    });
    let title = request.payload[2];
    let img;
    if (request.payload[3] === 'youtube-image') {
        img = partnerUrls.image;
    } else {
        img = request.payload[3];
    }
    let artToSend;
    if (request.payload[0] || partnerUrls) {
        console.log(request.payload)
        let authorKey = request.payload[0] ? request.payload[0] : partnerUrls.key;
        if (request.payload[3]) {
            localStorage.setItem('authorkey', authorKey);
            localStorage.setItem('url', url);
        } else {
            localStorage.removeItem('authorkey');
            localStorage.removeItem('url');
        }
        saveTransaction(authorKey, url, user.uid, img, title, true);
        let userAuthkey = user.authorDetails ? user.authorDetails.key : null
        if ((authorKey != userAuthkey) || !user.authorDetails) {

            //console.log(request.payload)
            if (request.payload[4]) {
                let artTempStart = url;
                artTempStart = {
                    startTime: request.payload[4],
                    stopTime: null
                };
                artToSend = artTempStart;
                bakingContent(authorKey, url, title, img, artToSend);
            } else if (request.payload[5] && JSON.parse(localStorage.getItem('"' + url + '"'))) {
                // console.log("dep")
                let artTempStop = JSON.parse(localStorage.getItem('"' + url + '"'));
                artTempStop.stopTime = request.payload[5];
                artToSend = artTempStop;
                localStorage.removeItem('"' + url + '"');
                bakingContent(authorKey, url, title, img, artToSend);
            }
        }

    } else {
        chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
        chrome.browserAction.setBadgeText({ text: '' });
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('progress');
        localStorage.removeItem('lastUrl');
        localStorage.removeItem('lastProgress');
        localStorage.removeItem('lastKey');
    }
});

/* chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log('onHighlightedout');
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('progress');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastProgress');
    localStorage.removeItem('lastKey');
    chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.tabs.executeScript(null, {
        file: 'content.js'
    });
}); */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab, TabStatus) {
    if (tab.active) {
        localStorage.removeItem('lastProgress');
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('progress');
        localStorage.removeItem('lastUrl');
        localStorage.removeItem('lastKey');

        chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
        chrome.browserAction.setBadgeText({ text: '' });
        chrome.tabs.executeScript(null, {
            file: 'content.js'
        });
    }


});
chrome.windows.onFocusChanged.addListener(function(window) {
    console.log(window)
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('progress');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastProgress');
    localStorage.removeItem('lastKey');
    console.log("focus changed")

    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    chrome.tabs.query({ active: true }, function(tabs) {
        console.log(tabs)
    })
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });




})
chrome.windows.onRemoved.addListener((window) => {
    console.log('removed')
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('progress');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastProgress');
    localStorage.removeItem('lastKey');
})


/* chrome.runtime.onConnect.addListener(function(port) {
    console.log(port)
    port.onDisconnect.addListener(async function() {

        let url = localStorage.getItem('sentUrl');
        let authorKey = localStorage.getItem('sentKey');
        let title = localStorage.getItem('sentTitle');
        let img = localStorage.getItem('sentImg');
        let user = await JSON.parse(localStorage.getItem('user'));
        console.log(localStorage.getItem('sentProgress'), user.transactions)
        let progress = localStorage.getItem('sentProgress') ? parseInt(localStorage.getItem('sentProgress')) : user.transactions[authorKey][url].count
        console.log('disconnected ' + authorKey, url, user.uid, img, title)
        localStorage.removeItem('sentProgress');
        if (url) {
            if (progress <= -1) {
                chrome.browserAction.setBadgeText({ text: '<3' });
                updateCount(-1, user.uid, url, authorKey);
                user.transactions[authKey][url].count = -1;
                user.transactions[authKey][url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authorKey, url, user.uid, img, title, false);
            } else {
                updateCount(progress, user.uid, url, authorKey);
                user.transactions[authKey][url].count = progress;
                user.transactions[authKey][url].status = 'onGoing';
                localStorage.setItem('user', JSON.stringify(user));
            }
        }

        localStorage.removeItem('sentImg');
        localStorage.removeItem('sentTitle');
        localStorage.removeItem('sentUrl');
        localStorage.removeItem('sentKey');
    });
}); */