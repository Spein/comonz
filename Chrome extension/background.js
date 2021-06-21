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
    console.log(request.payload)
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
    var views = chrome.extension.getViews({ type: "popup" });

    if ((request.payload[0] || partnerUrls)) {
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
        console.log(views)
        if ((authorKey != userAuthkey) || !user.authorDetails) {

            //console.log(request.payload)
            if (request.payload[4]) {
                let artTempStart = url;
                artTempStart = {
                    startTime: request.payload[4],
                    stopTime: null
                };
                artToSend = artTempStart;
                // console.log(url)
                bakingContent(authorKey, url, title, img, artToSend);
            } else if (request.payload[5] && JSON.parse(localStorage.getItem('"' + url + '"'))) {
                // console.log("dep")
                let artTempStop = JSON.parse(localStorage.getItem('"' + url + '"'));
                artTempStop.stopTime = request.payload[5];
                artToSend = artTempStop;
                localStorage.removeItem('"' + url + '"');
                bakingContent(authorKey, url, title, img, artToSend);
            }
        } else if (authorKey == userAuthkey) {
            if (views.length >= 1 && request.payload[5]) {
                setTimeout(() => {
                    var views2 = chrome.extension.getViews({ type: "popup" });
                    if (views2.length >= 1) {
                        localStorage.setItem("yourcontent", true);
                        localStorage.setItem('lastKey', authorKey);
                        localStorage.setItem('lastUrl', url);

                    }

                }, 500)

            }
            chrome.browserAction.setIcon({ path: './logo/logo-nowallet.png' });



        }

    } else {
        chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
        chrome.browserAction.setBadgeText({ text: '' });
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
    }
});

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log('onHighlightedout');


    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastKey');
    localStorage.removeItem('yourcontent');



    chrome.browserAction.setIcon({ path: './logo/logo-base.png' });
    chrome.browserAction.setBadgeText({ text: '' });
    chrome.tabs.executeScript(null, {
        file: 'content.js'
    });
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab, TabStatus) {
    if (tab.active) {
        console.log("tabupdated")

        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('lastUrl');
        localStorage.removeItem('lastKey');
        localStorage.removeItem('yourcontent');



        chrome.tabs.executeScript(null, {
            file: 'content.js'
        });
    }


});
chrome.windows.onFocusChanged.addListener(function(window) {
    console.log(window)
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastKey');
    localStorage.removeItem('yourcontent');


    chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
    chrome.browserAction.setBadgeText({ text: "" });
    chrome.tabs.executeScript(null, {
        "file": "content.js"
    });




})
chrome.windows.onRemoved.addListener((window) => {
    console.log('removed')
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastKey');
    localStorage.removeItem('yourcontent');
})