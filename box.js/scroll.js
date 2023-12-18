window.addEventListener("scroll", function () {
  let scrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(scrolled) === scrollable) {
    let toTop = document.querySelector(".top-page");
    toTop.style.display = "block";

    toTop.addEventListener("click", function () {
      toTop.style.display = "none";
    });
  }
});
