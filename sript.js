function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function copyPrompt(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  button.innerText = "Copied!";
  button.style.background = "#28a745";
  setTimeout(() => {
    button.innerText = "Copy Prompt";
    button.style.background = "#ff004c";
  }, 1500);
}
