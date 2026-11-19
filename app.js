const toast = document.getElementById("toast");
let toastTimer;
function notify(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
document.getElementById("connectBtn").addEventListener("click", () => {
  notify("No Android runtime is connected yet. This is the web interface only.");
});
document.querySelectorAll("[data-app]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.app;
    const messages = {
      Files: "File manager is planned for a later build.",
      Apps: "The app library will be added after runtime setup.",
      Settings: "System settings are not connected yet.",
      Terminal: "Terminal access is coming after a secure backend is ready."
    };
    notify(messages[name] || "This module is not ready yet.");
  });
});