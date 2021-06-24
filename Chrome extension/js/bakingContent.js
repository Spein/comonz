import { saveTransaction } from '/js/saveTransaction.js';
import { updateCount } from '/js/updateCount.js';


async function bakingContent(authorKey, url, title, img, artToSend, entreesortie) {
    var views = chrome.extension.getViews({ type: "popup" });
    let interval
    let user = JSON.parse(localStorage.getItem('user'));
    var wallet = user.wallet ? user.wallet.status : null;
    let userKey = user.authorKey;
    console.log(entreesortie, user.transactions)
        //console.log(authorKey)
    if (wallet === 'active' && userKey != authorKey) {
        let actualCount

        let transactions = user.transactions ? user.transactions : null;
        let pretransact = transactions ? transactions[authorKey] : null;
        let transaction = pretransact ? pretransact[url] : null;
        let attCounter = user.wallet.Attcounter;
        let onGoingArticle = {
            count: attCounter,
            authorKey: authorKey,
            status: 'onGoing'
        };

        if (entreesortie == "entree") {
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
            console.log(url, transaction, actualCount)
            if (actualCount >= -1 && actualCount > -2) {
                interval = setInterval(function() {
                    if (localStorage.getItem("interval") == "off") {
                        if (actualCount) {
                            let badgeCount = actualCount.toString();
                            chrome.browserAction.setBadgeText({ text: badgeCount });
                            chrome.browserAction.setBadgeBackgroundColor({ color: '#323234' });
                            user.transactions[authorKey][url].count = actualCount;
                            user.transactions[authorKey][url].status = 'onGoing';
                            localStorage.setItem('user', JSON.stringify(user));


                        }
                        actualCount--;
                        if (actualCount <= -1) {
                            clearInterval(interval);
                            chrome.browserAction.setBadgeText({ text: '❤' });
                            chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });
                            user.transactions[authorKey][url].count = actualCount;
                            user.transactions[authorKey][url].status = 'paid';
                            saveTransaction(authorKey, url, user.uid, img, title, false);
                            updateCount(-1, user.uid, url, authorKey);
                            localStorage.setItem('user', JSON.stringify(user));


                        }
                    } else {
                        clearInterval(interval)
                        localStorage.setItem('user', JSON.stringify(user));

                    }
                }, 1000);

            } else if (actualCount <= -1 && user.transactions[authorKey][url].status != 'paid') {

                clearInterval(interval)

                chrome.browserAction.setBadgeText({ text: '❤' });
                chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });
                updateCount(-1, user.uid, url, authorKey);
                user.transactions[authorKey][url].count = -1;
                user.transactions[authorKey][url].status = 'paid';
                localStorage.setItem('user', JSON.stringify(user));
                saveTransaction(authorKey, url, user.uid, img, title, false);
            } else {
                console.log('déja paye')
                if (views.length >= 1) {
                    console.log(views)
                    localStorage.setItem('lastUrl', url);
                    localStorage.setItem('lastKey', authorKey);

                }
                chrome.browserAction.setBadgeText({ text: '❤' });
                chrome.browserAction.setBadgeBackgroundColor({ color: '#fff' });


            }
        } else if (
            entreesortie == "sortie" &&
            (!transaction || transaction.status != 'paid')
        ) {
            console.log(views)
            if (views.length >= 1) {
                localStorage.setItem("'lastProgress" + url + "'", actualCount);
                localStorage.setItem('lastUrl', url);
                localStorage.setItem('lastKey', authorKey);


            } else {
                clearInterval(interval)

                localStorage.removeItem('authorkey');
                localStorage.removeItem('url');
                localStorage.removeItem('lastUrl');
                localStorage.removeItem("'lastProgress" + url + "'");
                localStorage.removeItem('lastKey');
                localStorage.removeItem('yourcontent');

            }
        }
    } else if (!wallet) {
        chrome.browserAction.setIcon({ path: './logo/logo-nowallet.png' });

    }
}

export { bakingContent }