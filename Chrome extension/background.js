import { config } from './js/config.js';
import { bakingContent } from './js/bakingContent.js';
import { saveTransaction } from './js/saveTransaction.js';
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
let entryUrl = null
var views = chrome.extension.getViews({ type: "popup" });

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    console.log(views)
    if (views.length < 1) {

        console.log(request.payload, entryUrl)
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

        if (entryUrl !== request.payload[1] && request.payload[1]) {
            entryUrl = url
                //console.log(localStorage.getItem('url'), request.payload[1])
            if ((request.payload[0] || partnerUrls)) {
                //console.log(request.payload[1], localStorage.getItem('url'))

                localStorage.setItem("url", url)
                let authorKey = request.payload[0] ? request.payload[0] : partnerUrls.key;
                localStorage.setItem('authorkey', authorKey);

                saveTransaction(authorKey, url, user.uid, img, title, true);
                let userAuthkey = user.authorDetails ? user.authorDetails.key : null
                    //console.log(views)
                if ((authorKey != userAuthkey) || !user.authorDetails) {

                    //console.log(request.payload)
                    if (request.payload[4]) {
                        localStorage.setItem("interval", "off")

                        // console.log(url)
                        bakingContent(authorKey, url, title, img, request.payload[4], "entree");
                    } else if (request.payload[5] && entryUrl == url) {
                        // console.log("dep")
                        entryUrl = null
                        localStorage.setItem("interval", "on")
                        bakingContent(authorKey, url, title, img, request.payload[5], "sortie");
                        localStorage.removeItem('authorkey');
                        localStorage.removeItem('url');
                        localStorage.removeItem('lastUrl');
                        localStorage.removeItem('lastKey');
                        localStorage.removeItem('yourcontent');
                    }
                } else if (authorKey == userAuthkey) {
                    if (views.length >= 1 && request.payload[5]) {
                        localStorage.setItem("yourcontent", true);
                        localStorage.setItem('lastKey', authorKey);
                        localStorage.setItem('lastUrl', url);





                    }
                    chrome.browserAction.setIcon({ path: './logo/logo-nowallet.png' });



                }

            }
        }
    }
});

chrome.tabs.onHighlighted.addListener(function(tabId, changeInfo, tab) {
    console.log('onHighlightedout');
    localStorage.setItem("interval", "on")

    entryUrl = null
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
        entryUrl = null
        localStorage.setItem("interval", "on")
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
    }


});
chrome.windows.onFocusChanged.addListener(function(window) {
    localStorage.setItem("interval", "on")
    console.log("focus changed")
    if (views.length < 1) {
        localStorage.removeItem('authorkey');
        localStorage.removeItem('url');
        localStorage.removeItem('lastUrl');
        localStorage.removeItem('lastKey');
        localStorage.removeItem('yourcontent');

        entryUrl = null

        chrome.browserAction.setIcon({ path: "./logo/logo-base.png" });
        chrome.browserAction.setBadgeText({ text: "" });
        chrome.tabs.executeScript(null, {
            "file": "content.js"
        });
    }





})
chrome.windows.onRemoved.addListener((window) => {
    entryUrl = null

    console.log('removed')
    localStorage.removeItem('authorkey');
    localStorage.removeItem('url');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('lastKey');
    localStorage.removeItem('yourcontent');
})