import { saveTransaction } from '/js/saveTransaction.js';
import { updateCount } from '/js/updateCount.js';


async function bakingContent(authorKey, url, title, img, artToSend) {
    let user = JSON.parse(localStorage.getItem('user'));
    var wallet = user.wallet.status;
    let authKey = authorKey;
    let userKey = user.authorKey;
    let triggerOn;
    if (wallet === 'active' && userKey != authKey) {
        localStorage.setItem('"' + url + '"', JSON.stringify(artToSend));
        let transactions = user.transactions ? user.transactions : null;
        let transaction = transactions ? transactions[url] : null;
        console.log(url, user, transaction);
        let attCounter = user.wallet.Attcounter;
        let onGoingArticle = {
            count: attCounter,
            authorKey: authKey,
            status: 'onGoing'
        };
        let actualCount = transaction ? transaction.count : onGoingArticle.count;
        if (artToSend && artToSend.startTime && artToSend.stopTime === null) {
            if (!transactions) {
                user.transactions = {};
            }
            if (!transaction) {
                let art = url;
                user.transactions[url] = onGoingArticle;
                //console.log(user)
                localStorage.setItem('user', JSON.stringify(user));
            }
            console.log(transaction, onGoingArticle, actualCount);
            if (actualCount >= -1 && actualCount > -2) {
                let interval = setInterval(function() {
                    triggerOn = true;
                    if (actualCount) {
                        let badgeCount = actualCount.toString();
                        chrome.browserAction.setBadgeText({ text: badgeCount });

                    }
                    actualCount--;
                    if (actualCount == -1) {
                        clearInterval(interval);
                        chrome.browserAction.setBadgeText({ text: '<3' });
                        saveTransaction(authKey, url, user.uid, img, title, false);
                        updateCount(-1, user.uid, url, authorKey);


                    }
                }, 1000);
                chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse, event) {
                    if (triggerOn && actualCount != null) {
                        triggerOn = false;
                        console.log("ici", actualCount, url, window.location)
                        updateCount(actualCount, user.uid, url, authorKey);
                        user.transactions[url].count = actualCount;
                        if (actualCount > -1) {
                            user.transactions[url].status = 'onGoing';
                        } else {
                            user.transactions[url].status = 'paid';

                        }
                        localStorage.setItem('user', JSON.stringify(user));
                        clearInterval(interval);
                        localStorage.setItem('lastProgress', actualCount);
                    }
                });
            } else if (actualCount <= -1 && user.transactions[url].status != 'paid') {
                chrome.browserAction.setBadgeText({ text: '<3' });
                updateCount(-1, user.uid, url, authorKey);
                user.transactions[url].count = -1;
                user.transactions[url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authKey, url, user.uid, img, title, false);
            } else {
                triggerOn = false;
                console.log('pas ici')
                chrome.browserAction.setBadgeText({ text: '<3' });
                localStorage.removeItem('"' + url + '"');

            }
        } else if (
            artToSend.stopTime !== null &&
            artToSend.startTime &&
            (transaction.status != 'paid' || !transaction)
        ) {
            localStorage.removeItem('"' + url + '"');
        }
    }
}

export { bakingContent }