var config = {
    apiKey: 'AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw',
    authDomain: 'pressformore-c0045.firebaseapp.com',
    databaseURL: 'https://pressformore-c0045.firebaseio.com',
    projectId: 'pressformore-c0045',
    storageBucket: 'pressformore-c0045.appspot.com',
    messagingSenderId: '1059781682708'
};

firebase.initializeApp(config);
import * as setUser from '/js/setUser.js';

export async function displayView() {

    //console.log(currentUser)
    const authorKey = localStorage.getItem('authorkey') ? localStorage.getItem('authorkey') : null
    const url = localStorage.getItem('url') ? localStorage.getItem('url') : null
        //console.log(authorKey, url)
    if (!authorKey || !url) {
        console.log('profile loaded')
        $("#container").load("onProfile.html")

    } else {

        $("#container").load("onContent.html")
    }

}



function initApp() {
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {

            //console.log(user)
            if (!localStorage.getItem('user')) {
                console.log("firebase loading with")
                setUser.setUser(user.uid)
                    .then(
                        console.log("storage loaded"),
                        displayView())
                    /*      firebase.database().ref('/users/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
                             let currentUser = snapshot.val()
                             localStorage.setItem('user', JSON.stringify(currentUser))
                             window.addEventListener('storage', () => {
                            
                             });
                         }) */

            } else {
                displayView()
            }

        } else {
            console.log("signed out")

            $('#container').load('sign-in.html');
            localStorage.clear();
        }



    });
}

/* function delayLoad(currentUser) {
    console.log(currentUser)
    if (localStorage.getItem('user')) {
        displayView()

    } else {
        firebase.database().ref('/users/' + currentUser).once('value').then(function(snapshot) {

            if (snapshot.val()) {

                localStorage.setItem('user', JSON.stringify(snapshot.val()))
                displayView()

            } else {
                setTimeout(() => {
                    firebase.database().ref('/users/' + currentUser).once('value').then(function(snapshot) {

                        localStorage.setItem('user', JSON.stringify(snapshot.val()))
                        displayView()
                    })
                }, 1000)
            }
        })
    }

} */
initApp();