import { saveTransaction } from '/js/saveTransaction.js';
import { updateCount } from '/js/updateCount.js';


async function bakingContent(authorKey, url, title, img, artToSend) {
    let user = JSON.parse(localStorage.getItem('user'));
    var wallet = user.wallet ? user.wallet.status : null;
    let userKey = user.authorKey;
    let triggerOn;
    if (wallet === 'active' && userKey != authorKey) {
        localStorage.setItem('"' + url + '"', JSON.stringify(artToSend));
        let transactions = user.transactions ? user.transactions : null;
        let pretransact = transactions ? transactions[authorKey] : null;
        let transaction = pretransact ? pretransact[url] : null;
        console.log(url, user, transaction);
        let attCounter = user.wallet.Attcounter;
        let onGoingArticle = {
            count: attCounter,
            authorKey: authorKey,
            status: 'onGoing'
        };
        let actualCount = transaction ? transaction.count : onGoingArticle.count;
        if (artToSend && artToSend.startTime && artToSend.stopTime === null) {
            if (!transactions) {
                user.transactions = {};
            }
            if (!transaction) {
                let art = url;
                user.transactions[authorKey] = {}

                user.transactions[authorKey][url] = onGoingArticle;
                console.log(user.transactions)

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
                        saveTransaction(authorKey, url, user.uid, img, title, false);
                        updateCount(-1, user.uid, url, authorKey);


                    }
                }, 1000);
                chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse, event) {
                    if (triggerOn && actualCount != null) {
                        triggerOn = false;
                        console.log("ici", actualCount, url, window.location)
                        updateCount(actualCount, user.uid, url, authorKey);
                        user.transactions[authorKey][url].count = actualCount;
                        if (actualCount > -1) {
                            user.transactions[authorKey][url].status = 'onGoing';
                        } else {
                            user.transactions[authorKey][url].status = 'paid';

                        }
                        localStorage.setItem('user', JSON.stringify(user));
                        clearInterval(interval);
                        localStorage.setItem('lastProgress', actualCount);
                    }
                });
            } else if (actualCount <= -1 && user.transactions[authorKey][url].status != 'paid') {
                chrome.browserAction.setBadgeText({ text: '<3' });
                updateCount(-1, user.uid, url, authorKey);
                user.transactions[authorKey][url].count = -1;
                user.transactions[authorKey][url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authorKey, url, user.uid, img, title, false);
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
    } else if (!wallet) {
        chrome.browserAction.setIcon({ path: './logo/logo-nowallet.png' });

    }
}

export { bakingContent }