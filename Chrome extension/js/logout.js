function logout() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
        localStorage.clear();
    }
}
export { logout }