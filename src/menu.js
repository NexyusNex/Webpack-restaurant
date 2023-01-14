export default function menuLoad() {
  const container = document.querySelector(".container");
  const desc = document.createElement("div");
  desc.classList.add("description");

  const img = document.createElement("img");
  img.setAttribute("alt", "food");
  img.setAttribute("src", "../food.jpg");
  const text = document.createElement("div");
  text.textContent = "This is a menu";

  desc.appendChild(img);
  desc.appendChild(text);
  container.appendChild(desc);
}
