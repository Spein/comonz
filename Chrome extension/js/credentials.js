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
    if (user) {
        let currentUser = await setUser.retrieveUser()
        console.log(currentUser, localStorage)
        const authorKey = localStorage.getItem('authorkey')
        if (authorKey == "false" || !authorKey) {

            $("#container").load("profile.html", function(data) {
                var scripts = $(data).find("script");
                if (scripts.length) {
                    $(scripts).each(function() {
                        if ($(this).attr("src")) {
                            $.getScript($(this).attr("src"));
                        } else {
                            eval($(this).html());
                        }
                    });
                }
            });


        } else {
            console.log('content loaded');
            $('#container').load('onContent.html');
        }



    } else {
        $('#container').load('sign-in.html');
        localStorage.clear();
    }

}

function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
        let currentuser = user ? user.uid : null
        if (currentuser !== null) {
            setUser.setUser(currentuser).then(displayView(currentuser))

        } else {
            displayView(currentuser)

        }


    });
}

window.onload = function() {
    initApp();
};
/* document.getElementById("test").addEventListener("click", youtube, false)
    document.getElementById("test2").addEventListener("click", authenticatedXhr, false) */