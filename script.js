const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

  window.addEventListener("load", () => {
    document.querySelector(".page-loader").classList.add("hidden");
  });

