import * as blackhole from '/js/blackhole.js';
import * as setUser from '/js/setUser.js';
blackhole.blackhole('#blackhole', 1, 175, 200, 140)


function signUp(email, displayName, password) {
    var email = $("#email").val();
    var password = $("#password").val();
    var displayName = $("#displayName").val();
    var description = $("#description").val();
    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(function(data) {
            setUser.createBlob()
                .then((blob) => {
                    -setUser.storeImage(data.user, blob).then((url) => {
                        const RegisteredUser = {
                            uid: data.user.uid,
                            email: email,
                            description: description,
                            displayName: displayName,
                            photoURL: url,
                            wallet: null,
                            transactions: null,
                            authorDetails: null

                        }
                        firebase.database().ref('users/' + data.user.uid).set(RegisteredUser)
                        localStorage.setItem('user', JSON.stringify(RegisteredUser))
                    });
                })



        })
        .catch((error) => {
            $("#warning").text(error.message);
        });

}


function signIn() {
    var email = $("#emails").val();
    var password = $("#passwords").val();
    firebase.auth().signInWithEmailAndPassword(email, password)

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        $("#warning").text(error.message);
        // ...
    });
}



document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var img = document.querySelector('img'); // $('img')[0]
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        img.style.padding = '1%';
        img.style.opacity = "1"
    }
});


function newMember() {

    $("#emailsignIn").hide();
    $('#emailsignUp').show()

}

function existingMember() {
    $('#emailsignUp').hide()
    $("#emailsignIn").show();

}

document.getElementById("signUp").addEventListener('click', signUp, false);
document.getElementById("signIn").addEventListener('click', signIn, false);
document.getElementById("new-member").addEventListener('click', newMember, false);
document.getElementById("existing-member").addEventListener('click', existingMember, false);