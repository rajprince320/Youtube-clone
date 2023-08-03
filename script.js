var apiKey = "AIzaSyAHB3rJI7duCVUkNxFodr9TKJ1h_LZ5BYs";

// let url = `https://youtube.www.googleapis.com/youtube/v3/search?part=snippet&macResults=100&chart=mostPopular&regionCode=IN&key=${apiKey}`;

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${apiKey}`;

async function mostPopular(url) {
  let link = await fetch(url).catch((err) => console.log(err));
  let data = await link.json();
  appendData(data.items);
}
mostPopular(url);

function appendData(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach(({ snippet, id: videoId }) => {
    let img = snippet.thumbnails.high.url;
    let title = snippet.title;
    let cTitle = snippet.channelTitle;
    let icon = snippet.thumbnails.default.url;

    let div = document.createElement("div");
    div.className = "videoCard";
    let image = document.createElement("img");
    image.src = img;
    let card_data = document.createElement("div");
    card_data.className = "card-data";

    let CIcon = document.createElement("img");
    CIcon.src = icon;
    CIcon.className = "channel-icon";
    let ChannelIcon = document.createElement("div");
    ChannelIcon.className = "channel-icon";
    let CTitle = document.createElement("div");
    CTitle.className = "title";
    let h3 = (document.createElement("h3").innerText = title);
    let CTtile = (document.createElement("p").innerText = cTitle);

    ChannelIcon.append(CIcon);
    CTitle.append(h3, CTtile);
    card_data.append(ChannelIcon, CTitle);

    div.append(image, card_data);
    container.append(div);

    let data = {
      snippet,
      videoId,
    };

    div.addEventListener("click", function () {
      localStorage.setItem("video", JSON.stringify(data));
      window.location.href = "./videoDetails.html";
    });

    // image.src = img;
    // let name = document.createElement("p");
    // name.innerText = title;
    // let Channel = document.createElement("p");
    // Channel.innerText = cTitle;
    // div.append(image, CTitle, h3);
    // container.append(div);

    // container.innerHTML += `
    // <div id="videoCard" class="videoCard" onclick="${video()}">
    //   <img src="${img}"/>
    //   <div class="card-data">
    //     <div class="channel-icon">
    //       <img src="${icon}" class="channel-icon" alt="">
    //     </div>
    //     <div class="title">
    //       <h3>${title}</h3>
    //       <p>${cTitle}</p>
    //     </div>
    //   </div>
    // </div>`;
  });
}

async function search() {
  let query = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apiKey}`
    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${apiKey}`
  ).catch((err) => console.log(err));
  // console.log(query);
  let data = await res.json();
  appendData(data.items);
}
