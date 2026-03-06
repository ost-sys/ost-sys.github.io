function toggleSize() {
  var block = document.querySelector("main");
  if (block.style.width === "1280px") {
    block.style.width = "100%";
    block.style.height = "100%";
  } else {
    block.style.width = "1280px";
    block.style.height = "720px";
  }
}