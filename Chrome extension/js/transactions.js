import * as blackhole from '/js/blackhole.js';


export function firstCheck() {
    $("#blackhole").html("")
    $("#profile-header").hide()
    $("#wallet-header").hide()
    $("#transaction-header").show()
    let user = JSON.parse(localStorage.getItem('user'))

    let walletStatus = user.wallet ? user.wallet.status : null
    if (walletStatus) {
        $("#need-wallet").hide()
        checkAuthor()

    } else {
        $("#need-wallet").show()
        $("#commoners").hide()
        $("#wallet-amount").html(0)


    }


}

export async function checkAuthor() {
    let div = document.getElementById("transactions-received")
    div.innerHTML = ""
    let user = JSON.parse(localStorage.getItem('user'))
    let authorDetails = user.authorDetails;
    console.log(user)

    if (authorDetails) {
        let bankAcc = authorDetails.bankAccount
        let commoners = 0;
        let authorKey = authorDetails.key

        let authoPool = await firebase.database().ref('/transactions/' + authorKey).once('value').then(function(snap) { return snap.val() })

        if (authoPool) {

            let authorSocket = Object.entries(authoPool)
            div.innerHTML += '<div class="transaction"><div class="first-trcontainer"><p class="column-title" style="align-self:center;"><i class="fab fa-autoprefixer"></i>Titre</p></div><div class="second-trcontainer"><p class="column-title"><i class="far fa-user-circle"></i>Profile</p></div></div>'

            authorSocket.forEach((element, index) => {
                if (element[0] == "authorId") {
                    $("#no-rpayments").show()
                    $("#transaction-amount").html(0)
                    $("#footer-received").hide()
                    return;
                }

                $("#no-rpayments").hide()
                let urls = element[0]
                let title = element[1].title
                let thisContent = authoPool[urls].cTransactions
                let userSocket = Object.keys(thisContent)
                let userDate = Object.values(thisContent)

                commoners = commoners + userSocket.length;
                blackhole.blackhole('#blackhole', commoners + 1, 220, 220, 125)
                $("#transaction-amount").html(commoners)
                userSocket.forEach((element, index) => {
                    let rawdate = snap.val()
                    let date = moment(rawdate[element].date.substring(1, 11)).fromNow();

                    firebase.database().ref('/users/' + element).once('value').then(function(snopshot) {
                        let photoClient = snopshot.val().photoURL
                        let nameClient = snopshot.val().displayName
                        let shortTitle = title.substring(0, 35) + "..."
                        div.innerHTML += '<div class="transaction"><div class="first-trcontainer"><p class="tr-title">' + shortTitle + '</p><p class="tr-date">' + date + '</p></div><div class="second-trcontainer"> <figure class="avatar avatar-sm"><img id="avatarPic" src="' + photoClient + '" alt="Avatar"></figure><p>' + nameClient + '</p></div></div>'

                    })

                })




            })
            $("#footer-received").show()

        }




        $("#no-author").hide()
        $("#author-on").show()
        $("#commons-key").text("<comonz id='" + authorDetails.key + "'></comomz>")
        $("#bank-account").text(bankAcc)

    } else if (authorDetails == undefined) {
        $("#no-author").show()
        blackhole.blackhole('#blackhole', 1, 220, 220, 125)
        $("#transaction-amount").html(0)
    }
    // ...




}
$("#cgu").change(function() {
    if (this.checked) {
        $("#no-cgu").hide()
        $("#cgu-accepted").show()
        $("#cgu").attr("disabled", true);


    }
});
export function createAuthor() {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    let authorKey = Math.random().toString(36).slice(-10);
    let userId = user.uid
    let iban = $("#iban-input").val();
    let initAuth = {
        siteURL: false,
        key: authorKey,
        bankAccount: iban
    }
    user.authorDetails = initAuth
    localStorage.setItem('user', JSON.stringify(user))
    firebase.database().ref('users/' + userId + '/authorDetails').set(initAuth).then(firebase.database().ref('transactions/' + authorKey).set({
        authorId: userId,
    })).then(checkAuthor())



}

export function alertValidIBAN(iban) {
    var iban = document.getElementById("iban-input")

    if (isValidIBANNumber(iban.value)) {

        $("#check-author").hide()
        createAuthor()


    } else {
        $("#warning-iban").html("<p class='label label-error mr-1'>Wrong IBAN number </p>")

    };

}
export function alertValidIBAN2(iban) {
    var iban = document.getElementById("iban-input2")
    let changediban = iban.value
    if (isValidIBANNumber(changediban)) {
        let userId = firebase.auth().currentUser.uid

        $("#verify-change").hide()
        firebase.database().ref('users/' + userId + '/authorDetails').update({
            bankAccount: changediban

        })

        checkAuthor()


    } else {
        $("#warning-iban2").html("<p class='label label-error mr-1'>Wrong IBAN number </p>")

    };

}
document.getElementById("check-iban2").addEventListener('click', alertValidIBAN2, false);
document.getElementById("change-bacc").addEventListener('click', function() { $("#verify-change").show() }, false);

export function isValidIBANNumber(input) {
    let CODE_LENGTHS = {
        AD: 24,
        AE: 23,
        AT: 20,
        AZ: 28,
        BA: 20,
        BE: 16,
        BG: 22,
        BH: 22,
        BR: 29,
        CH: 21,
        CR: 21,
        CY: 28,
        CZ: 24,
        DE: 22,
        DK: 18,
        DO: 28,
        EE: 20,
        ES: 24,
        FI: 18,
        FO: 18,
        FR: 27,
        GB: 22,
        GI: 23,
        GL: 18,
        GR: 27,
        GT: 28,
        HR: 21,
        HU: 28,
        IE: 22,
        IL: 23,
        IS: 26,
        IT: 27,
        JO: 30,
        KW: 30,
        KZ: 20,
        LB: 28,
        LI: 21,
        LT: 20,
        LU: 20,
        LV: 21,
        MC: 27,
        MD: 24,
        ME: 22,
        MK: 19,
        MR: 27,
        MT: 31,
        MU: 30,
        NL: 18,
        NO: 15,
        PK: 24,
        PL: 28,
        PS: 29,
        PT: 25,
        QA: 29,
        RO: 24,
        RS: 22,
        SA: 24,
        SE: 24,
        SI: 19,
        SK: 24,
        SM: 27,
        TN: 24,
        TR: 26
    };
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
        code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
        digits;
    // check syntax and length
    if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
        return false;
    }
    // rearrange country code and check digits, and convert chars to ints
    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function(letter) {
        return letter.charCodeAt(0) - 55;
    });
    // final check
    return mod97(digits);
}

function mod97(string) {
    let checksum = string.slice(0, 2),
        fragment;
    for (let offset = 2; offset < string.length; offset += 7) {
        fragment = String(checksum) + string.substring(offset, offset + 7);
        checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;
}