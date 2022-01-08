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
  fetch(
    `https://mocki.io/v1/a158ad2f-c316-4f80-b296-88952ac3caef`
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
