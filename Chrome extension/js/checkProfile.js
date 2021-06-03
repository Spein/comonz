import { checkSupport } from '/js/checkSupport.js';
import * as blackhole from '/js/blackhole.js';

function checkProfile() {
    //console.log('cp')
    $('#blackhole').html('');
    checkSupport();
    $('#wallet-header').hide();
    $('#transaction-header').hide();
    $('#profile-header').show();
    blackhole.blackhole('#blackhole', 1, 260, 220, 150);
}
export { checkProfile }