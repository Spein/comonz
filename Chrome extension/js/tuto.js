function tuto(tab) {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user.tuto) {
        $("#tutorial-container").show()
        $("#tutorial-text").html('')

        if (tab === "creator") {
            $("#tutorial-text").html(`
            <h6 style="margin-top:618px">You're now on the Creator tab</h6>
            <p>Once your wallet filled, you can now set your Creator account and to let us link your content to your profile</p>
            <p>To set it correctly:
                <ul>
                  <li>First , read carefully and acknowledge our General conditions. </li>
                  <li>Enter a valid IBAN number to let us know on witch bank account we will send your rewards each month.</li>
                  <li>Then we offer mutliple ways for you to tag your different creations. You can either: </li>
                        <ul style="margin-left:20%">
                        <li style="text-align:justify">Copy-paste your custom <commons> tag in your source code. You must paste it on every page you want to see rewarded. This method is especialy useful for personnal blogs</li>
                        <li style="text-align:justify">You can log into supported platforms if you already have an account and some contents there. We will automatically retrieve the address of all your works and link them to your profile</li>
                        </ul>
                </ul>
            <p>Note that we NEVER store the actual URL of your content, nor we stock any URL visited by the user. We use a hashed version of it to recognize it inside our system</p>

            `)
            $("#container").css("height", '650px')

        } else if (tab === "wallet") {
            $("#tutorial-text").html(`
            <h6>You're now on the Wallet tab</h6>
            <p>If you have not fill your wallet yet, you can do it here.</p>
            <p>To set it correctly:
                <ul>
                  <li>First choose an <strong>amount of CoMonZ</strong> (10CmZ=1€), you want to give this month to your favorite Creators.
                  <br>Note that you can't give less than a minimum amount of 10 CmZ (1€)</li>
                  <li>Then determine your Engagement Treshold. To do so, we let you choose the <strong>amount of time in seconds</strong> that you need
                  to be agree to support a Creator's production. It can be as low as 1 second, because you think hard works deserve a fair reward inconditionaly, or
                  as high as a few minutes, because you prefer assess every content to be sure it deserves your support. </li></ul>

            `)
            $("#container").css("height", 'auto')

        } else {
            $("#tutorial-text").html(`

            <h5 style="margin-top: 20%;">Welcome to you, ${user.displayName}</h5>
            <h6 >Thanks for joining us,</h6>
            <p style="font-style:italic;font-size:3.7vw">We propose a quick tour here, but you can always pass it by clicking on the button below</p>
            <p>This extension is composed by 3 tabs: The <i class="far fa-user-circle"></i><strong>Profile</strong> tab, the <i class="fas fa-wallet"></i><strong>Wallet</strong> tab and the <i class="fas fa-feather-alt"></i><strong>Creator</strong> tab</p>
            <p>Here on the <strong> <i class="far fa-user-circle"></i>Profile</strong> tab, you can <strong>check and update </strong> general informations about yourself. You can also log you out (<i class="fas fa-sign-out-alt"></i>) of here</p>
            <p style="margin-bottom: 24%;">To proceed, <strong>click on the  <i class="fas fa-wallet"></i> Wallet tab</strong> </p>

            `)
            $("#container").css("height", 'auto')

        }

    }

}

function tutoDone() {
    let user = JSON.parse(localStorage.getItem('user'))
    firebase.database().ref('users/' + user.uid)
        .update({ tuto: false }).then(
            user.tuto = false,
            localStorage.setItem('user', JSON.stringify(user)),
            $("#tutorial-container").hide()
        )
}
document.getElementById('tuto-button').addEventListener('click', tutoDone, false);

export { tuto, tutoDone }