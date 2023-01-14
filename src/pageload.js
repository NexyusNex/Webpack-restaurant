function pageLoad() {
  const body = document.querySelector("body");
  //header
  const header = document.createElement("div");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant page";

  const ul = document.createElement("ul");
  const list = ["Home", "Contact", "Menu"];
  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = list[i];
    ul.appendChild(li);
  }
  header.appendChild(h1);
  header.appendChild(ul);
  body.appendChild(header);

  const container = document.createElement("div");
  container.classList.add("container");
  const desc = document.createElement("div");
  desc.classList.add("description");

  const img = document.createElement("img");
  img.setAttribute("alt", "food");
  img.setAttribute("src", "../food.jpg");
  const text = document.createElement("div");
  text.textContent =
    "We are a tight-knit, fun-loving, devoted team of local cooks spreading" +
    "the gospel of good times and good food. We offer limited capacity onsite" +
    "events in our restaurant kitchen space. And worry not, our krewe will" +
    "travel to your destination of choice from hotel ballrooms to private" +
    "kitchens to entertain groups of all sizes. We cook, we tell stories, we" +
    " deliver informative culinary demonstrations and lectures, but most of" +
    "all we treat every event like you're a guest at our dinner table. Join" +
    "us!";

  desc.appendChild(img);
  desc.appendChild(text);
  container.appendChild(desc);
  body.appendChild(container);
}

export default pageLoad();
