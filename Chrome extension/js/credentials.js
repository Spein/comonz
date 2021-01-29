import * as setUser from '/js/setUser.js';

var config = {
    apiKey: 'AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw',
    authDomain: 'pressformore-c0045.firebaseapp.com',
    databaseURL: 'https://pressformore-c0045.firebaseio.com',
    projectId: 'pressformore-c0045',
    storageBucket: 'pressformore-c0045.appspot.com',
    messagingSenderId: '1059781682708'
};

firebase.initializeApp(config);

export async function displayView(user) {

    //console.log(currentUser)
    const authorKey = localStorage.getItem('authorkey')
    if (authorKey == "null" || !authorKey) {
        console.log('profile loaded')
        $("#container").load("profile.html")


    } else {
        localStorage.setItem("extensionOpened", true)
        console.log('content loaded', localStorage.getItem('extensionOpened'));
        $('#container').load('onContent.html');
    }




}

function initApp() {
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
            let currentUser = await firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) { return snapshot.val() })
                //console.log(user)
            delayLoad(currentUser, user.uid).then(displayView(user))
        } else {
            $('#container').load('sign-in.html');
            localStorage.clear();
        }



    });
}

function delayLoad(currentUser, userId) {
    return new Promise(function(resolve, reject) {
        currentUser.uid = userId
        console.log(currentUser)
        localStorage.setItem('user', JSON.stringify(currentUser))

        resolve('resolved')
    })
}

window.onload = function() {
    initApp();
};
/* document.getElementById("test").addEventListener("click", youtube, false)
    document.getElementById("test2").addEventListener("click", authenticatedXhr, false) */