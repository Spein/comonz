import { config } from './config.js';
import * as setUser from '/js/setUser.js';

firebase.initializeApp(config);

export async function displayView() {
    //console.log(currentUser)
    const authorKey = localStorage.getItem('authorkey') ? localStorage.getItem('authorkey') : null;
    const url = localStorage.getItem('url') ? localStorage.getItem('url') : null;
    //console.log(authorKey, url)
    if (!authorKey || !url) {
        console.log('profile loaded');
        $('#container').load('onProfile.html');
    } else {
        $('#container').load('onContent.html');
    }
}

function initApp() {
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
            //console.log(user)
            if (!localStorage.getItem('user')) {
                console.log('firebase loading with');
                setUser.setUser(user.uid).then(console.log('storage loaded'), displayView());
            } else {
                displayView();
            }
        } else {
            console.log('signed out');

            $('#container').load('sign-in.html');
            localStorage.clear();
        }
    });
}

initApp();