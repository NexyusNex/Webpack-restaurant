import homeLoad from "./home";
import contactLoad from "./contact";
import menuLoad from "./menu";

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

  const list2 = document.createElement("li");
  const contact = document.createElement("a");
  contact.textContent = "Contact";
  contact.addEventListener("click", () => {
    container.innerHTML = "";
    contactLoad();
  });

  const list3 = document.createElement("li");
  const menu = document.createElement("a");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {
    container.innerHTML = "";
    menuLoad();
  });

  list1.appendChild(home);
  list2.appendChild(contact);
  list3.appendChild(menu);
  ul.append(list1, list2, list3);

  header.appendChild(h1);
  header.appendChild(ul);
  container.parentNode.insertBefore(header, container);
}

export default pageLoad();
