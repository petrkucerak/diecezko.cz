export function installation() {
  let installPrompt = null;
  const installLink = document.querySelector("#installation");
  const installButton = document.querySelector("#installation-button");

  console.log("Hello world");

  window.addEventListener("beforeinstallprompt", (event) => {
    console.log("Run");
    event.preventDefault();
    installPrompt = event;
    installLink.classList.remove(
      "cursor-not-allowed",
      "opacity-50",
      "pointer-events-none"
    );
    installButton.classList.remove("cursor-not-allowed", "pointer-events-none");
  });
}
