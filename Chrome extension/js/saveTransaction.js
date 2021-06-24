async function saveTransaction(authorKey, url, userId, featuredImage, title, firstShot) {
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

        var date = new Date();
        var parsedDate = JSON.stringify(date);
        firebase.database().ref('transactions/' + authorKey + '/' + url + '/cTransactions/' + userId).once("value").then(data => {

            if (!data.val()) {
                console.log("transaction saved")
                firebase.database().ref('transactions/' + authorKey + '/' + url + '/cTransactions/' + userId).update({
                    date: parsedDate
                });
            }
        });


    }
}
export { saveTransaction }