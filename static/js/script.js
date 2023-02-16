checkBox = document.getElementById("check-box");
btn = document.getElementById("btn");
icon = document.getElementById("icon");
link = document.getElementById("link");
position = window.scrollY;
backToTop = document.getElementById("back-to-top");

btn.addEventListener("click", function () {
  setTimeout(() => {
    icon.innerHTML = "file_download_done";
  }, 1000);
  setTimeout(() => {
    icon.innerHTML = "download";
  }, 10000);
});

link.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  setTimeout(
    () => {
      btn.focus();
      clearInterval;
    },
    800,
    clearInterval
  );
});

checkBox.addEventListener("change", function () {
  if (this.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
});

if (checkBox.checked == true) {
  $("html, body").css({
    overflow: "hidden",
    height: "100%",
  });
}

unCheck = () => {
  checkBox.checked = false;
  body.style.overflow = "scroll";
};
