function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

function copyPrompt(button) {
  const text = button.previousElementSibling.innerText;
  navigator.clipboard.writeText(text);
  button.innerText = "Copied!";
  setTimeout(() => (button.innerText = "Copy Prompt"), 1500);
}
