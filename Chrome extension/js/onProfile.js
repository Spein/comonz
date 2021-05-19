import * as userInfo from '/js/userInfo.js';
import * as wallet from '/js/wallet.js';
import * as blackhole from '/js/blackhole.js';
import * as transactions from '/js/transactions.js';
import * as lists from '/js/lists.js';
console.log('on');
document.getElementById('saveButton').addEventListener('click', userInfo.writeUserData, false);
//Wallet settings
document.getElementById('profile').addEventListener('click', checkProfile, false);
document.getElementById('wallet').addEventListener('click', wallet.checkWallet, false);
//tab transaction
//Paiements fait par l'utilisateur
document.getElementById('filterByHist').addEventListener('click', lists.getUserpaidContents, false);
document.getElementById('filterByAut').addEventListener('click', lists.getSendPaymentsbyAuthors, false);
//Tous les paiements historisés
document.getElementById('rfilterByHist').addEventListener('click', transactions.checkAuthor, false);
// Paiements totaux par contenus
document.getElementById('rfilterByCont').addEventListener('click', lists.getReceivedPaymentsbyContents, false);
// Paiements totaux par utilisateurs
document.getElementById('rfilterByAut').addEventListener('click', lists.getReceivedPaymentsbyUsers, false);
document.getElementById('logout-button').addEventListener('click', logout, false);
document.getElementById('bug-i').addEventListener('click', openBug, false);
document.getElementById('close-bug').addEventListener(
    'click',
    function() {
        $('#bug-form-container').hide();
    },
    false
);
document.getElementById('bug-sended-close').addEventListener(
    'click',
    function() {
        $('#bug-form-container').hide();
    },
    false
);
document.getElementById('bug-button').addEventListener('click', sendBug, false);
document.getElementById('content-back').addEventListener('click', backContent, false);
document.getElementById('getUrl').addEventListener('click', getURL, false);
/* document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var storage = firebase.storage();
        var img = document.querySelector('img'); // $('img')[0]
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        var file = img.src;
        document.getElementById('saveButton').style.display = 'block';
    }
}); */

function logout() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
        localStorage.clear();
    }
}
//Add style to tabs
function styledTabs(user) {
    //console.log(user)
    if (!user.wallet) {
        $('#wallet').addClass('blinking');
        if (!user.authorDetails) {
            $('#transaction').css('color', '#b6b6b6');
        } else {
            $('#transaction').css('color', '#b6b6b6');
            $('#wallet').removeClass('blinking');
        }
    } else if (!user.authorDetails) {
        $('#transaction').addClass('blinking');
    }
}
export function firstCheck() {
    $('#blackhole').html('');
    $('#profile-header').hide();
    $('#wallet-header').hide();
    $('#transaction-header').show();
    let user = JSON.parse(localStorage.getItem('user'));
    let walletStatus = user.wallet ? user.wallet.status : null;
    if (walletStatus) {
        $('#need-wallet').hide();
        transactions.checkAuthor();
    } else {
        $('#need-wallet').show();
        $('#commoners').hide();
        $('#wallet-amount').html(0);
    }
}
document.getElementById('transaction').addEventListener('click', firstCheck, false);
//bug-listener
function openBug() {
    $('#bug-form-container').show('inherit');
}

function sendBug() {
    var user = firebase.auth().currentUser.uid;
    var date = new Date();
    var parsedDate = JSON.stringify(date);
    firebase.database().ref('bugs/' + user).push({
        date: parsedDate,
        message: $('#bug-form').val()
            //content: $("#container").html()
    });
    $('#bug-notsended').hide();
    $('#bug-sended').show();
}
//Editable fields
var editables = document.getElementsByClassName('editable');
for (var i = 0; i < editables.length; i++) {
    (function(index) {
        editables[index].addEventListener('input', function() {
            document.getElementById('saveButton').style.display = 'block';
        });
    })(i);
}
var bugText = document.getElementsByClassName('bug-text');
for (var i = 0; i < bugText.length; i++) {
    (function(index) {
        bugText[index].addEventListener('input', function() {
            document.getElementById('bug-button').style.display = 'block';
        });
    })(i);
}

function onTabClick(event) {
    const panel = document.querySelectorAll('.panel-body');
    // deactivate existing active tabs and panel
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
    }
    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove('active');
    }
    // activate new tabs and panel
    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add('active');
}
//TutoPanels
function backContent() {
    $('#content-area').html('');
    $('#content-area').hide();
}

function getURL() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var user = firebase.auth().currentUser.uid;
        var url = tabs[0].url.replace(/[^\w\s]/gi, '_');
        var date = new Date();
        var parsedDate = JSON.stringify(date);
        firebase
            .database()
            .ref('wishes/' + url)
            .update({
                [user]: parsedDate
            })
            .then((updates) => {
                $('#wishes').html(
                    "<i style='color:#d95555' class='fas fa-seedling'></i><p>Thank you! What a pleasure to expand the family, we will contact our next Creator</p>"
                );
            });
    });
}
document.addEventListener('load', load());
document.addEventListener('load', executeLogic());
document.addEventListener('load', checkSupport());
window.addEventListener('storage', () => {
    load();
});
export function load() {
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(localStorage, JSON.parse(localStorage.getItem('user')));
    if (!user) {
        setTimeout(() => {
            user = JSON.parse(localStorage.getItem('user'));
            $('#displayName').text(user.displayName);
            $('#head').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.head}.png` + ")")
            $('#eye').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.eye}.png` + ")")
            $('#mouth').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.mouth}.png` + ")")
            $('#clothes').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.clothes}.png` + ")")
            $('#face').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.face}.png` + ")")
            $('#background').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.background}.png` + ")")
            $('#email').text(user.email);
            $('#description').text(user.description);
            styledTabs(user);
        }, 1500);
    } else {
        $('#displayName').text(user.displayName);
        $('#head').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.head}.png` + ")")
        $('#eye').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.eye}.png` + ")")
        $('#mouth').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.mouth}.png` + ")")
        $('#clothes').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.clothes}.png` + ")")
        $('#face').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.face}.png` + ")")
        $('#background').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.background}.png` + ")")

        $('#email').text(user.email);
        $('#description').text(user.description);
    }
    blackhole.blackhole('#blackhole', 1, 230, 230, 190);

}
const tab = document.querySelectorAll('.tab-item-link');

function executeLogic() {
    //Profile panels
    console.log(document.querySelectorAll('.tab-item-link'));
    for (let i = 0; i < document.querySelectorAll('.tab-item-link').length; i++) {
        document.querySelectorAll('.tab-item-link')[i].addEventListener('click', onTabClick, false);
    }
}
export function checkProfile() {
    //console.log('cp')
    $('#blackhole').html('');
    checkSupport();
    $('#wallet-header').hide();
    $('#transaction-header').hide();
    $('#profile-header').show();
    blackhole.blackhole('#blackhole', 1, 210, 210, 155);
}
export function checkSupport() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var user = firebase.auth().currentUser.uid;
        var url = tabs[0].url.replace(/[^\w\s]/gi, '_');
        //console.log(url)
        firebase.database().ref('/wishes/' + url).once('value').then(function(snapshot) {
            if (snapshot.val() && snapshot.val()[user]) {
                $('#wishes').html(
                    "<i style='color:#d95555' class='fas fa-seedling'></i><p>You have already indicated your interest in this content and we have probably already contacted its Creator</p>"
                );
            }
        });
    });
}