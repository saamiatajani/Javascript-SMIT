// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
 var city = +prompt("Enter your city name:");
  if (city === "karachi") {
    alert("Welcome to city of lights");
  } else {
    alert("Welcome to " + city);
  }

//   2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = +prompt("Enter your gender (male/female):");
 if (gender === "male") {
    alert("Good Morning Sir.");
  } else if (gender === "female") {
    alert("Good Morning Ma’am.");
  } else {
    alert("Invalid input. Please enter 'male' or 'female'.");
  }

//   3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
 var color = prompt("Enter the traffic signal color (Red, Yellow, Green):");
  if (color === "red") {
    alert("Must Stop");
  } else if (color === "yellow") {
    alert("Ready to move");
  } else if (color === "green") {
    alert("Move now");
  } else {
    alert("Invalid color! Please enter Red, Yellow, or Green.");
  }

//   4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
 var fuel = +prompt("Enter remaining fuel in your car (in litres):");
 fuel = parseFloat(fuel);
 if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
  } else {
    alert("Fuel level is sufficient");
  }

//   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a.
var a = 4;
if (++a === 5){
  alert("Given condition for variable a is true");  
} 
// b.
var b = 82;
if (b++ === 83){
  alert("Given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
  alert("Condition 1 is true");
}
if (c === 13){
  alert("Condition 2 is true");
}
if (++c < 14){
  alert("Condition 3 is true");
}
if (c === 14){
  alert("Condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}
// e.
if (true){
  alert("True");
}
if (false){
  alert("False");
}
// f.
if ("car" < "cat"){
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
 var English =(+prompt("Enter marks obtained in English:"));
  var Urdu = (+prompt("Enter marks obtained in Urdu:"));
  var Maths =(+prompt("Enter marks obtained in Maths:"));
  var totalMarks = (+prompt("Enter total marks:"));
   var obtainedMarks = English + Urdu + Maths;
  var percentage = (obtainedMarks / totalMarks) * 100;
  var grade, remarks;

  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }
  document.write("<table>");
  document.write("<tr><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th><th>Grade</th><th>Remarks</th></tr>");
  document.write("<tr>");
  document.write("<td>" + totalMarks + "</td>");
  document.write("<td>" + obtainedMarks + "</td>");
  document.write("<td>" + percentage.toFixed(2) + "%</td>");
  document.write("<td>" + grade + "</td>");
  document.write("<td>" + remarks + "</td>");
  document.write("</tr>");
  document.write("</table>");

//   7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretNumber = 7;
var userGuess =(+prompt("Guess the secret number (1 to 10):"));
if (userGuess === secretNumber){
    alert("Bingo! Correct answer");
}else (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) 
    alert("Close enough to the correct answer");

//     8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
 var number =(+prompt("Enter a number to check:"));
 if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
  } else {
    alert(number + " is NOT divisible by 3.");
  }

//   9. Write a program that checks whether the given input is an
// even number or an odd number.
  var number =(+prompt("Enter a number:"));
   if (number % 2 === 0) {
    alert(number + " is an Even number.");
  } else {
    alert(number + " is an Odd number.");
  }

//   10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
  var temperature =(+prompt("Enter the current temperature:"))
  if (temperature > 40) {
    alert("It is too hot outside.");
  } else if (temperature > 30) {
    alert("The Weather today is Normal.");
  } else if (temperature > 20) {
    alert("Today’s Weather is cool.");
  } else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
  } else {
    alert("It's really cold today!");
  }
  
//   11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
 var num1 = (prompt("Enter the first number:"));
  var num2 =(prompt("Enter the second number:"));
  var operator = prompt("Enter the operation (+, -, *, /, %):");
  var result;
   if (operator === "+") {
    result = num1 + num2;
    alert("Result: " + result);
  } 
  else if (operator === "-") {
    result = num1 - num2;
    alert("Result: " + result);
  } 
  else if (operator === "*") {
    result = num1 * num2;
    alert("Result: " + result);
  } 
  else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
      alert("Result: " + result);
    } else {
      alert("Error: Division by zero!");
    }
  } 
  else if (operator === "%") {
    if (num2 !== 0) {
      result = num1 % num2;
      alert("Result: " + result);
    } else {
      alert("Error: Division by zero!");
    }
  } 
  else {
    alert("Invalid operator entered.");
  }






