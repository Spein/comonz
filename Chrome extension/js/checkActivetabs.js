import { checkAuthor } from '/js/transactions.js';
import { tuto } from '/js/tuto.js';

function checkActivetabs() {
    tuto("creator")

    $('#blackhole').html('');
    $('#profile-header').hide();
    $('#wallet-header').hide();
    $('#transaction-header').show();
    let user = JSON.parse(localStorage.getItem('user'));
    let walletStatus = user.wallet ? user.wallet.status : null;
    if (walletStatus) {
        $('#need-wallet').hide();
        checkAuthor();
    } else {
        $('#need-wallet').show();
        $('#commoners').hide();
        $('#wallet-amount').html(0);
    }
}
export { checkActivetabs }