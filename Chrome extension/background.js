import { config } from './js/config.js';
import { bakingContent } from './js/bakingContent.js';
import { saveTransaction } from './js/saveTransaction.js';
import { updateCount } from './js/updateCount.js';

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
    localStorage.removeItem('sentImg');
    localStorage.removeItem('sentTitle');
    localStorage.removeItem('sentUrl');
    localStorage.removeItem('sentKey');
    localStorage.removeItem('sentProgress');
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
        let authorKey = request.payload[0] ? request.payload[0] : partnerUrls.key;
        saveTransaction(authorKey, url, user.uid, img, title, true);
        localStorage.setItem('authorkey', authorKey);
        localStorage.setItem('url', url);
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
    } else {
        chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
        chrome.browserAction.setBadgeText({ text: '' });
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('progress');
    }
});

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log('onHighlightedout');
    localStorage.removeItem('lastProgress');
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('progress');
    chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.tabs.executeScript(null, {
        file: 'content.js'
    });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab, TabStatus) {
    if (tab.active) {
        localStorage.removeItem('lastProgress');
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('progress');
        chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
        chrome.browserAction.setBadgeText({ text: '' });
        chrome.tabs.executeScript(null, {
            file: 'content.js'
        });
    }


});
chrome.windows.onFocusChanged.addListener(function(window) {
    console.log(window)
    if (window < 0) {
        console.log("focus changed out")
        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        chrome.tabs.executeScript(null, {
            "file": "content.js"
        });

    } else {
        console.log("focus changed in")

        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('progress');
        chrome.tabs.executeScript(null, {
            "file": "content.js"
        });

    }


})
chrome.windows.onRemoved.addListener((window) => {
    console.log('removed')
    localStorage.clear();

})


chrome.runtime.onConnect.addListener(function(port) {
    console.log(port)
    port.onDisconnect.addListener(() => {
        let url = localStorage.getItem('sentUrl');
        let authorKey = localStorage.getItem('sentKey');
        let title = localStorage.getItem('sentTitle');
        let img = localStorage.getItem('sentImg');
        let progress = localStorage.getItem('sentProgress') ? parseInt(localStorage.getItem('sentProgress')) : user.transactions[url].count
        let user = JSON.parse(localStorage.getItem('user'));
        // console.log('disconnected ' + authorKey, url, user.uid, img, title)
        localStorage.removeItem('sentProgress');
        if (url) {
            if (progress <= -1) {
                chrome.browserAction.setBadgeText({ text: '<3' });
                updateCount(-1, user.uid, url, authorKey);
                user.transactions[url].count = -1;
                user.transactions[url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authorKey, url, user.uid, img, title, false);
            } else {
                updateCount(progress, user.uid, url, authorKey);
                user.transactions[url].count = progress;
                user.transactions[url].status = 'onGoing';
                localStorage.setItem('user', JSON.stringify(user));
            }
        }

        localStorage.removeItem('sentImg');
        localStorage.removeItem('sentTitle');
        localStorage.removeItem('sentUrl');
        localStorage.removeItem('sentKey');
    });
});