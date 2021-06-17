import * as blackhole from '/js/blackhole.js';
import { retrieveUser } from '/js/retrieveUser.js';
import * as setAuthor from '/js/setAuthor.js';

let progress
let url
getContent()


var tz = moment.tz.guess(true);
async function getContent() {
    const keyzz = await setAuthor.getComonzKey();
    console.log(keyzz)

    url = await setAuthor.getUrl();
    const rulzzz = url
    const author = await setAuthor.getAuthorDetails(keyzz, rulzzz);
    const user = JSON.parse(localStorage.getItem('user'));
    let dateofFunding;
    let comoners;
    //console.log(keyzz, rulzzz, author, user.transactions[rulzzz].count);
    const userId = user.uid;

    console.log(author)
    const userCom = author.comments ? author.comments[userId] : null;
    const userComdate = userCom ? moment.tz(userCom.date.substring(1, 25), tz).fromNow() : null;
    if (author.transactions[rulzzz].cTransactions) {
        comoners = Object.keys(author.transactions[rulzzz].cTransactions) ?
            Object.keys(author.transactions[rulzzz].cTransactions).length :
            0;
        dateofFunding = author.transactions[rulzzz].cTransactions[userId] ?
            author.transactions[rulzzz].cTransactions[userId].date :
            null;
    }
    const comments = author.comments;
    var authorDisplayname = author.details.displayName;
    var authorDescription = author.details.description;
    $('#head').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.head}.png` + ")")
    $('#eye').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.eye}.png` + ")")
    $('#mouth').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.mouth}.png` + ")")
    $('#clothes').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.clothes}.png` + ")")
    $('#face').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.face}.png` + ")")
    $('#background').css("background-image", "url(" + `../img/${author.details.photoURL.genre}/${author.details.photoURL.background}.png` + ")")
    $('#user-container').text(authorDisplayname);
    $('#description-container').text(authorDescription);
    $('#comment').html('   ');
    var editables = document.getElementsByClassName('editable');
    if (user.wallet) {
        let ownContent = JSON.parse(localStorage.getItem("yourcontent"))
        localStorage.removeItem("yourcontent");

        $('#wallet-on').show();
        $('#wallet-off').hide();
        if (ownContent) {
            $('#statut-transaction').html('')
            $("#vcomment-field").hide()
            $('#statut-transaction').html("<p>This is your content. It would be a bit egotic to be your own patron, right?</p>")

        } else if (!ownContent) {
            progress = JSON.parse(localStorage.getItem("'lastProgress" + rulzzz + "'")) ? parseInt(JSON.parse(localStorage.getItem("'lastProgress" + rulzzz + "'"))) : user.transactions[keyzz][rulzzz].count
            localStorage.removeItem("'lastProgress" + rulzzz + "'");
            if (progress > -1) {
                setInterval(function() {
                    $('#statut-transaction').html('<p>CoMonZ dropped in :<br>' + (parseInt(progress) - 1) + ' seconds</p>');
                    progress--;
                    localStorage.setItem("'sentProgress" + rulzzz + "'", parseInt(progress));
                    if (progress <= -1) {
                        clearInterval()
                        if (dateofFunding) {
                            const diffTime =
                                Date.parse(user.wallet.endDate.substring(1, 25)) > Date.parse(dateofFunding.substring(1, 25));
                            const fundDate = moment.tz(dateofFunding.substring(1, 25), tz).fromNow();
                            $('#statut-transaction').hide();
                            $('#content-fund').show();
                            $('#funding-date').html(fundDate);
                            console.log(diffTime);
                            if (diffTime) {
                                $('#cancel-fund').show();
                            } else {
                                $('#cancel-fund').hide();
                            }
                        }
                    }
                }, 1000);
                for (var i = 0; i < editables.length; i++) {
                    (function(index) {
                        editables[index].addEventListener('input', function() {
                            if ($('#comment').html().length > 4 && progress > -1) {
                                $('#vcomment').show();
                                $('#vcomment').prop('disabled', true);
                                $('#vcomment').text('No room for Trollz');
                            } else if ($('#comment').html().length > 4 && progress <= -1) {
                                $('#vcomment').show();
                                $('#vcomment').prop('disabled', false);
                                $('#vcomment').text('Express your feelings');
                            } else {
                                $('#vcomment').hide();
                            }
                        });
                    })(i);
                }
            } else if (progress <= -1 && !ownContent) {
                for (var i = 0; i < editables.length; i++) {
                    (function(index) {
                        editables[index].addEventListener('input', function() {
                            console.log('edit');
                            if ($('#comment').html().length > 4 && progress > -1) {
                                $('#vcomment').show();
                                $('#vcomment').prop('disabled', true);
                                $('#vcomment').text('No room for Trollz');
                            } else if ($('#comment').html().length > 4 && (progress <= -1)) {
                                $('#vcomment').show();
                                $('#vcomment').prop('disabled', false);
                                $('#vcomment').text('Express your feelings');
                            } else {
                                $('#vcomment').hide();
                            }
                        });
                    })(i);
                }
                console.log(dateofFunding)
                if (dateofFunding) {
                    const diffTime =
                        Date.parse(user.wallet.endDate.substring(1, 25)) > Date.parse(dateofFunding.substring(1, 25));
                    const fundDate = moment.tz(dateofFunding.substring(1, 25), tz).fromNow();
                    $('#statut-transaction').hide();
                    $('#content-fund').show();
                    $('#funding-date').html(fundDate);
                    console.log(diffTime);
                    if (diffTime) {
                        $('#cancel-fund').show();
                    } else {
                        $('#cancel-fund').hide();
                    }
                }
            }

        }
    } else {
        $('#wallet-on').hide();
        $('#wallet-off').show();
    }
    if (comoners) {
        blackhole.blackhole('#blackhole', comoners, 220, 220, 125);
        $('#commoners').html('<p>This work has already charmed <strong> ' + comoners + ' CoMonerZ</strong></p>.');
        if (comments) {
            console.log(comments)
            refreshComments(comments);
            if (userCom) {
                $('#comment').hide();
                $('#ownCom-text').text(userCom.content);
                $('#ownComdate').html(userComdate);
                $('#lcomment').show();
                $('#pre-com').hide();
            } else {
                $('#lcomment').hide();
            }
        }
    } else {
        $('#statut-transaction').text('pas encore de support');
        blackhole.blackhole('#blackhole', 1, 220, 220, 85);
    }

    function refreshComments(comments) {
        Object.keys(comments).forEach((userId, index) => {
            var commentsDiv = document.getElementById('comments-list');
            console.log(comments[userId])
            commentsDiv.innerHTML +=
                `<div class="transaction">
                <div class="first-trcontainer">
                    <div class="comment-container">
                        <p class="tr-title">${comments[userId].content}</p>
                        <p class="tr-date">${moment.tz(comments[userId].date.substring(1, 25), tz).fromNow()}</p>
                    </div>
                </div>
                <div class='second-trcontainer'>
                        <div id="avatar-wrapper">
                            <div id="mini-background" style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.background}.png)"></div>
                            <div id="mini-face"style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.face}.png)"></div>
                            <div id="mini-head" style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.head}.png)"></div>
                            <div id="mini-eye" style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.eye}.png)"></div>
                            <div id="mini-mouth" style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.mouth}.png)"></div>
                            <div id="mini-clothes" style="border: 3px solid #d95555;style="background-image:url(../img/${comments[userId].photoURL.genre}/${comments[userId].photoURL.clothes}.png)""></div>
                            <p style="padding-top:10vw">${comments[userId].displayName}</p>
                        </div>
                </div>
            </div>`;
        });
    }
    async function linkComment() {
        const keyzz = await setAuthor.getComonzKey();
        const rulzzz = url
        const user = await retrieveUser();
        console.log(keyzz)
        const author = await setAuthor.getAuthorDetails(keyzz, rulzzz);
        var comRef = firebase.database().ref('transactions/' + keyzz + '/' + rulzzz + '/comments/' + user.uid);
        var date = new Date();
        var parsedDate = JSON.stringify(date);
        var comment = $('#comment').html();
        $('#pre-com').hide();
        $('#lcomment').show();
        var moDate = moment.tz(parsedDate.substring(1, 22), tz).fromNow();
        $('#ownCom').html(comment);
        $('#ownComdate').html(moDate);
        $('#comments-list').html('');
        if (comments) {
            refreshComments(author.comments);

        }
        if (comment.length > 0) {
            comRef.update({
                content: comment,
                date: parsedDate
            });
        }
    }
    document.getElementById('vcomment').addEventListener('click', linkComment, false);
    async function cancelFund() {
        const keyzz = await setAuthor.getComonzKey();
        const rulzzz = url
        const user = await retrieveUser();
        var transRef = firebase.database().ref('transactions/' + keyzz + '/' + rulzzz + '/cTransactions/' + user.uid);
        var comRef = firebase.database().ref('transactions/' + keyzz + '/' + rulzzz + '/comments/' + user.uid);
        var userRef = firebase.database().ref('users/' + user.uid + '/transactions/' + keyzz + '/' + rulzzz);
        transRef.remove();
        comRef.remove();
        userRef.update({
            count: user.wallet.Attcounter,
            status: 'canceled'
        });
        console.log('remove completed');
        $('#content-fund').hide();
        $('#content-refund').show();
    }
    document.getElementById('cancel-fund').addEventListener('click', cancelFund, false);

    function backProfile() {
        $('#content-area').load('profile.html');
        $('#content-area').show();
    }
    document.getElementById('profile-back').addEventListener('click', backProfile, false);
    /*     chrome.runtime.sendMessage({ payload: [keyzz, rulzzz, null, null, null, "onApp"] }); */
}

function goWallet() {
    $('#container').html('');
    $('#container').load('profile.html');
}
document.getElementById('goWallet').addEventListener('click', goWallet, false);