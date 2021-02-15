function makeHttpObject() {
    try { return new XMLHttpRequest(); } catch (error) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (error) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (error) {}

    throw new Error("Could not create HTTP request object.");
}
var request = makeHttpObject();
//alert(chrome)
request.open("GET", window.location, true);
request.send(null);

request.onreadystatechange = function() {

    var elementOfInterest = document.getElementsByTagName('comonz') ? document.getElementsByTagName('comonz') : null

    if (request.readyState == 4 && elementOfInterest.length > 0 && !window.location.href.includes("chrome://")) {
        key = elementOfInterest[0].id;

        if (request.responseText.includes(key)) {
            console.log("ok")

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
            window.onblur = function() {
                console.log(key)
                chrome.runtime.sendMessage({ payload: [key, uRL, title, img, null, Date.now()] });


            }

            //console.log(key)

            window.onfocus = function() {
                console.log(key)

                //console.log(window)

                chrome.runtime.sendMessage({ payload: [key, uRL, title, img, Date.now(), null] });



            }
            chrome.runtime.sendMessage({ payload: [key, uRL, title, img, Date.now(), null] });


        }

    } else {
        console.log("pascontenu")
        key = null
        uRL = null
        title = null
        img = null
        chrome.runtime.sendMessage({ payload: [key, uRL, title, img] });
    }

};