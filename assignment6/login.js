// =============================================================================
// MDT312 Assignment 6 login.js
// Modernized: ES6 (const/let), event.preventDefault(), and for loop
// =============================================================================

window.onload = loginLoad;

function loginLoad() {

    const form = document.getElementById("myLogin");
    if (form) {
        form.onsubmit = checkLogin;
    }
}

function checkLogin(event) {
    // 1. ป้องกันหน้าเว็บรีเฟรชเองทันทีเมื่อกดปุ่ม Submit
    //alert("AAAAAAAAaaa");
    if (event) {
        event.preventDefault();
    }
    
    // 2. ดึงข้อมูลจาก localStorage ทีละตัว แล้วนำมาใส่ใน Array 
    const users = [{username: "admin", password: "123456"},{username: "admin", password: "123456"}]; // เพิ่มผู้ใช้ default ไว้แล้ว
    const StoredUsername = localStorage.getItem("storedUsername");
    const StoredPassword = localStorage.getItem("storedPassword");    
    //alert(`Form \nFirstname: ${StoredUsername}\nLastname: ${StoredPassword}`);

    // ถ้ามีข้อมูลใน localStorage ให้นำมาเก็บใส่ Array of Objects
    if (StoredUsername != null && StoredPassword != null) {
        
        users[1].username = StoredUsername;
        users[1].password = StoredPassword;
    }
    

    // 3. ตรวจสอบว่ามีข้อมูลผู้ใช้ในระบบหรือไม่
    if (users.length === 0) {
        alert("ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาลงทะเบียนที่หน้า Register ก่อน");
        window.location.href = "register.html";
        return false;
    }

    // 4. ดึงค่าที่ผู้ใช้กรอกในฟอร์ม Login ปัจจุบัน
    const username = document.forms["myLogin"]["username"].value.trim();
    const password = document.forms["myLogin"]["password"].value.trim();

    // 5. ใช้ for loop วนหาใน Array ว่ามี username และ password ที่ตรงกับที่เรากรอกหรือไม่
    let isLoginSuccess = false;
    for (let i = 0; i < users.length; i++)
    {
        if (username == users[i].username )
        {
            if (password == users[i].password )
            {
                isLoginSuccess = true;
            }
            
        }
    }

    


    // 6. ตรวจสอบผลลัพธ์จากการวนลูป
    if (isLoginSuccess) {
        alert("Login success! ยินดีต้อนรับเข้าสู่ระบบ");
        return true;
    } else {
        alert("Username หรือ password ไม่ถูกต้อง");
        return false;
    }
}