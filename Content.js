try {
    var url = window.location.href;
} catch (e) {
    url = ""
}

if (url != "" && url.includes("youtube")) {
    console.log("url has youtube")
    setInterval(checkVideoChanged, 1000)
}

console.log(url)

function checkVideoChanged() {
    var newUrl = window.location.href;
    if (newUrl == url) return;
    console.log("URL changed");
    url = newUrl;

}