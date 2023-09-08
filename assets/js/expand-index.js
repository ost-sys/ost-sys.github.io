function toggleSize() {
  var block = document.querySelector("main");
  if (block.style.width === "1280px") {
    block.style.width = "100%";
    block.style.height = "100%";
    cnt.style.gridTemplateColumns = "repeat(5, minmax(auto, 1fr))";
  } else {
    block.style.width = "1280px";
    block.style.height = "720px";
    cnt.style.gridTemplateColumns = "repeat(4, minmax(auto, 1fr))";
  }
}