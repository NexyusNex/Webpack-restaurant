import homeLoad from "./home";

function pageLoad() {
  const container = document.querySelector(".container");
  //header
  const header = document.createElement("div");
  header.classList.add("header");

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant page";

  const ul = document.createElement("ul");
  const list1 = document.createElement("li");
  const home = document.createElement("a");
  homeLoad();
  home.textContent = "Home";
  home.addEventListener("click", () => {
    container.innerHTML = "";
    homeLoad();
  });

  list1.appendChild(home);
  ul.appendChild(list1);

  header.appendChild(h1);
  header.appendChild(ul);
  container.parentNode.insertBefore(header, container);
}

export default pageLoad();
