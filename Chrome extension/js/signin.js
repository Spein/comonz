import * as blackhole from '/js/blackhole.js';
import * as setUser from '/js/setUser.js';
blackhole.blackhole('#blackhole', 1, 175, 200, 140)


$('#male').on('click', () => {
    setGenre('male')
})
$('#female').on('click', () => {
    setGenre('female')
})
$('#previous').on('click', () => {
    setAttributes('prev')
})
$('#next').on('click', () => {
    setAttributes('next')
})
let genreAbs = "female"


function setGenre(genre) {
    genreAbs = genre
    $('.signIn-buttons').removeClass('selected')
    $(`#${genre}`).addClass('selected')
    $(this).addClass('selected')
    randomAvatar(genre)
}
let baseIndex = {
    background: 5,
    head: 33,
    eye: 32,
    mouth: 17,
    clothes: 59,
    face: 4
}
let index = {
    background: 1,
    head: 1,
    eye: 1,
    mouth: 1,
    clothes: 1,
    face: 1
}
let attribute = "face"

function setAttributes(sens) {
    attribute = $('#attribute').val()
    console.log(index[attribute])
    if (sens == "prev") {
        if (index[attribute] <= baseIndex[attribute]) {
            index[attribute] = baseIndex[attribute]
        } else {
            index[attribute]--
        }
    } else {
        if (index[attribute] >= baseIndex[attribute]) {
            index[attribute] = 1
        } else {
            index[attribute]++
        }
    }
    console.log()
    $(`#${attribute}`).css("background-image", "url(" + `../img/${genreAbs}/${attribute}${index[attribute]}.png` + ")")

}

function randomAvatar(genre) {
    let randomNumber = Math.floor(Math.random() * 4) + 1
    console.log(randomNumber)

    $('#head').css("background-image", "url(" + `../img/${genre}/head${randomNumber}.png` + ")")
    $('#eye').css("background-image", "url(" + `../img/${genre}/eye${randomNumber}.png` + ")")
    $('#mouth').css("background-image", "url(" + `../img/${genre}/mouth${randomNumber}.png` + ")")
    $('#clothes').css("background-image", "url(" + `../img/${genre}/clothes${randomNumber}.png` + ")")
    $('#face').css("background-image", "url(" + `../img/${genre}/face${randomNumber}.png` + ")")
    $('#background').css("background-image", "url(" + `../img/${genre}/background${randomNumber}.png` + ")")



}

function signUp(email, displayName, password) {
    var email = $("#email").val();
    var password = $("#password").val();
    var displayName = $("#displayName").val();
    var description = $("#description").val();
    var avatar = {
            genre: genreAbs,
            face: $('#face').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],
            head: $('#head').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],
            eye: $('#eye').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],
            mouth: $('#mouth').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],
            clothes: $('#clothes').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],
            background: $('#background').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1').split('/')[5].split('.')[0],


        }
        //console.log(avatar)
    firebase.auth().createUserWithEmailAndPassword(email, password)

    .then(function(data) {
            const RegisteredUser = {
                uid: data.user.uid,
                email: email,
                tuto: true,
                description: description,
                displayName: displayName,
                photoURL: avatar,
                wallet: null,
                transactions: null,
                authorDetails: null

            }
            firebase.database().ref('users/' + data.user.uid).set(RegisteredUser)
            localStorage.setItem('user', JSON.stringify(RegisteredUser))
        })
        .catch((error) => {
            $("#warning").text(error.message);
        });

}



/* function signUp(email, displayName, password) {
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

} */


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



/* document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var img = document.querySelector('img'); // $('img')[0]
        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        img.style.padding = '1%';
        img.style.opacity = "1"
    }
});
 */

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