let data = JSON.parse(localStorage.getItem("video"));
function playVideo(data) {
  let container = document.getElementById("play");
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1`;
  iframe.width = "735px";
  iframe.height = "413px";
  iframe.setAttribute = ("allowfullscreen", true);
  container.append(iframe);
}

playVideo(data);

console.log(data);

{
  /* <iframe
  width="735"
  height="413"
  src="https://www.youtube.com/embed/wr2DiLeDSVI"
  title="YouTube Data API v3 Tutorial | OAuth | Youtube Api OAuth | Get Youtube Channel List Api | Hindi | #1"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>; */
}
