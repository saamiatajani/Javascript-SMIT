// Q1
var char = prompt("Enter a character (number or letter):");
var ascii = char.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    document.write("You entered a number.<br>");
} else if (ascii >= 65 && ascii <= 90) {
    document.write("You entered an uppercase letter.<br>");
} else if (ascii >= 97 && ascii <= 122) {
    document.write("You entered a lowercase letter.<br>");
} else {
    document.write("Invalid input.<br><br>");
}

//Q2
var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));
if (num1 > num2) {
    document.write(num1 + " is larger.<br>");
} else if (num2 > num1) {
    document.write(num2 + " is larger.<br>");
} else {
    document.write("Both numbers are equal.<br><br>");
}

//Q3
var number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    document.write("Positive number.<br>");
} else if (number < 0) {
    document.write("Negative number.<br>");
} else {
    document.write("Zero.<br><br>");
}

//Q4
var char2 = prompt("Enter a single character:").toLowerCase();
if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") {
    document.write("True (Vowel)<br>");
} else {
    document.write("False (Not a vowel)<br><br>");
}

//Q5
var correctPassword = "Mitochondria";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
    document.write("Please enter your password<br>");
} else if (userPassword === correctPassword) {
    document.write("Correct! The password you entered matches the original password<br>");
} else {
    document.write("Incorrect password<br><br>");
}

//Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write(greeting + "<br><br>");

//Q7
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));
if (time >= 0 && time < 1200) {
    document.write("Good morning!<br>");
} else if (time >= 1200 && time < 1700) {
    document.write("Good afternoon!<br>");
} else if (time >= 1700 && time < 2100) {
    document.write("Good evening!<br>");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good night!<br>");
} else {
    document.write("Invalid time entered.<br>");
}