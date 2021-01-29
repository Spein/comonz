var firebaseConfig = {
    apiKey: "AIzaSyAdxBw7BVvGgtp0PliC5y_xXPfv35nDEuw",
    authDomain: "pressformore-c0045.firebaseapp.com",
    databaseURL: "https://pressformore-c0045.firebaseio.com",
    projectId: "pressformore-c0045",
    storageBucket: "pressformore-c0045.appspot.com",
    messagingSenderId: "1059781682708",
    appId: "1:1059781682708:web:d4a7d1f1aec65742c16901"
};




async function fetchData(endPoint, name) {
    const res = await fetch(endPoint);
    let data = await res.json();
    let stData = JSON.stringify(data)
    localStorage.setItem(name, stData)
}

fetchData(
        './user.json', 'usersTest')
    .then(fetchData('./transactions.json', 'transactionsTest'))
    .then(
        fetchData('./author.json', 'authorsTest'),

    )

function cracra() {
    return new Promise((resolve, reject) => {
        let transactions = JSON.parse(localStorage.getItem('transactionsTest'))
        let users = JSON.parse(localStorage.getItem('usersTest'))
        let authors = JSON.parse(localStorage.getItem('authorsTest'))

        let usersDetails = {}
        let totalUsers = {}
        let finalObject = {}
        let authorDetails = {}

        Object.entries(transactions).forEach(data => {
            const [key, keyDetails] = data;

            finalObject[key] = {}
                //console.log(finalObject)
            Object.entries(keyDetails).forEach(data2 => {
                const [key2, transactionData] = data2;
                //console.log(key2)
                if (key2 == "authorId") {
                    console.log(key, authors[transactionData])
                    authorDetails[key] = {}
                    authorDetails[key].uid = transactionData
                    authorDetails[key].displayName = authors[transactionData].displayName
                    authorDetails[key].photoURL = authors[transactionData].photoURL
                    authorDetails[key].email = authors[transactionData].email
                    authorDetails[key].bankAccount = authors[transactionData].authorDetails.bankAccount



                    console.log(authorDetails)

                } else {
                    Object.entries(transactionData).forEach(data3 => {
                        const [key3, contentData] = data3;
                        if (key3 === "cTransactions") {
                            //console.log(key2, Object.keys(contentData))
                            let paidUsers = Object.keys(contentData)
                            paidUsers.forEach(user => {
                                let walletEndDate = users[user].wallet.endDate
                                let walletStatus = users[user].wallet.status
                                if (walletStatus === "active" && new Date(walletEndDate.substring(1, 20)).getTime() < new Date().getTime()) {
                                    if (!totalUsers[user]) {
                                        totalUsers[user] = 1
                                    } else {
                                        totalUsers[user]++
                                    }
                                    if (!finalObject[key][user]) {
                                        finalObject[key][user] = 1
                                    } else {
                                        finalObject[key][user]++
                                    }
                                    usersDetails[user] = user
                                    usersDetails[user] = {}
                                    usersDetails[user].walletAmount = users[user].wallet.amount
                                    usersDetails[user].displayName = users[user].displayName
                                    usersDetails[user].email = users[user].email
                                    usersDetails[user].photoURL = users[user].photoURL



                                }
                            })
                        }
                    })
                }

            })
        })
        let toResolve = {}
        toResolve.userPcontent = finalObject
        toResolve.totalUsers = totalUsers
        toResolve.usersDetails = usersDetails
        toResolve.authorDetails = authorDetails

        resolve(toResolve)

    });


}


function preCalculate() {
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    cracra().then((allIneed) => {
        console.log(allIneed)
        Object.entries(allIneed.userPcontent).forEach(data => {
            const [key1, contentData1] = data;
            let authKey = key1
                //console.log(authKey)
            Object.entries(contentData1).forEach(data2 => {
                const [key2, contentData2] = data2;
                let numperAuth = contentData2
                allIneed.userPcontent[authKey][key2] = {}
                allIneed.userPcontent[authKey][key2].walletAmount = allIneed.usersDetails[key2].walletAmount
                allIneed.userPcontent[authKey][key2].displayName = allIneed.usersDetails[key2].displayName
                allIneed.userPcontent[authKey][key2].photoURL = allIneed.usersDetails[key2].photoURL
                allIneed.userPcontent[authKey][key2].email = allIneed.usersDetails[key2].email
                allIneed.userPcontent[authKey][key2].numperAuth = numperAuth
                allIneed.userPcontent[authKey][key2].totalNum = allIneed.totalUsers[key2]
                allIneed.userPcontent[authKey][key2].dueAmount = (allIneed.userPcontent[authKey][key2].walletAmount * allIneed.userPcontent[authKey][key2].numperAuth) / allIneed.userPcontent[authKey][key2].totalNum
                if (!allIneed.userPcontent[authKey].total) {
                    allIneed.userPcontent[authKey].total = allIneed.userPcontent[authKey][key2].dueAmount
                } else {
                    allIneed.userPcontent[authKey].total += allIneed.userPcontent[authKey][key2].dueAmount
                }
                //Rendre le wallet inactif + enregistrer Amount et numperAuth dans users/userId/wallet/history/year/date/authkey/
            })
        })
        return allIneed

    }).then((data) => { console.log(data) })
}


preCalculate()













// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var div = document.getElementById("table-container")
var div2 = document.getElementById("table-container2")
var div3 = document.getElementById("table-container3")

var usersRef = firebase.database().ref('users/')
var transRef = firebase.database().ref('transactions/')
var checkRef = firebase.database().ref('checkouts/')

