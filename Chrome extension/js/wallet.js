import * as blackhole from '/js/blackhole.js';
import * as lists from '/js/lists.js';
import { tuto } from '/js/tuto.js';

moment();
export function checkWallet() {
    $('#paypal-button-container').html('');
    $('#blackhole').html('');
    $('#profile-header').hide();
    $('#transaction-header').hide();
    $('#wallet-header').show();
    $('#transactions-footer').show();
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user.wallet)
    tuto("wallet")
    var walletStatus = user.wallet ? user.wallet.status : null
    var transactions = user.transactions;
    if (walletStatus === 'active') {
        var attCounter = user.wallet.Attcounter;
        $('#create-wallet').hide();
        $('#wallet-inactive').hide();
        $('#wallet-amount').show();
        $('#commonZ').show();
        var moDate = moment(user.wallet.startDate.substring(1, 20)).fromNow();
        $('#wallet-amount').html(user.wallet.amount);
        blackhole.blackhole('#blackhole', $('#wallet-amount').html(), 220, 220, 125);
        document.querySelector('#wallet-startDate').innerHTML = moment(
            user.wallet.startDate.substring(1, 11)
        ).format('DD/MM/YYYY');
        document.querySelector('#wallet-endDate').innerHTML = moment(user.wallet.endDate.substring(1, 11)).format(
            'DD/MM/YYYY'
        );

        $('#btns-wallet').hide();
        var minutes = Math.floor(attCounter / 60);

        if (attCounter < 61 && !attCounter == 60) {
            var seconds = attCounter;


        } else if (attCounter == 60) {
            var seconds = 0;
            minutes = 1;

        } else {

            var seconds = attCounter - 60 * minutes;
        }

        $('#statut-commons').html(
            `<p>You've purchased those CoMonz
                <span style='color:#d95555'>${moDate}</span>
            </p>
            <p>You'll offering your support after :<br>
                <span id='attCounter'></span> passed on any affiliated Creator's content</p>
            <p>Your wallet will be <b>equally ditributed</b> through your supported authors <b>at the end of the active period</b> below</p>"
   `
        );
        $('#attCounter').html(minutes + ' minutes ' + seconds + ' seconds');

        $('#statut-commons').show();
        $('#date-container').show();

        $('#wallet-on').show();
    } else if (walletStatus === 'inactive') {
        $('#create-wallet').hide();
        $('#wallet-active').show();
        $('#btns-wallet').show();
        $('#statut-commons').html(
            `
            <p><i>Your active period is over.<br> Add your coMonZ here and determine your attention time once more:<i></p>
            <p>Your attention time is: <br> <span id = 'attCounter'> 1 minute and 0 seconds</span></p>

            `
        );
    } else if (!walletStatus) {
        blackhole.blackhole('#blackhole', 1, 220, 220, 125);
        $('#wallet-charged').hide();
        createWallet();
    }
    if (transactions) {
        console.log('transactions ' + transactions)
        lists.getUserpaidContents();
        $('#no-transactions').hide();
        $('#transactions-sent').show();
    } else {
        $('#no-transactions').show();
        $('#transactions-sent').hide();
    }


}

function checkSave() {
    setTimeout(function() {
        if (parseInt($('#wallet-amount').html()) > 0) {
            $('#save-wallet').show();
        } else {
            $('#save-wallet').hide();
        }
    }, 100);
}
document.getElementById('minus-commons').addEventListener('click', checkSave, false);
document.getElementById('add-commons').addEventListener('click', checkSave, false);

export function createWallet() {
    $('#no-wallet').hide();
    $('#create-wallet').hide();
    $('#wallet-amount').show();
    $('#btns-wallet').show();
    $('#statut-commons').html(
        "<p> Your attention time is: <br> <span id = 'attCounter'> 1 minute and 0 seconds</span></p>"
    );
    $('#wallet-on').show();
    $('#commonZ').show();
}
export function minComonz() {
    var parsedCount = parseInt($('#wallet-amount').html());
    if (parsedCount > 0) {
        parsedCount = parsedCount - 10;
        $('#wallet-amount').html(parsedCount + '<br>');
        $('#euro-amount').html('Actual Amount: ' + parsedCount / 10 + ' €');

        blackhole.blackhole('#blackhole', parsedCount, 220, 220, 125);
    }
}
document.getElementById('minus-commons').addEventListener('click', minComonz, false);
export function addComonz() {
    var parsedCount = parseInt($('#wallet-amount').html());
    parsedCount = parsedCount + 10;
    $('#wallet-amount').html(parsedCount);
    $('#euro-amount').html('Actual Amount: ' + parsedCount / 10 + ' €');
    blackhole.blackhole('#blackhole', parsedCount, 220, 220, 125);
}
document.getElementById('add-commons').addEventListener('click', addComonz, false);
export async function saveWallet() {
    let user = JSON.parse(localStorage.getItem('user'))
    $('#btns-wallet').hide();
    $('#paypal-button-container').html('');
    var startDate = new Date();
    var endDate = moment(new Date()).add(1, 'month');

    var parsedStartDate = JSON.stringify(startDate);
    var parsedEndDate = JSON.stringify(endDate);
    let wallet = {
        amount: $('#wallet-amount').html() / 10,
        startDate: parsedStartDate,
        endDate: parsedEndDate,
        status: 'active',
        Attcounter: parseInt($('input[name="participants"]').val())
    }

    user.wallet = wallet

    /*    window.location.replace('http://spein0ps.com/sandbox/cmz-site/checkout')
       chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
               console.log(tabs)
               chrome.tabs.update(tabs[0].id, { url: 'http://spein0ps.com/sandbox/cmz-site/checkout' });
               setTimeout(() => {
                   chrome.tabs.sendMessage(tabs[0].id, { user }, function(response) {
                       console.log('response.farewell');
                   })
               }, 1000)


           }) */
    paypal
        .Buttons({
            // Set up the transaction
            createOrder: function(data, actions) {
                var amount = $('#wallet-amount').html();
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency: 'EUR',
                            value: amount / 10
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(async function(details) {

                    // Show a success message to the buyer
                    $('#paypal-button-container').html('');


                    var userId = firebase.auth().currentUser.uid
                    var amount = $('#wallet-amount').html();
                    var startDate = new Date();
                    var endDate = moment(new Date()).add(1, 'month');

                    var parsedStartDate = JSON.stringify(startDate);
                    var parsedEndDate = JSON.stringify(endDate);

                    $('#btns-wallet').hide();
                    $('#save-commons').hide();
                    $('#wallet-active').show();

                    //Paypal
                    blackhole.blackhole('#blackhole', amount, 220, 220, 125);
                    let wallet = {
                        amount: amount,
                        startDate: parsedStartDate,
                        endDate: parsedEndDate,
                        status: 'active',
                        Attcounter: parseInt($('input[name="participants"]').val())
                    }
                    var user = await firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) { return snapshot.val() })
                    user.wallet = wallet
                    let hash = Math.abs(hashCode(userId, userId))

                    user.token = hash
                        //console.log(user)
                    sendNft(hash)
                    let token = {
                        [hash]: userId
                    }
                    firebase
                        .database()
                        .ref('users/' + userId)
                        .set(user)
                    firebase
                        .database()
                        .ref('tokens/' + hash)
                        .set({ userId: userId })
                    $('#paypal-button-container').hide();
                    localStorage.setItem('user', JSON.stringify(user))
                    checkWallet();

                });
            }
        })
        .render('#paypal-button-container');
}
document.getElementById('save-wallet').addEventListener('click', saveWallet, false);

