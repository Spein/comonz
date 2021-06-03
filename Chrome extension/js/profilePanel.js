import { loadUser } from '/js/loadUser.js';


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



//document.addEventListener('load', loadUser());

window.addEventListener('storage', () => {
    loadUser();
});