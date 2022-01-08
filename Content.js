var url = window.location.href;
onVideoChange();
var interval = setInterval(checkUrlChanged, 1000);

function checkUrlChanged() {
  clearInterval(interval);
  interval = setInterval(checkUrlChanged, 1000);

  var newUrl = window.location.href;
  if (newUrl == url) return false;
  url = newUrl;
  onVideoChange();
}

function onVideoChange() {
  var myHeaders = new Headers();
  myHeaders.append('pragma', 'no-cache');
  myHeaders.append('cache-control', 'no-cache');
  myHeaders.append("Access-Control-Allow-Origin", "*")
  myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")

  const ms = Date.now();
  fetch(
    `https://raw.githubusercontent.com/TalhaQuddoos/chrome-extension-sm-blocker/master/data.json?b${ms}a=${ms}`
  )
    .then((response) => response.json())
    .then((data) => {
      const title = document.title;
      const channel = "---";
      const restricted_urls = data["urls"];
      console.log(restricted_urls)
      if (restricted_urls.includes(url)) {
        console.log("Caution!: This URL is restricted.");
      }
    });
}
