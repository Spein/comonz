import { config } from '/js/config.js';

firebase.initializeApp(config);
let token = window.location.pathname.split('/')[2]
console.log(token)
async function getIdfromToken(token) {
    let tokenRef = firebase.database().ref('tokens/' + token + '/');
    console.log(tokenRef)
    tokenRef.once('value').then(function(snapshot) {
        console.log(snapshot.val())
        return snapshot.val()
    })
}
let userId = await firebase.database().ref('tokens/' + token + '/userId').once('value').then(function(snapshot) {
    return snapshot.val()
});
let userDetails = await firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
    return snapshot.val()
});
console.log(userDetails)

$('#displayName').text(userDetails.displayName);
$('#head').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.head}.png` + ")")
$('#eye').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.eye}.png` + ")")
$('#mouth').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.mouth}.png` + ")")
$('#clothes').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.clothes}.png` + ")")
$('#face').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.face}.png` + ")")
$('#background').css("background-image", "url(" + `../images/${userDetails.photoURL.genre}/${userDetails.photoURL.background}.png` + ")")
$('#email').text(userDetails.email);
$('#description').text(userDetails.description);
$('#nft-hash').text(userDetails.token)