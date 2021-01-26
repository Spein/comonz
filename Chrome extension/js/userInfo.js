import * as setUser from '/js/setUser.js';

export function writeUserData() {
    var currentUser = firebase.auth().currentUser
    var db = firebase.database()
    var email = $("#email").text();
    var displayName = $("#displayName").text();
    var description = $("#description").text()
    if (email != currentUser.email) {
        currentUser.updateEmail(email).then(function() {}).catch(function(error) {
            // An error happened.
        });
    }
    var preSrc = document.querySelector('#file').files[0];
    if (preSrc) {
        setUser.createBlob()
            .then(blob => setUser.storeImage(currentUser, blob))
            .then(function(url) {
                console.log(url)
                db.ref('users/' + currentUser.uid).update({
                    displayName: displayName,
                    photoURL: url,
                    email: email,
                    description: description

                }).then(
                    $('#saveButton').hide(),
                    $('#notifications-h').html("<p>Profile updated!</p>")


                ).then(setUser.setUser(currentUser.uid))


            })
            .catch(function(error) {
                console.log(" An error happened" + error)
                $('#saveButton').hide()
                $('#notifications-h').html("<p>Something went wrong!</p>")

            });
    } else {
        db.ref('users/' + currentUser.uid).update({
            displayName: displayName,
            email: email,
            description: description

        }).then(
            $('#saveButton').hide(),
            $('#notifications-h').html("<p>Profile updated!</p>")


        ).then(setUser.setUser(currentUser.uid))
    }

}