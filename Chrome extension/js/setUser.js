export function setUser(user) {
    return new Promise(async function(resolve, reject) {
        let userData
        userData = await firebase.database().ref('/users/' + user).once('value').then(function(snapshot) { return snapshot.val() })
        resolve(localStorage.setItem('user', JSON.stringify(userData)));
    });
}

export function retrieveUser() {
    return new Promise(function(resolve, reject) {
        var user = JSON.parse(localStorage.getItem('user'));
        resolve(user);
    });
}

export function createBlob() {
    return new Promise(function(resolve, reject) {
        var preSrc = document.querySelector('#file').files[0];
        var preImg = document.querySelector("#avatarPic")
        if (preSrc) {
            var src = preSrc;
            var blob = new Blob([src], { type: 'image/png' });
            resolve(blob);
        } else if (!preSrc && preImg.src == "./logo/logo-off-base.png") {
            var random = Math.floor(Math.random() * 3) + 1;
            fetch('../logo/planet-' + random + '.png').then((response) => response.blob()).then(function(blob) {
                resolve(blob);

            });
        }
    });
}
export function storeImage(user, blob) {
    return new Promise(function(resolve, reject) {
        var ref = firebase.storage().ref().child('images/' + user.uid + '/profilePic.png');
        // use the Blob or File API
        ref.put(blob).then((snapshot) => snapshot.ref.getDownloadURL()).then((url) => resolve(url));
    });
}