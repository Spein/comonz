import * as blackhole from '/js/blackhole.js';
import * as setUser from '/js/setUser.js';
import * as setAuthor from '/js/setAuthor.js';

setTimeout(getContent(), 500);
var tz = moment.tz.guess(true);


async function getContent() {
    const keyzz = await setAuthor.getComonzKey()
    const rulzzz = await setAuthor.getUrl()
    const author = await setAuthor.getAuthorDetails(keyzz, rulzzz)
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.uid
    const progress = JSON.parse(localStorage.getItem('progress'))
    const userCom = author.comments[userId] ? author.comments[userId] : null
    const userComdate = userCom ? moment.tz(userCom.date.substring(1, 25), tz).fromNow() : null
    const comoners = Object.keys(author.transactions[rulzzz].cTransactions) ? Object.keys(author.transactions[rulzzz].cTransactions).length : 0
    const comments = author.comments
    console.log(author, user, userComdate, progress)

    var authorDisplayname = author.details.displayName;
    var authorphotoURL = author.details.photoURL;
    var authorDescription = author.details.description;

    const dateofFunding = author.transactions[rulzzz].cTransactions[userId] ? author.transactions[rulzzz].cTransactions[userId].date : null

    $('#avatarPic').attr('src', authorphotoURL);
    $('#user-container').text(authorDisplayname);
    $('#description-container').text(authorDescription);
    $('#comment').html('   ');
    var editables = document.getElementsByClassName('editable');


    if (user.wallet) {
        $('#wallet-on').show();
        $('#wallet-off').hide();
        let progress = localStorage.getItem('progress')

        if (progress > 0) {
            setInterval(function() {
                $('#statut-transaction').html(
                    '<p>CoMonZ dropped in :<br>' + progress - 2 + ' seconds</p>'
                );
                progress--
            }, 1000);
        }

        if ((progress >= -1 && !userCom)) {
            $('#vcomment').hide();
            for (var i = 0; i < editables.length; i++) {
                (function(index) {
                    editables[index].addEventListener('input', function() {
                        if ($('#comment').html().length > 4 && progress > 0) {
                            $('#vcomment').show();
                            $('#vcomment').prop('disabled', true)
                            $('#vcomment').text('No room for Trollz')
                        } else if ($('#comment').html().length > 4 && progress === -1) {
                            $('#vcomment').show();
                            $('#vcomment').prop('disabled', false)
                            $('#vcomment').text('Express your feelings')

                        } else {}
                    });
                })(i);
            }
        }
        if (progress === -1) {
            for (var i = 0; i < editables.length; i++) {
                (function(index) {
                    editables[index].addEventListener('input', function() {
                        if ($('#comment').html().length > 4 && progress > 0) {
                            $('#vcomment').show();
                            $('#vcomment').prop('disabled', true)
                            $('#vcomment').text('No room for Trollz')
                        } else if ($('#comment').html().length > 4 && progress === -1) {
                            $('#vcomment').show();
                            $('#vcomment').prop('disabled', false)
                            $('#vcomment').text('Express your feelings')

                        } else {}
                    });
                })(i);
            }
            if (dateofFunding) {
                const diffTime = Date.parse(user.wallet.endDate.substring(1, 25)) > Date.parse(dateofFunding.substring(1, 25))
                const fundDate = moment.tz(dateofFunding.substring(1, 25), tz).fromNow();
                $('#statut-transaction').hide();
                $('#content-fund').show();
                $('#funding-date').html(fundDate);
                console.log(diffTime)
                if (diffTime) {
                    $('#cancel-fund').show();
                } else {
                    $('#cancel-fund').hide();

                }

            }
        }
    } else {
        $('#wallet-on').hide();
        $('#wallet-off').show();
    }



    if (comoners) {
        blackhole.blackhole('#blackhole', comoners, 220, 220, 125);
        $('#commoners').text(
            'This work has already charmed ' + comoners + ' CoMonerZ. So they say...'
        );
        if (comments) {
            refreshComments(comments)

            if (userCom) {
                $('#comment').hide();
                $('#ownCom-text').text(userCom.content)
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

            commentsDiv.innerHTML +=
                '<div class="transaction"><div class="first-trcontainer"><div class="comment-container"><p class="tr-title">' +
                comments[userId].content +
                '</p></div><p class="tr-date">' +
                moment
                .tz(comments[userId].date.substring(1, 25), tz)
                .fromNow() +
                '</p></div><div class="second-trcontainer"> <figure class="avatar avatar-sm"><img id="avatarPic" src="' +
                comments[userId].photoURL +
                '" alt="Avatar"></figure><p>' +
                comments[userId].displayName +
                '</p></div></div>';
        })
    }
    async function linkComment() {
        const keyzz = await setAuthor.getComonzKey()
        const rulzzz = await setAuthor.getUrl()
        const user = await setUser.retrieveUser()
        const author = await setAuthor.getAuthorDetails(keyzz, rulzzz)

        var comRef = firebase
            .database()
            .ref('transactions/' + keyzz + '/' + rulzzz + '/comments/' + user.uid);
        var date = new Date();
        var parsedDate = JSON.stringify(date);
        var comment = $('#comment').html();
        $('#pre-com').hide();
        $('#lcomment').show();
        var moDate = moment.tz(parsedDate.substring(1, 22), tz).fromNow();

        $('#ownCom').html(comment);

        $('#ownComdate').html(moDate);
        $('#comments-list').html('');
        refreshComments(author.comments)

        if (comment.length > 0) {
            comRef.update({
                content: comment,
                date: parsedDate
            });
        }
    }
    document.getElementById('vcomment').addEventListener('click', linkComment, false);

    async function cancelFund() {
        const keyzz = await setAuthor.getComonzKey()
        const rulzzz = await setAuthor.getUrl()
        const user = await setUser.retrieveUser()


        var transRef = firebase
            .database()
            .ref('transactions/' + keyzz + '/' + rulzzz + '/cTransactions/' + user.uid);
        var comRef = firebase.database().ref('transactions/' + keyzz + '/' + rulzzz + '/comments/' + user.uid);
        var userRef = firebase.database().ref('users/' + user.uid + '/transactions/' + rulzzz);
        transRef.remove();
        comRef.remove()
        userRef.update({
            count: 60,
            status: 'canceled'
        })
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
    $('#container').html('')
    $("#container").load("profile.html")

}

document.getElementById('goWallet').addEventListener('click', goWallet, false);


window.onload = connectPort()
    //window.onunload = disconnectPort()


function connectPort() {
    var port = chrome.runtime.connect({ name: "knockknock" });
    //port.postMessage({ joke: "Knock knock" });
}

function disconnectPort() {
    var port = chrome.runtime.disconnect({ name: "knockknock" });
    //port.postMessage({ joke: "Knock knock" });
}