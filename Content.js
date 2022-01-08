var url = window.location.href;
onVideoChange()
var interval = setInterval(checkUrlChanged, 1000)

function checkUrlChanged() {
    clearInterval(interval);
    interval = setInterval(checkUrlChanged, 1000);

    var newUrl = window.location.href;
    if (newUrl == url) return false;
    url = newUrl;
    onVideoChange();
}

function onVideoChange() {
    fetch("https://raw.githubusercontent.com/TalhaQuddoos/chrome-extension-sm-blocker/master/data.json")
    .then(response => response.json())
    .then(data => {
        const title = document.title
        const channel = "---"
        console.log(url)
        const restricted_urls = data["urls"]
        console.log(restricted_urls)
        window.tempor = restricted_urls
        
        console.log(window.tempor.includes(url))
        if(restricted_urls.includes(url)) {
            console.log("Caution!: This URL is restricted.")
        }
    })

}