var tz = moment.tz.guess(true);
//Paiements fait par l'utilisateur
export function getUserpaidContents() {
    var div = document.getElementById('transactions-sent');
    div.innerHTML = '';
    div.innerHTML +=
        '<div class="transaction"><div class="first-trcontainer"><p class="column-title" style="align-self:center;"><i class="fab fa-autoprefixer"></i>Title</p></div><div class="second-trcontainer"><p class="column-title"><i class="fas fa-feather-alt"></i> Creator</p></div></div>';
    let user = JSON.parse(localStorage.getItem('user'));
    let transactions = user.transactions;
    var urls = Object.keys(transactions);
    let userId = user.uid;
    if (transactions) {
        urls.forEach(async function(transaction) {
            //console.log(transactions[transaction], transaction)
            var authorKey = transactions[transaction].authorKey;
            var status = transactions[transaction].status;
            var count = transactions[transaction].count;
            //console.log(authorKey, status, count)
            if (status === 'paid') {
                let transactionDetails = await firebase
                    .database()
                    .ref('/transactions/' + authorKey)
                    .once('value')
                    .then(function(data) {
                        return data.val();
                    });
                let authorId = transactionDetails.authorId;
                let authorInfo = await firebase.database().ref('/users/' + authorId).once('value').then(function(data) {
                    return data.val();
                });
                var authorDisplayname = authorInfo.displayName;
                var authorphotoURL = authorInfo.photoURL;
                let contentDetail = transactionDetails[transaction];
                var img = contentDetail.img;
                var title = contentDetail.title;
                console.log(authorDisplayname, authorphotoURL, contentDetail.cTransactions[userId]);
                let userTransDetails = contentDetail.cTransactions[userId];
                var date = userTransDetails.date;
                var subDate = date.substring(1, 25);
                var moDate = moment.tz(subDate, tz).fromNow();
                var shortTitle = title.substring(0, 35) + '...';
                div.innerHTML +=
                    '<div class="transaction payed"><div class="first-trcontainer"><p class="tr-title">' +
                    shortTitle +
                    '</p><p class="tr-date">' +
                    moDate +
                    '</p></div><div class="second-trcontainer"> <figure class="avatar avatar-sm"><img id="avatarPic" src="' +
                    authorphotoURL +
                    '" alt="Avatar"></figure><p>' +
                    authorDisplayname +
                    '</p></div></div>';
            }
        });
        $('#footer-sent').show();
    } else if (!urls) {
        console.log('pas de contenu');
    }
}
// Paiements donnés par Creators
export async function getSendPaymentsbyAuthors() {
    var div = document.getElementById('transactions-sent');
    div.innerHTML = '';
    div.innerHTML +=
        '<div class="transaction"><div class="first-trcontainer"><p class="column-title" style="align-self:center;"><i class="fas fa-feather-alt"></i> Creator</p></div><div class="second-trcontainer"><p class="column-title"><i class="fab fa-slack-hash"></i>Contents</p></div></div>';
    var clientIds = [];
    let user = await JSON.parse(localStorage.getItem('user'));
    var userId = user.uid;
    var arrContent = Object.entries(user.transactions);
    arrContent.forEach((valeur, i) => {
        clientIds.push(valeur[1].authorKey);
    });
    var filteredclientIds = clientIds.filter((x, i, a) => a.indexOf(x) == i);
    console.log(filteredclientIds);
    filteredclientIds.forEach(async function(valeur, i) {
        let authorId = await firebase.database().ref('/transactions/' + valeur).once('value').then(function(data) {
            return data.val().authorId;
        });
        let users = await firebase.database().ref('/users/' + authorId).once('value').then(function(data) {
            return data.val();
        });
        var photoClient = users.photoURL;
        var nameClient = users.displayName;
        var counts = getOccurence(clientIds, valeur);
        div.innerHTML +=
            '<div class="transaction"><div class="first-trcontainer"><figure class="avatar avatar-sm"><img id="avatarPic" src="' +
            photoClient +
            '" alt="Avatar"></figure><p>' +
            nameClient +
            '</p></div><div class="second-trcontainer"><p class="tr-title">' +
            counts +
            '</p> </div></div>';
    });
}
// Paiements totaux par contenus
export async function getReceivedPaymentsbyContents() {
    var div = document.getElementById('transactions-received');
    div.innerHTML = '';
    div.innerHTML +=
        '<div class="transaction"><div class="first-trcontainer"><p class="column-title" style="align-self:center;"><i class="far fa-user-circle"></i>User</p></div><div class="second-trcontainer"><p class="column-title"><i class="fab fa-slack-hash"></i>CoMonz</p></div></div>';
    let user = await JSON.parse(localStorage.getItem('user'));
    var userId = user.uid;
    var authorKey = userId.authorDetails.key;
    let transactions = await firebase.database().ref('/transactions/' + authorKey).once('value').then(function(data) {
        return data.val();
    });
    var authorSocket = Object.entries(transactions);
    authorSocket.forEach((element, index) => {
        if (element[0] == 'authorId') {
            $('#no-rpayments').show();
            $('#transaction-amount').html(0);
            return;
        }
        $('#no-rpayments').hide();
        var urls = element[0];
        var title = element[1].title;
        firebase
            .database()
            .ref('/transactions/' + authorKey + '/' + urls + '/cTransactions')
            .once('value')
            .then(function(snap) {
                var shortTitle = title.substring(0, 35) + '...';
                var commoners = Object.keys(snap.val()).length;
                $('#transaction-amount').html(authorSocket.length + 1);
                console.log();
                div.innerHTML +=
                    '<div class="transaction"><div class="first-trcontainer"><p class="tr-title">' +
                    shortTitle +
                    '</p></div><div class="second-trcontainer"><p>' +
                    commoners +
                    '</p></div></div>';
            });
    });
}
// Paiements totaux par utilisateurs
export async function getReceivedPaymentsbyUsers() {
    var div = document.getElementById('transactions-received');
    div.innerHTML = '';
    div.innerHTML +=
        '<div class="transaction"><div class="first-trcontainer"><p class="column-title" style="align-self:center;"><i class="fab fa-autoprefixer"></i>User</p></div><div class="second-trcontainer"><p class="column-title"><i class="fab fa-slack-hash"></i>CoMonz</p></div></div>';
    var clientIds = [];
    let user = await JSON.parse(localStorage.getItem('user'));
    var userId = user.uid;
    var authorKey = userId.authorDetails.key;
    let transactions = await firebase.database().ref('/transactions/' + authorKey).once('value').then(function(data) {
        return data.val();
    });
    var arrContent = Object.entries(transactions);
    arrContent.forEach((value, index) => {
        if (value[0] == 'authorId') return;
        var title = value[1].title;
        var shortTitle = title.substring(0, 35) + '...';
        var transactions = Object.entries(value[1]);
        transactions.forEach((valeur, i) => {
            if (i != 0) return;
            var clientDate = valeur[1];
            var parsedClientDate = Object.entries(clientDate);
            if (parsedClientDate) {
                parsedClientDate.forEach((el, o) => {
                    var client = el[0];
                    clientIds.push(client);
                });
            }
        });
    });
    var filteredclientIds = clientIds.filter((x, i, a) => a.indexOf(x) == i);
    filteredclientIds.forEach(async function(valeur, i) {
        let clientUser = await firebase.database().ref('/users/' + valeur).once('value').then(function(data) {
            return data.val();
        });
        var photoClient = snopshot.val().photoURL;
        var nameClient = snopshot.val().displayName;
        var div = document.getElementById('transactions-received');
        var counts = getOccurence(clientIds, valeur);
        div.innerHTML +=
            '<div class="transaction"><div class="first-trcontainer"><figure class="avatar avatar-sm"><img id="avatarPic" src="' +
            photoClient +
            '" alt="Avatar"></figure><p>' +
            nameClient +
            '</p></div><div class="second-trcontainer"><p class="tr-title">' +
            counts +
            '</p> </div></div>';
    });
}
export function getOccurence(array, value) {
    var count = 0;
    array.forEach((v) => v === value && count++);
    return count;
}