export function checkWStatus() {
    //console.log(user);
    let user = JSON.parse(localStorage.getItem('user'))

    var endDate = user.wallet.endDate;
    var month = moment(user.wallet.startDate.substring(1, 11)).format('MMMM');
    var year = moment(user.wallet.startDate.substring(1, 11)).format('YYYY');
    var walletAmount = user.wallet.amount;
    var diff = moment().diff(user.wallet.endDate.substring(1, 20), 'days');
    var transactions = user.transactions;
    var clientIds = [];
    var arrContent = Object.entries(transactions);
    var walletRef = firebase.database().ref('/users/' + user.uid + '/wallet');

    //console.log(diff);

    if (diff > 0 && transactions) {
        arrContent.forEach((valeur, i) => {
            clientIds.push(valeur[1].authorKey);
        });

        var filteredclientIds = clientIds.filter((x, i, a) => a.indexOf(x) == i);
        filteredclientIds.forEach((authorKey, i) => {
            var counts = lists.getOccurence(clientIds, authorKey);
            var share = counts / Object.keys(transactions).length;
            firebase
                .database()
                .ref('/checkouts/' + authorKey + '/' + year + '/' + month)
                .update({
                    [user.uid]: walletAmount / 10 * share
                })
                .then(
                    walletRef.update({
                        status: 'inactive',
                        amount: 0
                    })
                );
        });
    }

}

export function hashCode(mot, hashW) {
    var hash = hashW;
    let i;
    let char;
    if (mot.length == 0) return hash;
    for (i = 0; i < mot.length; i++) {
        char = mot.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
const $element = $('input[type="range"]');
const $tooltip = $('#range-tooltip');
const sliderStates = [
    { name: 'low', tooltip: 'Great, a Super Faaan! We love snipers.', range: _.range(5, 300) },
    { name: 'med', tooltip: "Well, you deserve time to know what's worthy and what's not", range: _.range(300, 500) },
    { name: 'high', tooltip: '“Tolerance is the daughter of doubt.”', range: [600] }
];
var currentState;
var $handle;

$element
    .rangeslider({
        polyfill: false,
        onInit: function() {
            $handle = $('.rangeslider__handle', this.$range);
            updateHandle($handle[0], this.value);
            updateState($handle[0], this.value);
        }
    })
    .on('input', function() {
        var minutes = Math.floor(this.value / 60);
        if (this.value < 61) {
            var seconds = this.value;
        } else {
            var seconds = this.value - 60 * minutes;
        }
        $('#attCounter').html(minutes + ' minutes ' + seconds + ' secondes ');
        updateHandle($handle[0], this.value);
        checkState($handle[0], this.value);
    });

// Update the value inside the slider handle
function updateHandle(el, val) {
    el.textContent = val;
}

// Check if the slider state has changed
function checkState(el, val) {
    // if the value does not fall in the range of the current state, update that shit.
    if (!_.contains(currentState.range, parseInt(val))) {
        updateState(el, val);
    }
}

// Change the state of the slider
function updateState(el, val) {
    for (var j = 0; j < sliderStates.length; j++) {
        if (_.contains(sliderStates[j].range, parseInt(val))) {
            currentState = sliderStates[j];
            // updateSlider();
        }
    }
    // If the state is high, update the handle count to read 50+
    if (currentState.name == 'high') {
        updateHandle($handle[0], '600');
    }
    // Update handle color
    $handle
        .removeClass(function(index, css) {
            return (css.match(/(^|\s)js-\S+/g) || []).join(' ');
        })
        .addClass('js-' + currentState.name);
    // Update tooltip
    $tooltip.html(currentState.tooltip);
}

export function sendNft(hash) {
    let payload = {
        userHash: hash
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'content-type': 'application/json',
        },
    };
    fetch('https://comonz-site.herokuapp.com/create', options)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(err => console.log(err));
};