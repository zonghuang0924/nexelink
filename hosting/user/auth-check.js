// 🔒 Nexelink 使用者登入檢查模組

// 模擬從後端或 localStorage 拿到登入狀態
const userSession = {
  isLoggedIn: false,  // ⚠️ 這裡預設為 false，請串接你們後端登入邏輯
  username: null
};

// 如果沒登入就自動導向登入頁
if (!userSession.isLoggedIn) {
  alert("請先登入會員才能使用此功能");
  window.location.href = "/member/login.html";
}
fetch("/api/userinfo")
  .then(res => res.json())
  .then(user => {
    if (!user || !user.isLoggedIn) {
      window.location.href = "/member/login.html";
    }
  });
