function retrieveUser() {
    return new Promise(function(resolve, reject) {
        var user = JSON.parse(localStorage.getItem('user'));
        resolve(user);
    });
}


export { retrieveUser }