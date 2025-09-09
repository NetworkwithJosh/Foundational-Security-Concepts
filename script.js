function toggleExplain(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

// (Optional) Typewriter effect for commands
function typeWriter(element, text, speed=40) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Example: animate first command
window.onload = () => {
  const cmd = document.querySelector(".command");
  const text = cmd.innerText;
  cmd.innerHTML = "";
  typeWriter(cmd, text, 40);
};

