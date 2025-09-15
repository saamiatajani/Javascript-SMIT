// Q1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

// Q2.Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var mobileModel = prompt("Enter your favorite mobile phone model:");
var length = mobileModel.length;

document.write("My favorite mobile phone model is: " + mobileModel + "<br>");
document.write("Length of string:" + length + "<br><br>");

// Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var word= "Pakistani";
var index= word.indexOf("n");

document.write("String:" + word + "<br>");
document.write("Index of 'n': " + index + "<br><br>");

// Q4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");

document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndex + "<br><br>");

// Q5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var word = "Pakistani";
var char = word.charAt(3);

document.write("String: " + word + "<br>");
document.write("Character at index 3: " + char);

// Q6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "! Welcome!");

// Q7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement:" + newCity);

// Q8 .Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace("and", "&");

document.write("Message: " + message + "<br>");
document.write("After replacement: " + newMessage);

// Q9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var str = "472";
var num = Number(str);

document.write("Value:" + str + "<br>");
document.write("Type:" + "string" + "<br>");
document.write("Value:" + num + "<br>");
document.write("Type:" +"number");

// Q10 .Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput = prompt("Enter any text:");
var upperCaseInput = userInput.toUpperCase();

document.write("User Input:" + userInput + "<br>");
document.write("Upper Case:" + upperCaseInput + "<br>");

// Q11. Write a program that takes user input. Convert and
// show the input in title case.

var userInput = prompt("Enter any text:");
var titleCaseInput = toTitleCase(userInput);

document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCaseInput);

// Q12. Write a program that converts the variable num to
// string.
var num = 35.36 ;
var num = 35.36;
var str = num.toString();
var result =str.replace(".", "");

document.write("Number:" + num + "<br>");
document.write("Result:" + result);

// Q13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var username = prompt("Enter your username:");
var isValid = false;

while (!isValid) {
    isValid = true; 
    for (var i = 0; i < username.length; i++) {
        var charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            isValid = false;
            alert("Invalid username! Please avoid using @ , . !");
            username = prompt("Enter a valid username:");
            break; 
        }
    }
}
document.write("Your valid username is: " + username);

// Q14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to My Bakery. What do you want to order?").toLowerCase();

var isFound = false;

for (let i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        isFound = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}

if (!isFound) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

// Q15 .Write a program to take password as an input from
// user. The password must qualify these requirements:
var password = prompt("Enter your password:");
function isValidPassword(pass) {
    if (pass.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    var firstChar = pass.charCodeAt(0);
    if (firstChar >= 48 && firstCharCode <= 57) {
        alert("Password should not start with a number.");
        return false;
    }
    var hasAlphabet = false;
    var hasNumber = false;
    for (var i = 0; i < pass.length; i++) {
        var code = pass.charCodeAt(i);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            hasAlphabet = true; 
        }
        if (code >= 48 && code <= 57) {
            hasNumber = true;
        }
    }
    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both letters and numbers.");
        return false;
    }
    return true;
}
while (!isValidPassword(password)) {
    password = prompt("Enter a valid password:");
}
document.write("Your valid password is: " + password);

// Q16. Write a program to convert the following string to an
// array using string split method.
// Display the elements of array in your browser.
var university = "University of Karachi";
var arr = university.split(" ");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

// Q17. Write a program to display the last character of a user
// input.
var userInput = prompt("Enter any text:");
var lastChar = userInput.charAt(userInput.length - 1);

document.write("User Input: " + userInput + "<br>");
document.write("Last Character: " + lastChar);

// Q18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// Given string
var str = "The quick brown fox jumps over the lazy dog";
var words = str.split(" ");
var count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}
document.write("Text: The quick brown fox jumps over the lazy dog<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");
