import { updateUser } from '/js/updateUser.js';
import { logout } from '/js/logout.js';
import { checkActivetabs } from '/js/checkActivetabs.js';
import { openBug, closeBug, sendBug } from '/js/bugForm.js'
import { checkWallet } from '/js/wallet.js';
import { checkProfile } from '/js/checkProfile.js';

import { getUrl } from '/js/getUrl.js';

import * as blackhole from '/js/blackhole.js';
import { checkAuthor } from '/js/transactions.js';
import { getUserpaidContents, getSendPaymentsbyAuthors, getReceivedPaymentsbyContents, getReceivedPaymentsbyUsers } from '/js/lists.js';
//Wallet settings
//tab transaction
//Paiements fait par l'utilisateur
document.getElementById('profile').addEventListener('click', checkProfile, false);
document.getElementById('saveButton').addEventListener('click', updateUser, false);


document.getElementById('bug-i').addEventListener('click', openBug, false);
document.getElementById('bug-button').addEventListener('click', sendBug, false);
document.getElementById('bug-sended-close').addEventListener('click', closeBug, false);
document.getElementById('close-bug').addEventListener('click', closeBug, false);


document.getElementById('content-back').addEventListener('click', backContent, false);
document.getElementById('getUrl').addEventListener('click', getUrl, false);



document.getElementById('wallet').addEventListener('click', checkWallet, false);
document.getElementById('filterByHist').addEventListener('click', getUserpaidContents, false);
document.getElementById('filterByAut').addEventListener('click', getSendPaymentsbyAuthors, false);

document.getElementById('transaction').addEventListener('click', checkActivetabs, false);
document.getElementById('rfilterByCont').addEventListener('click', getReceivedPaymentsbyContents, false);
document.getElementById('rfilterByAut').addEventListener('click', getReceivedPaymentsbyUsers, false);
document.getElementById('rfilterByHist').addEventListener('click', checkAuthor, false);


document.getElementById('logout-button').addEventListener('click', logout, false);

//bug-listener



//TutoPanels
function backContent() {
    $('#content-area').html('');
    $('#content-area').hide();
}


//document.addEventListener('load', load());