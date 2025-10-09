function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function copyPrompt(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  button.innerText = "Copied!";
  setTimeout(() => (button.innerText = "Copy Prompt"), 1500);
}