usersRef.once("value").then(function(snoip) {
    const users = snoip.val()
    const keys = Object.keys(users)
    for (const key of keys) {

        let id = key;
        let name = users[key].displayName || null;
        let avatar = users[key].photoURL || null;
        let description = users[key].description || null;
        let email = users[key].email || null;
        var walletAmout = null
        var walletStartDate = null
        var walletEndDate = null

        if (users[key].wallet) {

            var walletAmout = users[key].wallet.amount;
            var walletStartDate = users[key].wallet.startDate;
            if (users[key].wallet.endDate) {
                var walletEndDate = users[key].wallet.endDate;
            }

        }


        div.innerHTML += '<tr><td class="userId">' + id + '</td><td class="userAvatar">' + avatar + '</td><td class="userEmail">' + email + '</td> <td class="userName">' + name + '</td><td class="userDescr">' + description + '</td><td class="userWalletStatus"></td><td class="userTransactions"></td><td class="userWalletAmount">' + walletAmout + '</td><td class="userWalletStartDate">' + walletStartDate + '</td><td class="userWalletEndDate">' + walletEndDate + '</td><td class="userWalletDistributed"></td><td class="walletAction"><button class="Distribute">Distribute</button></td></tr>'


    }
})
transRef.once("value").then(function(snoip) {
    const trans = snoip.val()
    const keys = Object.keys(trans)
    for (const key of keys) {
        var authorKey = key
        var authorId = trans[key].authorId

        var i = 1
        while (Object.keys(trans[key])[i]) {
            var URL = Object.keys(trans[key])[i]

            if (URL) {
                var titre = trans[key][URL].title
                var transactions = trans[key][URL].cTransactions
                var comments = trans[key][URL].comments

                if (transactions) {
                    var ntransactions = Object.keys(trans[key][URL].cTransactions).length

                } else {
                    ntransactions = null
                }
                if (comments) {
                    var ncomments = Object.keys(trans[key][URL].comments).length

                } else {
                    ncomments = 0
                }

            }
            div2.innerHTML += '<tr><td class="AuthorKey">' + authorId + '</td><td class="AuthorKey">' + authorKey + '</td><td class="URL">' + URL + '</td><td class="titre">' + titre + '</td> <td class="transactions">' + ntransactions + '</td><td class="comments">' + ncomments + '</td>'

            i++
        }




    }
})
checkRef.once("value").then(function(snoip) {
    const checkouts = snoip.val()
    var authorPool = []
    const keys = Object.keys(checkouts)
    for (const key of keys) {
        objAuth = {}
        var authorKey = key
        authorPool.push(authorKey)
        var year = checkouts[key]
        const parseyear = Object.keys(year)
        div3.innerHTML += '<tr><td class="id' + authorKey + '">' + authorKey + '</td><td id="AuthorName' + authorKey + '"></td><td id="AuthorMail' + authorKey + '"></td><td id="AuthorBank' + authorKey + '"></td><td id="janvier' + parseyear + authorKey + '"></td><td id="février' + parseyear + authorKey + '"></td><td id="mars' + parseyear + authorKey + '"></td><td id="avril' + parseyear + authorKey + '"></td><td id="mai' + parseyear + authorKey + '"></td><td id="juin' + parseyear + authorKey + '"></td><td id="juillet' + parseyear + authorKey + '"></td><td id="aout' + parseyear + authorKey + '"></td><td id="septembre' + parseyear + authorKey + '"></td><td id="octobre' + parseyear + authorKey + '"></td><td id="novembre' + parseyear + authorKey + '"></td><td id="décembre' + parseyear + authorKey + '"></td>'

        var month = year[parseyear]
        const parsemonth = Object.keys(month)
        for (const submonth of parsemonth) {
            var subMonth = month[submonth]
                /*     var id = "#" + submonth + parseyear[0] + authorKey
                    document.querySelector(id).innerHTML = subMonth.total / 10 */


        }
        /*  for (const month of month) {
             console.log(month)
         } */

        /*  var i = 1
             while (Object.keys(trans[key])[i]) {
                 var URL = Object.keys(trans[key])[i]

                 if (URL) {
                     var titre = trans[key][URL].title
                     var transactions = trans[key][URL].cTransactions
                     var comments = trans[key][URL].comments

                     if (transactions) {
                         var ntransactions = Object.keys(trans[key][URL].cTransactions).length

                     } else {
                         ntransactions = null
                     }
                     if (comments) {
                         var ncomments = Object.keys(trans[key][URL].comments).length
                         console.log(ncomments)

                     } else {
                         ncomments = 0
                     }

                 }
                 div2.innerHTML += '<tr><td class="AuthorKey">' + authorId + '</td><td class="AuthorKey">' + authorKey + '</td><td class="URL">' + URL + '</td><td class="titre">' + titre + '</td> <td class="transactions">' + ntransactions + '</td><td class="comments">' + ncomments + '</td>'

                 i++
             }




             
 */



    }
    //console.log(authorPool)
    var authorIdPool = []
    transRef.once("value").then(function(snoip) {
        for (const authorKey of authorPool) {
            //console.log(snoip.val()[authorKey].authorId)
            authorIdPool.push(snoip.val()[authorKey].authorId)

        }

        //console.log(authorIdPool)
        for (const authorId of authorIdPool) {
            firebase.database().ref('users/' + authorId).once("value").then(function(snoip) {
                var name = "#AuthorName" + snoip.val().authorDetails.key
                    //console.log(document.querySelector(name))

                document.querySelector(name).innerHTML = snoip.val().displayName
                var bank = "#AuthorBank" + snoip.val().authorDetails.key
                document.querySelector(bank).innerHTML = snoip.val().authorDetails.bankAccount
                var mail = "#AuthorMail" + snoip.val().authorDetails.key
                document.querySelector(mail).innerHTML = snoip.val().email
            })

        }

    })
})