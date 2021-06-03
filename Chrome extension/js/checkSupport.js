function checkSupport() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var user = firebase.auth().currentUser.uid;
        var url = tabs[0].url.replace(/[^\w\s]/gi, '_');
        //console.log(url)
        firebase.database().ref('/wishes/' + url).once('value').then(function(snapshot) {
            if (snapshot.val() && snapshot.val()[user]) {
                $('#wishes').html(
                    "<i style='color:#d95555' class='fas fa-seedling'></i><p>You have already indicated your interest in this content and we have probably already contacted its Creator</p>"
                );
            }
        });
    });
}

export { checkSupport }