function generateCard(imageLink, duration, title, channel, views, age) {
  // if views are greater than 1000, convert them to K format, if greater than 1000000, convert them to M format, if greater than 1000000000, convert them to B format
  if (views > 1000000000) {
    views = (views / 1000000000).toFixed(1) + "B";
  } else if (views > 1000000) {
    views = (views / 1000000).toFixed(1) + "M";
  } else if (views > 1000) {
    views = (views / 1000).toFixed(1) + "K";
  }
  let card = document.createElement("div");
  card.className = "container";
  card.innerHTML = `
      <div class="thumbnail">
          <div class="image">
              <img
                  src="${imageLink}"
                  alt=""
              />
              <div class="duration">${duration}</div>
          </div>
      </div>
      <div class="next-block">
          <div class="title">
              <h3>
                  ${title}
              </h3>
          </div>
          <div class="metadata">
              <table>
                  <tr>
                      <td>${channel}</td>
                      <td>• ${views}</td>
                      <td>• ${age} months ago</td>
                  </tr>
              </table>
          </div>
      </div>
  `;
  document.getElementById("cards").appendChild(card);
}

// Create random cards, use unsplash for random images
function createRandomCard() {
  let imageLink = `https://picsum.photos/168/96`;
  let duration = "12:34";
  let title = "This is a random title";
  let channel = "Channel Name";
  let views = Math.floor(Math.random() * 10000);
  let age = Math.floor(Math.random() * 12);
  generateCard(imageLink, duration, title, channel, views, age);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", createRandomCard);
