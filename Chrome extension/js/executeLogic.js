const tab = document.querySelectorAll('.tab-item-link');

function onTabClick(event) {
    const panel = document.querySelectorAll('.panel-body');
    // deactivate existing active tabs and panel
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active');
    }
    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove('active');
    }
    // activate new tabs and panel
    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add('active');
}

function executeLogic() {
    //Profile panels
    for (let i = 0; i < document.querySelectorAll('.tab-item-link').length; i++) {
        document.querySelectorAll('.tab-item-link')[i].addEventListener('click', onTabClick, false);
    }
}
export { executeLogic }