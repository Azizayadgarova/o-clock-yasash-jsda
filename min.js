function updateClock() {
    const now = new Date();  // Hozirgi vaqtni olish
    const hours = now.getHours().toString().padStart(2, '0');  // Soatni olish va 2 raqamli formatda qilish
    const minutes = now.getMinutes().toString().padStart(2, '0');  // Daqiqani olish va 2 raqamli formatda qilish
    const seconds = now.getSeconds().toString().padStart(2, '0');  // Sekundani olish va 2 raqamli formatda qilish
    const timeString = `${hours}:${minutes}:${seconds}`;  // Vaqtni to'liq formatda chiqarish
    document.getElementById("clock").textContent = timeString;  // HTML elementga soatni chiqarish
}

// Soatni yangilash uchun interval qo'yish
setInterval(updateClock, 1000);  // Har bir soniyada soatni yangilab boradi

// Sahifa yuklanganda birinchi bor soatni chiqarish
updateClock();