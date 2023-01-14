function pageLoad() {
  const body = document.querySelector("body");
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
}

pageLoad();
