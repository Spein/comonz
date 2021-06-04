function setUser(user) {
    return new Promise(async function(resolve, reject) {
        let userData = await firebase.database().ref('/users/' + user).once('value').then(function(snapshot) { return snapshot.val() })
        if (!userData.uid) {
            userData.uid = firebase.auth().currentUser.uid
        }
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(localStorage)
        resolve(userData);
    });
}


export { setUser }