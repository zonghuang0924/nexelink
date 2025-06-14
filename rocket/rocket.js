document.addEventListener("DOMContentLoaded", () => {
  const rocket = document.getElementById("rocket");

  function randomFly() {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.5;
    rocket.style.left = `${x}px`;
    rocket.style.bottom = `${y}px`;
  }

  setInterval(() => {
    if (Math.random() > 0.6) { // 控制飛出頻率
      rocket.style.display = "block";
      randomFly();
    } else {
      rocket.style.display = "none";
    }
  }, 8000);

  rocket.addEventListener("click", () => {
    // 彈出小遊戲（可改為 modal 或 iframe）
    window.open("/game/rocket-mini.html", "_blank", "width=480,height=640");
  });
});
