const clock = document.getElementById("clock");

function tick() {
  clock.textContent = new Date().toLocaleTimeString("zh-CN", { hour12: false });
}

tick();
setInterval(tick, 1000);
