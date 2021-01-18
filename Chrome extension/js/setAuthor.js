export function getComonzKey() {
    return new Promise(function(resolve, reject) {
        let key = localStorage.getItem('authorkey')
        resolve(key)

    })

}


export function getUrl() {

    return new Promise(function(resolve, reject) {
        let url = localStorage.getItem('url')
        resolve(url)
    })
}


export function getAuthorDetails(commonzkey, url) {
    return new Promise(function(resolve, reject) {
        let author = {}
        firebase
            .database()
            .ref('/transactions/' + commonzkey)
            .once('value')
            .then(data => {
                author.transactions = data.val()
                author.comments = author.transactions[url].comments ? author.transactions[url].comments : null
                Object.keys(author.comments).forEach((userId, index) => {
                    firebase
                        .database()
                        .ref('users/' + userId)
                        .once('value')
                        .then(function(userData) {
                            let user = userData.val()
                            author.comments[userId].photoURL = user.photoURL
                            author.comments[userId].displayName = user.displayName

                        })
                })
                firebase
                    .database()
                    .ref('/users/' + data.val().authorId)
                    .once('value')
                    .then(data => {
                        author.details = data.val()
                        resolve(author)
                    })
            })
    })
}