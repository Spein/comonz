var hashedUrl = null
var elementOfInterest = null
var key
var title
var img
var partnerUrl
var localKey
var localUrl
if (document.title) {
    title = document.title
} else {
    document.getElementsByTagName('h1')[0];
    title = document.getElementsByTagName('h1')[0]

};
window.onhashchange = removeStorage

function removeStorage() {
    localStorage.removeItem("hashedUrl")
    localStorage.removeItem("authorKey")
}
window.onload = setTimeout(onloadandfocus, 50)

async function onloadandfocus() {
    if (window.location.host === "www.youtube.com") {
        partnerUrl = "yt-" + window.location.search.split("&")[0].split('=')[1]
        console.log(partnerUrl)
        img = "youtube-img"
        localStorage.setItem("partnerUrl", partnerUrl)


        chrome.runtime.sendMessage({ payload: [null, partnerUrl, title, img, Date.now(), null] })


    } else {

        let key = await getKey()
        localStorage.removeItem("hashedUrl")
        localStorage.removeItem("authorKey")


        if (key) {
            localStorage.setItem("authorKey", key)
            console.log("focus")
            console.log(key)
            fetchContent(key)
        }
    }
}

window.onblur = async function() {
    if (window.location.host === "www.youtube.com") {
        img = "youtube-img"

        parnerUrl = localStorage.getItem('partnerUrl') ? localStorage.getItem('partnerUrl') : null
        console.log(partnerUrl)

        if (parnerUrl) {
            chrome.runtime.sendMessage({ payload: [null, parnerUrl, null, img, null, Date.now()] })
            localStorage.removeItem("parnerUrl")
            console.log("fblurocus")

        }

    } else {
        getUrl()
        localKey = localStorage.getItem('authorKey') ? localStorage.getItem('authorKey') : null
        localUrl = localStorage.getItem('hashedUrl') ? localStorage.getItem('hashedUrl') : null
        if (localKey && localUrl && localKey !== "null" && localKey !== "undefined") {
            chrome.runtime.sendMessage({ payload: [localKey, localUrl, null, null, null, Date.now()] })
            console.log("fblurocus")
            localStorage.removeItem("hashedUrl")
            localStorage.removeItem("authorKey")
        }
    }



    //console.log(key, hashedUrl)


}
window.onfocus = onloadandfocus

async function getKey() {
    var elementOfInterest = document.getElementsByTagName('comonz') ? document.getElementsByTagName('comonz') : null
    var key = elementOfInterest.length > 0 ? elementOfInterest[0].id : null;
    localStorage.setItem("authorKey", key)

    return key
}

async function getUrl() {
    var urlArr = []
    var rawURL = window.location.host.replace(/[^\w\s]/gi, '').substring(3) + window.location.pathname.replace(/[^\w\s]/gi, '')
    var splitedURL = rawURL.split()
    for (var i = 0; i <= splitedURL[0].length; i++) {
        if (i % 2 == 0) {
            urlArr.push(splitedURL[0][i])
        }

    }
    var preuRL = urlArr.join()
    let hashedUrl = preuRL.replace(/[,]/gi, '')

    localStorage.setItem("hashedUrl", hashedUrl)
    return hashedUrl

}



async function fetchContent(key) {
    getUrl()
    let checkedUrl = await getUrl()

    url = window.location.href
    fetch(url)
        .then(function(response) {
            // When the page is loaded convert it to text
            return response.text()
        })
        .then(function(html) {
            // Initialize the DOM parser
            var parser = new DOMParser();

            // Parse the text
            var doc = parser.parseFromString(html, "text/html");
            console.log(doc)

            // You can now even select part of that html as you would in the regular DOM
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;
            //console.log(doc.getElementsByTagName('comonz')[0])
            if (doc.getElementsByTagName('comonz')[0].id == key) {
                console.log("key found");

                if (document.getElementsByTagName('img')[0]) {
                    img = document.getElementsByTagName('img')[0].src
                } else {
                    img = './andrea.jpg'

                }

                if (document.title) {
                    title = document.title
                } else {
                    document.getElementsByTagName('h1')[0];
                    title = document.getElementsByTagName('h1')[0]

                };
                let localUrl = localStorage.getItem("hashedUrl")
                let localKey = localStorage.getItem("authorKey")

                console.log(localKey, localUrl, checkedUrl)
                if (key && checkedUrl) {
                    console.log(key, checkedUrl, title, img)
                    chrome.runtime.sendMessage({ payload: [key, checkedUrl, title, img, Date.now(), null] })
                }

            }
        })




}