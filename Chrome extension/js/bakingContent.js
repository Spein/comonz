import { saveTransaction } from '/js/saveTransaction.js';
import { updateCount } from '/js/updateCount.js';


async function bakingContent(authorKey, url, title, img, artToSend) {
    let user = JSON.parse(localStorage.getItem('user'));
    var wallet = user.wallet ? user.wallet.status : null;
    let userKey = user.authorKey;
    let triggerOn;
    console.log(user.transactions)
        //console.log(authorKey)
    if (wallet === 'active' && userKey != authorKey) {
        localStorage.setItem('"' + url + '"', JSON.stringify(artToSend));
        let transactions = user.transactions ? user.transactions : null;
        let pretransact = transactions ? transactions[authorKey] : null;
        let transaction = pretransact ? pretransact[url] : null;
        let attCounter = user.wallet.Attcounter;
        let onGoingArticle = {
            count: attCounter,
            authorKey: authorKey,
            status: 'onGoing'
        };

        if (artToSend && artToSend.startTime && artToSend.stopTime === null) {
            if (!transactions) {
                user.transactions = {};
            }
            if (!pretransact) {
                user.transactions[authorKey] = {};
            }
            if (!transaction) {
                user.transactions[authorKey][url] = onGoingArticle;
                localStorage.setItem('user', JSON.stringify(user));
            }
            let preCount = localStorage.getItem("'sentProgress" + url + "'")
                // console.log(localStorage)
            let actualCount
            if (preCount) {
                localStorage.removeItem("'sentProgress" + url + "'");
                actualCount = preCount
                    //console.log("actual count " + actualCount)


            } else if (transaction && !preCount) {
                actualCount = transaction.count
                    //console.log(pretransact)

            } else if (!transaction && !preCount) {
                actualCount = onGoingArticle.count
                    //console.log("actual count " + actualCount)

            }
            console.log(url, transaction)
            if (actualCount >= -1 && actualCount > -2) {
                let interval = setInterval(function() {

                    triggerOn = true;
                    if (actualCount) {
                        let badgeCount = actualCount.toString();
                        chrome.browserAction.setBadgeText({ text: badgeCount });
                        chrome.browserAction.setBadgeBackgroundColor({ color: '#323234' });


                    }
                    actualCount--;
                    if (actualCount <= -1) {
                        clearInterval(interval);
                        chrome.browserAction.setBadgeText({ text: '❤' });
                        chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });

                        saveTransaction(authorKey, url, user.uid, img, title, false);
                        updateCount(-1, user.uid, url, authorKey);


                    }
                }, 1000);
                chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse, event) {
                    //console.log(authorKey, url)
                    if (triggerOn && actualCount != null) {
                        triggerOn = false;
                        var views = chrome.extension.getViews({ type: "popup" });
                        //console.log(views)
                        clearInterval(interval);

                        //console.log("interval cleard", actualCount, url)
                        updateCount(actualCount, user.uid, url, authorKey);
                        user.transactions[authorKey][url].count = actualCount;
                        if (actualCount > -1) {
                            user.transactions[authorKey][url].status = 'onGoing';

                        } else {
                            user.transactions[authorKey][url].status = 'paid';

                        }
                        console.log(url, user.transactions[authorKey][url].count)
                        localStorage.setItem('user', JSON.stringify(user));
                        if (views.length >= 1) {
                            localStorage.setItem("'lastProgress" + url + "'", actualCount);
                            localStorage.setItem('lastUrl', url);
                            localStorage.setItem('lastKey', authorKey);

                            localStorage.removeItem('url');

                        } else {
                            localStorage.removeItem('authorkey');
                            localStorage.removeItem('url');
                            localStorage.removeItem('lastUrl');
                            localStorage.removeItem("'lastProgress" + url + "'");
                            localStorage.removeItem('lastKey');
                            localStorage.removeItem('yourcontent');

                        }





                    }
                });
            } else if (actualCount <= -1 && user.transactions[authorKey][url].status != 'paid') {
                chrome.browserAction.setBadgeText({ text: '❤' });
                chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });

                updateCount(-1, user.uid, url, authorKey);
                user.transactions[authorKey][url].count = -1;
                user.transactions[authorKey][url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authorKey, url, user.uid, img, title, false);
            } else {
                triggerOn = false;
                // console.log('déja paye')
                localStorage.setItem('lastUrl', url);
                localStorage.setItem('lastKey', authorKey);
                chrome.browserAction.setBadgeText({ text: '❤' });
                chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });

                localStorage.removeItem('"' + url + '"');

            }
        } else if (
            artToSend.stopTime !== null &&
            artToSend.startTime &&
            (!transaction || transaction.status != 'paid')
        ) {
            localStorage.removeItem('"' + url + '"');
        }
    } else if (!wallet) {
        chrome.browserAction.setIcon({ path: './logo/logo-nowallet.png' });

    }
}

export { bakingContent }