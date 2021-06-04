import { config } from './config.js';
import { setUser } from '/js/setUser.js';

firebase.initializeApp(config);

export async function displayView() {
    //console.log(currentUser)
    const authorKey = localStorage.getItem('authorkey') ? localStorage.getItem('authorkey') : null;
    const url = localStorage.getItem('url') ? localStorage.getItem('url') : null;
    //console.log(authorKey, url)
    if (!authorKey || !url) {
        console.log('profile loaded');
        $('#container').load('./html/onProfile.html');
    } else {
        $('#container').load('./html/onContent.html');
    }
}

function initApp() {
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
            setUser(user.uid).then(console.log(JSON.parse(localStorage.getItem('user'))), displayView())

        } else {
            console.log('signed out');
            $('#container').load('./html/sign-in.html');
            localStorage.clear();
        }
    });
}

initApp();