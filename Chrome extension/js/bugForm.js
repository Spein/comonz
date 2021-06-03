function openBug() {
    $('#bug-form-container').show('inherit');
}

function closeBug() {
    $('#bug-form-container').show('inherit');
}

function sendBug() {
    var user = firebase.auth().currentUser.uid;
    var date = new Date();
    var parsedDate = JSON.stringify(date);
    firebase.database().ref('bugs/' + user).push({
        date: parsedDate,
        message: $('#bug-form').val()
            //content: $("#container").html()
    });
    $('#bug-notsended').hide();
    $('#bug-sended').show();
}



export { openBug, closeBug, sendBug }