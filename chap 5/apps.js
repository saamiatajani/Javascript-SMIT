// Q1 Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br><br><br>");

// Q2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 5;
var num2 = 3;
var sum = num1 - num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
var num1 = 3;
var num2 = 5;
var sum = num1 * num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
var num1 = 4;
var num2 = 2;
var sum = num1 / num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

//Q3 a. Declare a variable
var myVar;
// b. Show the value of variable
document.write("Value after variable declaration is: " + myVar + "<br>");
// c. Initialize the variable with some number
myVar = 8;
// d. Show the value of variable
document.write("Initial value: " + myVar + "<br>");
// e. Increment the variable
myVar++;
// f. Show the value of variable
document.write("Value after increment is: " + myVar + "<br>");
// g. Add 7 to the variable
myVar = myVar + 7;
// h. Show the value of variable
document.write("Value after addition is: " + myVar + "<br>");
// i. Decrement the variable
myVar--;
// j. Show the value of variable
document.write("Value after decrement is: " + myVar + "<br>");
// k. Show the remainder after dividing the variable’s value by 3
var remainder = myVar % 3;
// l. Output the remainder
document.write("The remainder is: " + remainder + "<br><br>");

// Q4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var ticketPrice = 600;
var totalQuan = 5;
var multiply = ticketPrice * totalQuan;
document.write("Total cost to buy 5 tickets to a movie is" + "" + multiply + "Pkr" + "<br><br>");

// Q5 Write a script to display multiplication table of any
// number in your browser.
var table = 4;
document.write(table + "x" + "1 =" + (table * 1) + "<br>");
document.write(table + "x" + "2 =" + (table * 2) + "<br>");
document.write(table + "x" + "3 =" + (table * 3) + "<br>");
document.write(table + "x" + "4 =" + (table * 4) + "<br>");
document.write(table + "x" + "5 =" + (table * 5) + "<br>");
document.write(table + "x" + "6 =" + (table * 6) + "<br>");
document.write(table + "x" + "7 =" + (table * 7) + "<br>");
document.write(table + "x" + "8 =" + (table * 8) + "<br>");
document.write(table + "x" + "9 =" + (table * 9) + "<br>");
document.write(table + "x" + "10 =" + (table * 10) + "<br><br>");

// Q6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
var Celsius = 25;
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var Celtofar = (Celsius * 9 / 5) + 32;
document.write(Celsius + "<sup>o</sup>C is" + Celtofar + "<sup>o</sup>F" + "<br>");
// c. Now store a Fahrenheit temperature into a variable.
var Fahrenheit = 70;
// d. Convert it to Celsius & output “NNoF is NNoC”.
var fartocel = (Fahrenheit - 32) * 5 / 9
document.write(Fahrenheit + "<sup>o</sup>F is" + fartocel + "<sup>o</sup>C" + "<br<br>");

// Q7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
document.write("<h1>Shopping cart</h1>");
// a. Price of item 1
var price1 = 650;
document.write("Price of item 1 is" + " " + price1 + "<br>")
// b. Price of item 2
var price2 = 100;
document.write("Price of item 2 is" + " " + price2 + "<br>")
// c. Ordered quantity of item 1
var quantity1 = 3;
document.write("Quantity of item 1 is" + " " + quantity1 + "<br>")
// d. Ordered Quantity of item 2
var quantity2 = 7;
document.write("Quantity of item 2 is" + " " + quantity2 + "<br>")
// e. Shipping charges
var Shipping = 100
var totalCost = (price1 * quantity1) + (price2 * quantity2) + Shipping;
document.write("Shipping charges" + Shipping + " " + "<br><br>");
document.write("Total cost of your order is" + totalCost + "<br><br>");

// Q8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write("<h1>Marksheet</h1>");
var totalMarks = 980;
document.write("Total marks :" + totalMarks + "<br>");
var obtainMarks = 804;
document.write("Marks obtained :" + obtainMarks + "<br>");
var Percentage = (804 / 980) * 100;
document.write("Percentage :" + Percentage + "%" + "<br><br>");

// Q9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h1>Currency in pkr</h1>");
var usDollar = 10;
var saudiRiyal = 25;
var totalPkr = (10 * 104.80) + (25 * 28)
document.write("Total currency in pkr :" + totalPkr + "<br><br>")

// Q10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
var num1 = 4;
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
var result = (num1 + 5) * 10 / 2
// Perform all calculations in a single expression
document.write("The result is" + result)

// Q11. The Age Calculator: Forgot how old someone is?
// Calculate it!
document.write("<h1>Age calculator</h1>");
// a. Store the current year in a variable.
var currYear = 2025
document.write("Current year :" + currYear + "<br>")
// b. Store their birth year in a variable.
var birthYear = 2006
document.write("Birth year :" + birthYear + "<br>")
// c. Calculate their 2 possible ages based on the stored
// values.
var age = currYear - birthYear
document.write("Your Age" + age + "<br><br>")

// Q12. The Geometrizer: Calculate properties of a circle.
document.write("<h1>The Geometrizer</h1>");
// a. Store a radius into a variable.
var radius = 20
document.write("Radius of a circle :" + radius + "<br>")
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
var circleRadius = 2 * 3.14
document.write("The circumference is :" + circleRadius * radius + "<br>")
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var circleArea = 3.14 * (radius ^ 2)
document.write("The Area is :" + circleArea + "<br>")

// Q13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
var favSnack= noodles;
// b. Store your current age into a variable.
var currentAge = 19;
// // c. Store a maximum age into a variable.
var maxAge = 22;
// // d. Store an estimated amount per day (as a number).
var perDay = 3;
// // e. Calculate how many would you eat total for the rest of
// // your life.
var restLife = (maxAge - currentAge) * perDay;
document.write("<h1>The lifetime supply calculator</h1>" + "<br>");
document.write("Favourite snack:" + favSnack + "<br>");
document.write("Current age:" + currentAge + "<br>")
document.write("Estimated Maximum age:" + maxAge + "<br>")
document.write("Amounts of snacks per day:" + perDay + "<br>")
document.write("You will need" + restLife + "noodles to last you until the ripe old age of" + maxAge + "<br><br>");