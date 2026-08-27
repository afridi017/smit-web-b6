// ===================================================
//   JAVASCRIPT CLASS 4 - DATA TYPES & LOGICAL OPERATORS
// ===================================================

// ===================================================
// 1. PRIMITIVE DATA TYPES & typeof OPERATOR
// ===================================================
console.log("--- 1. PRIMITIVE DATA TYPES ---");

// A) Number
let age = 22;
console.log("Age:", age, "| Type:", typeof age); // "number"

// B) String
let userName = "Ibrahim Afridi";
console.log("Name:", userName, "| Type:", typeof userName); // "string"

// C) Boolean (true / false)
let isLoggedIn = true;
console.log("Is Logged In:", isLoggedIn, "| Type:", typeof isLoggedIn); // "boolean"

// D) Undefined (Variable banaya par value nahi di)
let address;
console.log("Address:", address, "| Type:", typeof address); // "undefined"

// E) Null (Jan-bujh kar khali/empty value di)
let userProfilePic = null;
console.log("Profile Pic:", userProfilePic, "| Type:", typeof userProfilePic);
// Note: typeof null returns "object" (ye JS ka aik mashhoor bug/quirk hai!)

// F) Symbol (Hamesha Unique Value deta hai)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol 1:", sym1, "| Type:", typeof sym1);
console.log("Is sym1 === sym2?", sym1 === sym2); // false (dono ki description same hai par values unique hain!)

// ===================================================
// 2. COMPARISON OPERATORS RECAP
// ===================================================
console.log("\n--- 2. COMPARISON OPERATORS ---");

let numA = 20;
let numB = "20";

console.log("20 == '20' :", numA == numB); // true (sirf value check ki)
console.log("20 === '20' :", numA === numB); // false (value + datatype check ki)
console.log("20 > 10 :", numA > 10); // true
console.log("20 <= 20 :", numA <= 20); // true
console.log("20 !== '20' :", numA !== numB); // true (datatypes different hain)

// ===================================================
// 3. LOGICAL OPERATORS (&&, ||, !)
// ===================================================
console.log("\n--- 3. LOGICAL OPERATORS ---");

// User Credentials (Real World Example)
let userEmail = "test@gmail.com";
let userPassword = "asdf123";
let acceptedTerms = true;

// A) LOGICAL AND (&&) - Saari Conditions True Honi Chahiye
// Truth Table:
// true && true   => true
// true && false  => false
// false && true  => false
// false && false => false

let canLogin =
  userEmail === "test@gmail.com" &&
  userPassword === "asdf123" &&
  acceptedTerms === true;
console.log("Can User Login (AND &&)? :", canLogin); // Output: true

// B) LOGICAL OR (||) - Kam se Kam Ek Condition True Honi Chahiye
// Truth Table:
// true || true   => true
// true || false  => true
// false || true  => true
// false || false => false

let hasGoogleLogin = false;
let hasEmailLogin = true;

let canAccessDashboard = hasGoogleLogin || hasEmailLogin;
console.log("Can Access Dashboard (OR ||)? :", canAccessDashboard); // Output: true

// C) LOGICAL NOT (!) - True ko False, aur False ko True Kar Deta Hai
let isBlocked = false;
console.log("Is User Allowed (!isBlocked)? :", !isBlocked); // Output: true
