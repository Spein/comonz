var elementOfInterest = document.getElementsByTagName('comonz') ? document.getElementsByTagName('comonz') : null
console.log(elementOfInterest)
key = elementOfInterest.length > 0 ? elementOfInterest[0].id : null;

var img
var uRL
if (window.location.host === "www.youtube.com") {
    uRL = "yt-" + window.location.search.split("&")[0].split('=')[1]
    img = "youtube-img"
} else {
    fetchContent(window.location.href)


}
console.log(uRL)

window.onblur = function() {
    chrome.runtime.sendMessage({ payload: [key, uRL, title, img, null, Date.now()] })

}
window.onfocus = function() {
    console.log(key)
    chrome.runtime.sendMessage({ payload: [key, uRL, title, img, Date.now(), null] })
}
chrome.runtime.sendMessage({ payload: [key, uRL, title, img, Date.now(), null] });

function fetchContent(url) {



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

            // You can now even select part of that html as you would in the regular DOM
            // Example:
            // var docArticle = doc.querySelector('article').innerHTML;
            console.log(doc.getElementsByTagName('comonz')[0])
            if (doc.getElementsByTagName('comonz')[0].id == key) {
                console.log("key found");
                var urlArr = []
                var rawURL = window.location.host.replace(/[^\w\s]/gi, '').substring(3) + window.location.pathname.replace(/[^\w\s]/gi, '')
                var splitedURL = rawURL.split()
                for (var i = 0; i <= splitedURL[0].length; i++) {
                    if (i % 2 == 0) {
                        urlArr.push(splitedURL[0][i])
                    }

                }
                var preuRL = urlArr.join()
                uRL = preuRL.replace(/[,]/gi, '')
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
            }
        })
        .catch(function(err) {
            console.log('Failed to fetch page: ', err);
        })
}