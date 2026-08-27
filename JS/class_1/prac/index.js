// ==========================================
//   JAVASCRIPT CLASS 19 - HOMEWORK
//   Topics: console, alert, prompt, confirm, var
// ==========================================

// ==========================================
//   1. CONSOLE.LOG - Message in Console
// ==========================================
console.log("Hello World!");
console.log("Assalam-o-Alaikum Jani!");
console.log("Ye mera JavaScript ka pehla program hai");

// ==========================================
//   2. ALERT - Popup Message
// ==========================================
alert("Welcome to JavaScript Class!");

// ==========================================
//   3. DOCUMENT.WRITE - Page pe Likhna
// ==========================================
document.write("<h2>Ye document.write se likha hai</h2>");
document.write("<p>Ye page pe direct print hota hai</p>");

// ==========================================
//   4. CONFIRM - Yes/No Popup
// ==========================================
var deleteConfirm = confirm("Kya aap ye product delete karna chahte hain?");

if (deleteConfirm == true) {
  alert("Product delete ho gaya!");
} else {
  alert("Product safe hai!");
}

// ==========================================
//   5. PROMPT - User Se Input Lena
// ==========================================

// Student Marks Wala Example
var studentMarks = prompt("Please enter student marks:", 0);
alert("Aapke marks hain: " + studentMarks);

// Age Wala Example (Jaise sir ne karaya)
var userAge = prompt("Please enter your age!", 18);

if (userAge >= 18) {
  alert("Aap eligible hain! ✅");
} else {
  alert("Aap eligible nahi hain! ❌");
}

// ==========================================
//   6. USER NAME - Extra Practice
// ==========================================
var userName = prompt("Aapka naam kya hai?", "Jani");
alert("Assalam-o-Alaikum " + userName + "! Welcome!");
console.log("User ka naam: " + userName);
