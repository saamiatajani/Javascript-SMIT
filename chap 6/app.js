// Q1
var a = 10;
document.write("<h3>Result:</h3><br>");
document.write("The value of a is: " + a + "<br><br>");
document.write("-------------------------------<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br><br>");

// Q2
var a = 2
var b = 1
var finalResult = 3
// var result= --a - --b + ++b + b--
//--a = 2-1 = 1
//--a - --b = 1-0 = 1
//--a - --b + ++b = 1-0+1
//--a - --b + ++b + b-- = 1-0+1+1 
document.write("a is" + a + "<br>");
document.write("b is" + b + "<br>");
document.write("result is " + finalResult + "<br>");

//Q3
var userName = +prompt("Please enter your name:");
alert("Hello " + userName + "! Welcome to our website."+ "<br><br>");

//Q5
var num = +prompt("Enter a number for multiplicaton")
document.write(num +" x 1 ="+ (num*1)+"<br>")
document.write(num +" x 2 ="+ (num*2)+"<br>")
document.write(num +" x 3 ="+ (num*3)+"<br>")
document.write(num +" x 4 ="+ (num*4)+"<br>")
document.write(num +" x 5 ="+ (num*5)+"<br>")
document.write(num +" x 6 ="+ (num*6)+"<br>")
document.write(num +" x 7 ="+ (num*7)+"<br>")
document.write(num +" x 8 ="+ (num*8)+"<br>")
document.write(num +" x 9 ="+ (num*9)+"<br>")
document.write(num +" x 10 ="+ (num*10)+"<br><br>")

//Q6


document.write("<h2>Student Marks Sheet</h2>" + "<br>")

  // a) Take 3 subject names from user
  var subject1 = +prompt("Enter name of Subject 1:");
  var subject2 = +prompt("Enter name of Subject 2:");
  var subject3 = +prompt("Enter name of Subject 3:");

  // b) Total marks for each subject
  var totalMarksPerSubject = 100;

  // c & d) Take obtained marks for each subject
  var marks1 = +prompt("Enter obtained marks for " + subject1 + ":")
  var marks2 = +prompt("Enter obtained marks for " + subject2 + ":")
  var marks3 = +prompt("Enter obtained marks for " + subject3 + ":")

  // e) Calculate total and percentage
  var totalObtained = marks1 + marks2 + marks3;
  var totalMarks = totalMarksPerSubject * 3;
  var percentage = (totalObtained / totalMarks) * 100;

  
  document.write("<table border='1' cellpadding='8'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
  document.write("<tr><th colspan='2'>Total Obtained Marks</th><td>" + totalObtained + "</td></tr>");
  document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
  document.write("</table>");

