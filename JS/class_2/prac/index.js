// ==========================================
//   JAVASCRIPT CLASS 2 - VARIABLES
//   Topics: var, let, const + operations
// ==========================================

// ==========================================
//   SECTION 1: VARIABLE BASICS
// ==========================================

// Variable Declaration + Initialization (dono ek saath)
var student_name = "Ali";

// Sirf Declaration (bina value ke)
var roll_number;

// Baad mein Initialization
roll_number = 12345;

console.log("Student Name:", student_name);
console.log("Roll Number:", roll_number);

// ==========================================
//   SECTION 2: var KEYWORD
//   ✅ Can be REDECLARED
//   ✅ Can be REASSIGNED
// ==========================================

var course = "HTML";
console.log("Course pehle:", course);

// Redeclare (var ke saath allowed hai)
var course = "CSS";
console.log("Course redeclare ke baad:", course);

// Reassign (value change karna)
course = "JavaScript";
console.log("Course reassign ke baad:", course);

// ==========================================
//   SECTION 3: let KEYWORD (Modern Way)
//   ❌ CAN'T be REDECLARED
//   ✅ Can be REASSIGNED
// ==========================================

let city = "Karachi";
console.log("City pehle:", city);

// Reassign (allowed hai)
city = "Lahore";
console.log("City reassign ke baad:", city);

// Redeclare (ERROR aayega - isliye comment kiya hai)
// let city = "Islamabad";  // ❌ SyntaxError!

// ==========================================
//   SECTION 4: const KEYWORD
//   ❌ CAN'T be REDECLARED
//   ❌ CAN'T be REASSIGNED
//   ⚠️  Declaration + Initialization ZAROORI hai
// ==========================================

const PI = 3.14;
console.log("PI ki value:", PI);

// Reassign (ERROR aayega)
// PI = 3.15;  // ❌ TypeError!

// const ke saath sirf declaration nahi ho sakti
// const country;  // ❌ SyntaxError!

// ==========================================
//   SECTION 5: NUMBER ADDITION (Real Example)
// ==========================================

// prompt() se jo aata hai wo hamesha STRING hota hai
// Isliye Number() se convert karna padta hai

let firstNumber = Number(prompt("Please enter first number:"));
let secondNumber = Number(prompt("Please enter second number:"));

let sum = firstNumber + secondNumber;

alert("Result: " + sum);
console.log("Pehla number:", firstNumber);
console.log("Doosra number:", secondNumber);
console.log("Total:", sum);

// ==========================================
//   SECTION 6: STUDENT INFO EXAMPLE
//   (Jaise sir ne board pe banaya)
// ==========================================

const stu_name = "Imran";
const roll_no = 23423;
const course_name = "Modern Web Development";

console.log("======================");
console.log("STUDENT DETAILS");
console.log("======================");
console.log("Name: " + stu_name);
console.log("Roll No: " + roll_no);
console.log("Course: " + course_name);
console.log("======================");
