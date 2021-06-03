function getUrl() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var user = firebase.auth().currentUser.uid;
        var url = tabs[0].url.replace(/[^\w\s]/gi, '_');
        var date = new Date();
        var parsedDate = JSON.stringify(date);
        firebase
            .database()
            .ref('wishes/' + url)
            .update({
                [user]: parsedDate
            })
            .then((updates) => {
                $('#wishes').html(
                    "<i style='color:#d95555' class='fas fa-seedling'></i><p>Thank you! What a pleasure to expand the family, we will contact our next Creator</p>"
                );
            });
    });
}

export { getUrl }