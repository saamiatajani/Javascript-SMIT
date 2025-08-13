// Q1. Empty array using literal notation
var studentNamesLiteral = [];

// Q2. Empty array using object notation
var studentNamesObject = new Array();

// Q3. Strings array
var stringArray = ["Apple", "Banana", "Cherry"];

// Q4. Numbers array
var numberArray = [10, 20, 30, 40];

// Q5. Boolean array
var booleanArray = [true, false, true];

// Q6. Mixed array
var mixedArray = ["Hello", 123, true, null];

// Q7. Education qualifications in Pakistan
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Available Education Qualifications in Pakistan:</h3>");
document.write("<div class='edu-box'>");
document.write("<ol>");
for (var i = 0; i < educationQualifications.length; i++) {
    document.write("<li>" + educationQualifications[i] + "</li>");
}
document.write("</ol><br><br>");

//Q8.
var studentNames = ["Ali", "Sara", "Ahmed"];
var studentScores = [400, 450, 300];
var totalMarks = 500;
document.write("<h3>Score of students:</h3>");

document.write("<div class='percent-box'>");
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.write(studentNames[i] + " scored " + studentScores[i] + 
                   " marks. Percentage: " + percentage.toFixed(2) + "%<br><br><br>");}

//Q9
var colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<b>Initial Colors:</b> " + colors.join(", ") + "<br>");

var colorAtStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorAtStart);
document.write("<b>After adding to beginning:</b> " + colors.join(", ") + "<br>");

var colorAtEnd = prompt("Enter a color to add at the end:");
colors.push(colorAtEnd);
document.write("<b>After adding to end:</b> " + colors.join(", ") + "<br>");

colors.unshift("Purple", "Orange");
document.write("<b>After adding two colors at beginning:</b> " + colors.join(", ") + "<br>");

colors.shift();
document.write("<b>After deleting first color:</b> " + colors.join(", ") + "<br>");

colors.pop();
document.write("<b>After deleting last color:</b> " + colors.join(", ") + "<br>");

var indexToAdd = +prompt("Enter index to add a color:");
var colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<b>After adding color at index " + indexToAdd + ":</b> " + colors.join(", ") + "<br>");

var indexToDelete = +prompt("Enter index to delete color(s) from:");
var numToDelete = +prompt("Enter how many colors to delete:");
colors.splice(indexToDelete, numToDelete);
document.write("<b>After deleting " + numToDelete + " color(s) from index " + indexToDelete + ":</b> " + colors.join(", ") + "<br><br>");

//Q10
var scores = [320, 230, 480, 120];
document.write("<div class='score-box'>");
document.write("<b>Scores of Students:</b> " + scores.join(", ") + "<br>");
scores.sort(function(a, b) {
    return a - b; 
});
document.write("<b>Ordered Scores of Students:</b> " + scores.join(", ")+"<br><br><br>");

//Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<div class='cities-box'>");
document.write("<b>Cities List:</b> " + cities.join(", ") + "<br>");
var selectedCities = cities.slice(2, 4); 
document.write("<b>Selected Cities List:</b> " + selectedCities.join(", ") + "<br><br>");

//Q12
var arr = ["This", "is", "my", "cat"];
document.write("<div class='array-box'>");
var singleString = arr.join(" ");
document.write("<b>Array:</b> " + arr + "<br>");
document.write("<b>String:</b> " + singleString + "<br><br>");

//Q13
var queue = [];
document.write("<div class='que-box'>");
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");
document.write("<b>Devices:</b> " + queue.join(", ") + "<br><br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br>");
document.write("<b>Out:</b> " + queue.shift() + "<br><br>");

//Q14
var queue = [];
document.write("<div class='reverse-box'>");
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");
document.write("<b>Devices:</b> " + queue.join(", ") + "<br><br>");
document.write("<b>Out:</b> " + queue.pop() + "<br>");
document.write("<b>Out:</b> " + queue.pop() + "<br>");
document.write("<b>Out:</b> " + queue.pop() + "<br>");
document.write("<b>Out:</b> " + queue.pop() + "<br><br>");

//Q15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");