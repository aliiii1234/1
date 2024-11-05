// نام کاربری و رمز عبور ثابت
const validUsername = "admin";  // نام کاربری معتبر
const validPassword = "1234";   // رمز عبور معتبر

// اضافه کردن رویداد برای ارسال فرم
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

    // گرفتن مقادیر وارد شده توسط کاربر
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // اعتبارسنجی نام کاربری و رمز عبور
    if (username === validUsername && password === validPassword) {
        // ورود موفقیت‌آمیز، هدایت به صفحه اصلی
        alert("ورود موفقیت‌آمیز بود!");
        window.location.href = "main.html"; // تغییر به صفحه اصلی (main.html)
    } else {
        // اطلاعات اشتباه است
        alert("نام کاربری یا رمز عبور اشتباه است.");
    }
});