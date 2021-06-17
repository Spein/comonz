export async function getComonzKey() {
    let key = localStorage.getItem('lastKey') ? localStorage.getItem('lastKey') : localStorage.getItem('authorkey');
    localStorage.removeItem('lastKey');
    localStorage.removeItem('authorkey');

    return key
}
export async function getUrl() {
    let url = localStorage.getItem('lastUrl') ? localStorage.getItem('lastUrl') : localStorage.getItem('url');
    localStorage.removeItem('lastUrl');
    localStorage.removeItem('url');

    return url
}
export function getAuthorDetails(commonzkey, url) {
    return new Promise(function(resolve, reject) {
        let author = {};
        firebase.database().ref('/transactions/' + commonzkey).once('value').then((data) => {
            author.transactions = data.val();
            console.log(commonzkey, author, url)
            console.log(author.transactions[url]);
            author.content = {};
            author.content.title = author.transactions[url].title;
            author.content.img = author.transactions[url].img;
            author.comments = author.transactions[url].comments ? author.transactions[url].comments : null;
            if (author.comments) {
                Object.keys(author.comments).forEach((userId, index) => {
                    firebase.database().ref('users/' + userId).once('value').then(function(userData) {
                        let user = userData.val();
                        author.comments[userId].photoURL = user.photoURL;
                        author.comments[userId].displayName = user.displayName;
                    });
                });
            }
            console.log(data.val())
            firebase.database().ref('/users/' + data.val().authorId).once('value').then((data) => {
                author.details = data.val();
                resolve(author);
            });
        });
    });
}