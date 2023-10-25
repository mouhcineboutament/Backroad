const navBtn = document.getElementById("nav-togle");
const links = document.getElementById("nav-links");
console.log(navBtn);
console.log(links);

navBtn.addEventListener("click", () => {
  links.classList.toggle("show");
});
