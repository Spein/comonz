function saveTransaction(authorKey, url, userId, featuredImage, title, firstShot) {
    let dbRef = firebase.database().ref('transactions/' + authorKey + '/' + url)
    if (firstShot) {

        dbRef.once('value').then(function(snapshot) {
            var contentUrl = snapshot.val();
            if (!contentUrl) {
                console.log("firstshot saved")

                dbRef.set({
                    title: title,
                    img: featuredImage
                });
            }
        });
    } else {
        console.log("transaction saved")

        var date = new Date();
        var parsedDate = JSON.stringify(date);
        var tranRef = firebase.database().ref('transactions/' + authorKey + '/' + url + '/cTransactions/' + userId);
        tranRef.update({
            date: parsedDate
        });
    }
}
export { saveTransaction }