const status = document.getElementById("status");

const live = false;

if (live) {
    status.textContent = "🔴 LIVE";
    status.style.color = "#ff4444";
} else {
    status.textContent = "⚫ Offline";
}
