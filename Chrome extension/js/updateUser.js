import { setUser } from '/js/setUser.js';

function updateUser() {
    const currentUser = firebase.auth().currentUser
    const db = firebase.database()
    const email = $("#email").text();
    const displayName = $("#displayName").text();
    const description = $("#description").text()
    db.ref('users/' + currentUser.uid).update({
        displayName: displayName,
        email: email,
        description: description

    }).then(
        $('#saveButton').hide(),
        $('#notifications-h').html("<p>Profile updated!</p>")


    ).then(setUser(currentUser.uid))

}
export { updateUser }