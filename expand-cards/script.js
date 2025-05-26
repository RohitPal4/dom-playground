const imgh = document.querySelectorAll("img");

imgh.forEach(im => {
  im.addEventListener("click", function() {
    removeActive();
    im.classList.add("active");
  });
});

function removeActive() {
  imgh.forEach(im => im.classList.remove("active"));
}
