function updateCount(progress, userId, url, authorKey) {
    return new Promise(function(resolve, reject) {
        //console.log(progress, status, userId, url)
        let countRef = firebase.database().ref('/users/' + userId + '/transactions/' + authorKey + '/' + url);
        let status
        if (progress > -1) {
            status = "Ongoing"
        } else {
            status = "paid"
        }
        countRef
            .update({
                count: progress,
                status: status,
            })
            .then(
                resolve()
                //console.log("updated", progress, url)
            );
    });
}

export { updateCount }