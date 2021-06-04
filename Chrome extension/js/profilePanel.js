import { loadUser } from '/js/loadUser.js';
import { setUser } from '/js/setUser.js';


//Editable fields
var editables = document.getElementsByClassName('editable');
for (var i = 0; i < editables.length; i++) {
    (function(index) {
        editables[index].addEventListener('input', function() {
            document.getElementById('saveButton').style.display = 'block';
        });
    })(i);
}
var bugText = document.getElementsByClassName('bug-text');
for (var i = 0; i < bugText.length; i++) {
    (function(index) {
        bugText[index].addEventListener('input', function() {
            document.getElementById('bug-button').style.display = 'block';
        });
    })(i);
}


//TutoPanels
loadPanel()

function loadPanel() {
    let storagedUser = JSON.parse(localStorage.getItem('user'))

    console.log("panel loaded")
    if (storagedUser) {
        console.log(storagedUser)
        loadUser();
    } else {
        console.log(storagedUser)

        window.addEventListener('storage', () => {
            console.log("storage loaded", JSON.parse(localStorage.getItem('user')))
            loadUser();
        });
    }

}


//document.addEventListener('load', loadUser());