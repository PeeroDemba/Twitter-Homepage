var arrow = document.getElementById("arrow");
var msg = document.getElementById("messages");

function plug() {
  if (msg.classList[1] == "down") {
    msg.classList.add("up");
    msg.classList.remove("down");
    arrow.classList.remove("normal");
    arrow.classList.add("rotate");
  } else {
    msg.classList.remove("up");
    msg.classList.add("down");
    arrow.classList.remove("rotate");
    arrow.classList.add("normal");
  }
}

arrow.addEventListener("click", plug);
