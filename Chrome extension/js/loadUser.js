import * as blackhole from '/js/blackhole.js';
import { executeLogic } from '/js/executeLogic.js';
import { styledTabs } from '/js/styledTabs.js';
import { checkSupport } from '/js/checkSupport.js';


function loadUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    //console.log(localStorage, JSON.parse(localStorage.getItem('user')));
    $('#displayName').text(user.displayName);
    $('#head').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.head}.png` + ")")
    $('#eye').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.eye}.png` + ")")
    $('#mouth').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.mouth}.png` + ")")
    $('#clothes').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.clothes}.png` + ")")
    $('#face').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.face}.png` + ")")
    $('#background').css("background-image", "url(" + `../img/${user.photoURL.genre}/${user.photoURL.background}.png` + ")")
    $('#email').text(user.email);
    $('#description').text(user.description);
    $('#nft-hash').html("<a href='http://localhost:3000/commoner/" + user.token + "' target='_blank'>" + user.token + "</a>")
    executeLogic()
    styledTabs(user);
    checkSupport()
    blackhole.blackhole('#blackhole', 1, 260, 220, 150);

}

export { loadUser }