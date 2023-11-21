export function installation() {
  let installPrompt = null;
  const installLink = document.querySelector("#installation");
  const installButton = document.querySelector("#installation-button");

  // Test if instaltion is possible
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installLink.classList.remove(
      "cursor-not-allowed",
      "opacity-50",
      "pointer-events-none"
    );
    installButton.classList.remove("cursor-not-allowed", "pointer-events-none");
    installButton.setAttribute("title", "Instalovat jako PWA");
  });
}
