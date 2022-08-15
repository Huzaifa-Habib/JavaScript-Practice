
                                // Alert Chap No.1

// alert("This is start of java.");
// window.alert("This is start of java.");


                                // Variables for Strings Chap No.2

// var myName="Huzaifa Habib"
// console.log(myName);

// Changing Value of Declared Variable===============================================

// myName = "Ali"
// console.log(myName);


// First declare variable than assign it value==================================

// var country;
// country = "Pakistan"
// console.log(country);

// Displaying alert using variable not string==========================
// alert(country);


                                // Variables for Numbers Chap No.3

//  var age = 19;  // Now age means 19 
//  age + 10;     // Now we understand that age has value of 19 so its mean it can add also to any no.
//  console.log(age) // Now if we check console it always show 10 the actual value of age because above-
                // maths expression doesn't initiallize in variable and in console we calling age

// var sum =  age + 10; // This is the correct way to do addition
// console.log(sum)  // Now it's always show 29 which is the sum of above maths expression

// var age2 = 20
// var totalSum = age + age2; //This is also add the values of these variables if its numbers
// console.log(totalSum);  //Result is 39 and age is defined above which has value of 19

// var number = "20";
// var addNumbers = 10 + number;  //This won't work because the number variable has value of
                               //string and javaScript don't do addition aginst strings and numbers

// console.log(addNumbers) //If we check result it might looks like this = 1020

// alert (10); //You can also show numbers in alert box and JavaScript automatically converts it in string
// alert(age); //You can also show numbers in alert box using variable and it converts into string



                                //  Variable Names Legal and Illegal Chap No.4


// You can declare variable like this (Legal Variables)==============================

// user;
// userName; //Always camelCase
// userName1;
// userLastName;

//Always remember dont use numbers at start of variable name and not use javaScript keywords=======
// alert; //Wrong
// var;   //Wrong



                       // Math expressions:Familiar operators Chap No.5

// var justNumber = 2 + 2;  //It's shows the sum 4 

// alert(2 + 2); //It's also shows the sum 4 but in string "4"
// var modulus = 10 % 3; // It doesn't give you the result of dividing one number by another.
//                       // It gives you the remainder when the division is executed.
// console.log(modulus)

// var even = 9 % 3; //If one number divides evenly into another, the modulus operation returns 0.
// console.log(even)  //The answer is 0

// +,-,/,*/%  // Maths operators





                                //Math expressions:Unfamiliar operators Chap No.6

// num++ // It's short way of writing num = num + 1.
// num-- // It's short way of writing num = num - 1.

// var newNum = 1;
// var totalNum = newNum++; //By putting plus after initiallize variable its repeats the original value
//                         // than start increment
// console.log(totalNum); //Its shows the result 1 
// totalNum = newNum;    //Just like this above its repeat its value now it starts increment
// console.log(totalNum); //The Result is 2

// var decrementNum = newNum--; //Now Also follows the same rule as increment.It also repeat value than
//                             //start decrement
// console.log(decrementNum);  //The result is 1

// decrementNum = newNum--;
// console.log(decrementNum); //The result is 0 after decrement

// var firstIncrement = ++newNum; //This is the method of increment first without repeating original value
// console.log(firstIncrement); //The result is 2 and the same method also follows the decrement 



                                //Math expressions:Eliminating ambiguity Chap No.7

// var totalCost = 1 + 3 * 4; //JavaScript also follows the rule of algebra which is "DMAS".Following 
//                           //expression add first than multiply it.
// console.log(totalCost); //The result is 16

// var totalCost = 1 + (3 * 4); //Now according to the algebra it always solve the round brackets first
// console.log(totalCost); //The result is 13

// var resultOfComputation = (2 * 4) * 4 + 2; //According to the order it solve brackets first than 
// //multiply by 4 and add 2 
// console.log(resultOfComputation); //Result is 34

// resultOfComputation = ((2 * 4) * 4) + 2;
// console.log(resultOfComputation);  //Result is 34

// resultOfComputation = (2 * 4) * (4 + 2);
// console.log(resultOfComputation); //Result is 48 bcz it solve bracket first than muliply the result of both brackets


                                // Concatenating text strings Chap No.8

// var userName = "Huzaifa"                                
// var message = "Thanks, ";
// var banger = "!";
// var concatenateMess = message + userName + banger;
// alert(message + userName + banger); //It concatenate all variable values which is string;
// alert("Thanks " + userName) //Its also concatenate string "Thanks" with userName value which is Huzaifa
// alert (concatenateMess); //It's also show concatenate values

// alert("2 plus 2 equals " + 2 + 2); //If you mix strings and numbers .JavaScript automatically converts the numbers to strings, and displays the message "2
//plus 2 equals 22".


                                        // Prompts Chap No.9
// var spec = prompt("Your species?", "human"); //Your species is question and human is the default answer

// Working with variales=============================================
// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// var numberOfCats = prompt("How many cats?");
// var tooManyCats = numberOfCats + 1;
// console.log(tooManyCats) //Any information we enter in prompt box its always comes back as string even
//if its numbers also.

//Important=====================================================

//If the user enters nothing and clicks OK, the variable is assigned an empty string: ""
//If the user clicks Cancel, the variable is assigned a special value, null.
//window.prompt also works


                                // If Statements Chap No.10

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//     alert("Correct!");
// } 
// The above statement ask the user question and if the user answers matches the condition if which
// is Vatican it displays the alert and also remembers that its shows the alert when the answer matches
// exact as condition because javaScript is case-sensitive.


                                    //Comparison Operators Chap No.11

// Legal ways to compare=================================================
// if (fullName === "Mark" + " " + "Myers") {
// if (fullName === firstName + " " + "Myers") {
// if (fullName === firstName + " " + "Myers") {
// if (fullName === "firstName + " " + lastName) {
// if (totalCost === 81.50 + 135) {
// if (totalCost === materialsCost + 135) {
// if (totalCost === materialsCost + laborCost) {
// if (x + y === a - b) {

// "Rose" !== "rose". //It's not equal operator,here we use it bcz javaScript is case-sensitive

//Here are 4 more comparison operators, usually used to compare numbers.
// if (1 > 0) { //Its true condition
// if (0 < 1) { //Its true condition
// if (1 >= 0) { //Its true condition
// if (1 >= 1) { //Its true condition
// if (0 <= 1) { //Its true condition
// if (1 <= 1) { //Its true condition


                            // If Else and Else If statements Chap No.12

// var x = prompt("Where does the Pope live?");

// if (x === "Vatican") { //This condition runs when users answer match
// alert("Correct!");
// }

// if (x !== "Vatican") {  //This condition runs when users answer do not match
// alert("Wrong answer");
// }


// var correctAnswer = "Vatican";
// if (x === correctAnswer) {
// alert("Correct!");
// }

// else { 
// userIQ = "problematic";
// alert("Incorrect");
// }

// On above statement we don't use if statement we use else which means if the answer doesn' match
// else condition runs

//else if is used if all tests above have failed and you want to test another condition.

// var correctAnswer = "Vatican";
//  if (x === correctAnswer) {
//     alert("Correct!");
// }

// else if (x === "Rome") {
//     alert("Incorrect but close");
// }
// Else if condition give us multiple conditions that if above condition fail check 2nd if 2nd fail
// check third and so on......

// else {
// alert("Incorrect");
// }
//If all else if condition fail at last run else condition, else condition run if all above
// condition have failed.

// Important===================================================
//In a series of if tests, JavaScript stops testing whenever a condition tests true.


                                //Testing sets of conditions Chap No.13

// &&; //It's mean "and" operator
// ||; //It's mean "or" operator    

// if (weight > 300 && time < 6  && gender === "male") {
//      alert("Come to our tryout!");
// }

//  else {
//      alert("Come to our cookout!");
// }

// We use and operator where we want to have multiple condition true the above statement has to have
// both conditions true 

// if (SAT > avg || GPA > 2.5 || sport === "football") {
//     alert("Welcome to Bubba State!");
// }

// else {
//     alert("Have you looked into appliance repair?");
// }

// Now with or operator there is only one condition is need to be true not like and operator where we
// all the have to be true.

// if (age > 65 || age < 21 && res === "U.S.") {  //This condition has to have the resident of U.S. to be
// true wherever age has to be over 65 and under 21.If the age is over 65 and resident U.S. the
//condition becomes true and if age is under 21 and resident U.S. the also becomes true.

// if (age > 65 || (age < 21 && res === "U.S.")) {  //In the following code, if the subject is 
// over 65 and living anywhere, it's a pass. Or, if the subject is under 21 and living in the U.S.,
// it's a pass.


// if ((age > 65 || age < 21) && res === "U.S.") {  // In the following code, if the subject is over
//65 and a U.S. resident, it's a pass. Or, if the subject is under 21 and a U.S. resident, it's a pass.



                                    // If Statements Nested Chap No.14


// if (c === d) {
//  if (x === y) {
//  g = h;
//  }
//  else if (a === b) {
//  g = h;
//  }
//  else {
//  e = f;
//  }
// }

//  else {
//  e = f;
//  }   
 
// The above statement is nested if else which If the condition tested by the top-level if,that c
//has the same value as d is false, none of the blocks nested inside executes.The opening curly
//bracket on line 293 and the closing curly bracket on line 303 enclose all the nested code, telling
//JavaScript that everything inside is second-level.For readability, a lower level is indented 2 
//spaces beyond the level above it.



                                        // Arrays Chap No.15

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

//The above is cities array.Arrays always start with index[0].The above array have 5 indexes.The
//array values are known as elements.The above array have 6 elements.

// console.log(cities[5]); //This gives the element 1 of cities array which have index 0.
// console.log(cities[6]); //If we give wrong index no. which doesn't consist of any value its gives
//"undefined".

// var numArray = [1,2,3,4,5,6,7,8]; //The number array
// var mixArray = [1,3,4,"string",true]; //The mixed array consist of no.,string,and boolean.

// Important Notes==============================================================

//The first item always has an index of 0, not 1. This means that if the last item in the list
//has an index of 9, there are 10 items in the list.

//Coders often prefer to make array names plural cities instead of city, for example since an 
//array is a list of things.



                            // Arrays:Adding and removing elements Chap No.16

//Assigining values to declared array===================================
// var pets = [];
// pets.pop(); //If we pop empty array it returns empty array
// console.log(pets); //It gives empty array

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[6] = "snake";
// pets[2] = "lion"; //Its update the value bird to lion


// console.log(pets); //It gives array with 3 elements "dog","cat","bird"
// console.log(pets[5]); //It gives undeifined

// Pop; //Deletes the last element from an array
// Push; //Adds elements from the end of an array

// pets.pop();
// console.log(pets) //Now its remove last index which is lizard from an pets array.Now the last element
//of pets array is bird if we pop again it removes bird and so on.....
// pets.pop();
// console.log(pets); //Just like this, now cats array have two elements

// pets.push("crocodile" , "fish",1); //Its add elements from the end of an array
// console.log(pets);


                    // Arrays:Removing, inserting,and extracting elements Chap No.17

// Shift; //Shift method to remove an element from the beginning of an array
// Unshift; //Unshift method to add one or more elements to the beginning of an array
// Splice; // Splice method to insert one or more elements anywhere in an array,while
//optionally removing one or more elements that come after it.
// Slice;  // Slice method to copy one or more consecutive elements in any position and put
//them into a new array.  

// var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
// cities.shift();
// console.log(cities) //It removes "Atlanta" 

// cities.unshift("Karachi","Lahore");
// console.log(cities); //Its add from the start of an array element which means from index[0]

// cities.splice(2,1,"Islamabad"); //The first number define the index at which we want to add the second
//number define the length at which we want to remove elements.
// console.log(cities);//This add the "Islamabad" at index 2 removing and no.1 reperesent that it removes
//one element after that.

// cities.splice(2,0,"Lahore") //It add element at index[2] without removing any.
// console.log(cities);

// var noCities = cities.slice(2, 4); //We give 2 bcz we want index[2] element and we want index[3] element
//so we give 4 bcz slice always minus 1 so it give index[3] element
// console.log(noCities); //Result is "Chicago","Denver"



                                    // For Loops Chap No.18
// var cityToCheck=prompt("Enter cleanest cities")
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// for (var i = 0; i <= 4; i++) {
//      if (cityToCheck === cleanestCities[i]) {
//         alert("It's one of the cleanest cities");
//      }
// }

// The above for loop start at 0 index and while doing increment it run till index 4 and check if
//condition that user answer mathches cleanest cities.



                //For loops:Flags, Booleans, array length,and loopus interruptus Chap No.19

// var matchFound = false;
// for (var i = 0; i <= 4; i++){

//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }

// if (matchFound === false) {
//      alert("It's not on the list");
// }

// True and False without quotation are javaScript predeifined booleans and we use break keyword to
//break the loop when it found the city for example if city found at index 2 the loop break there.


// var numElements = cleanestCities.length;
// var matchFound = false;
//  for (var i = 0; i < numElements; i++) {
//     if (cityToCheck === cleanestCities[i]) {
//         matchFound = true;
//         alert("It's one of the cleanest cities");
//         break;
//     }
// }

// if (matchFound === false) {
//     alert("It's not on the list");
// }

// Now we dont have to count array elements and give in the loop.JavaScript come with ".length" keyword
//which gives us the length of array ,now above loop run till "i" is less than array length.


                                //For loops nested Chap No.20

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         fullNames.push(firstNames[i] + lastNames[j]);
//     }

// }
// console.log(fullNames)

// The outer loop run and when counter comes at index 0 the inner loop run and complete its cycle
//than outer loop run and counter comes at 1 than inner loop run and complete its cycle and this process
//goes on until the outer loop end and the final result concatenate both loop values.

// Important Notes==========================================================================
//You can have as many levels of nesting as you like.
//A nested loop is indented 2 spaces beyond its outer loop.


                            // Changing Case Chap No.21

// var cityToCheck = prompt("Enter your city");
 // cityToCheck = cityToCheck.toLowerCase();
// cityToCheck = cityToCheck.toUpperCase(); //it converts user answer to uppercase

// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

// for (var i = 0; i <= 4; i++) {
//      if (cityToCheck === cleanestCities[i]) {
//          alert("It's one of the cleanest cities");
//      }
// }

//Now at line 480 we use ".toLowerCase()" which helps us to lowercase the answer of user.For Example
//if user enter "CheYenne" it always convert it to "cheyenne" which matches the if condition.




                        //Strings:Measuring length and extracting parts Chap No.22

//A string is indexed like an array. Only, instead of each index number referring to an element,
// it refers to a character.

// var city = "boston"
// var someChars = city.slice(2); //Its start copying at index[2] run till the end bcz there is no end 
//index define
// console.log(someChars) //The result is "ston"
// var city = prompt("Enter City")
// var firstChar = city.slice(0, 1); //It comes up with first index[0]
// var otherChars = city.slice(1); //It comes up with characters after index[0] till end
// firstChar = firstChar.toUpperCase(); //It comes up with first index uppercase
// otherChars = otherChars.toLowerCase(); ///It comes up with characters after index[0] till end lowerCase
// var cappedCity = firstChar + otherChars;

// console.log(cappedCity); //It gives the result capitallize however user write


// var month = prompt("Enter a month");
// var charsInMonth = month.length;

// if (charsInMonth > 3) {
//      var monthAbbrev = month.slice(0, 3);
// }
//Whatever user enter it sliced the result and gives us three character and if the user enter 2 characters
//word it return undefined.
// console.log(monthAbbrev)//Suppose user enter "januaury" it gives us "jan"

// var str = prompt("Enter some text");
// var numChars = str.length;

// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === " ") {
//         alert("No double spaces!");
//     break;
//     }
// }



                                    //Strings:Finding segments Chap No.23
// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say it should be the Second World War."
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//     console.log(text)
// }

// The above loop runs till it found 12 indexed text which is "World War II" and line 542 run the loop
//again and replacing it with " "the Second World War"".

// var firstChar = text.indexOf("World War II");
// console.log(firstChar);

// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);

//      console.log(text.slice(firstChar + 12))
//     console.log(text.slice(0, firstChar));
//      console.log(text);
// }

//First we get the indexOf "World War II" and add the "the Second World War" instead of 
//"World War II"


// var text = "To be or not to be.";
// var segIndex = text.lastIndexOf("be");
// console.log(segIndex) //Its give the index[16].It always give last however if the word declared before
//it gives it last location. 



                        // Strings:Finding a character at a location Chap No.24
// var firstName = "Huzaifa"
// var firstChar = firstName.charAt(); //You can also specify it by giving index number inside brackets
// console.log(firstChar) //It gives the first character of first name that is "H"

// var lastChar = firstName.charAt(firstName.length - 1); //It gives us the last character of string
// console.log(lastChar);

// var text = "The New Yorker magazine doesn't allow the phrase World War II !.  They say it should be the Second World War."

// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//          alert("Exclamation point found!");
//      break;
//      }
// }

//Important Note====================================================================
//The indexOf method can only identify the character at a particular location. It can't
//change the character at a location.




                                // Strings:Replacing characters Chap No.25

//There are three ways for replacing characters
//1. Using slice
//2. Using indexof() method
//3. Using replace method

// var text = "The New Yorker magazine doesn't allow the phrase World War II.  They say World War II it should be World War II the Second World War."
// var newText = text.replace("World War II", "the Second World War");
//The first string inside the parentheses is the segment to be replaced. The second string is
//the segment to be inserted. 
// console.log(newText);

//For changing globally==============================================
// var newText = text.replace(/World War II/g, "the Second World War");
//In a global replace, you enclose the segment to be replaced by slashes instead of
//quotation marks, and follow the closing slash with "g" for "global." The segment to be inserted
//is enclosed by quotation marks
// console.log(newText);



                                //Rounding numbers Chap No.26

// var scoreAvg = Math.round(9.5678437); //Its follows the same rule as we do in airthmatic.It always 
//use capital "M" not "math"
// console.log(scoreAvg);

// var scoreAvg = Math.ceil(3.600001);  //It just plus one the number and ignore the value after decimal
// console.log(scoreAvg); //The result is 4

// var scoreAvg = Math.floor(3.299999); //It just ignore the after decimal numbers and brings back the
//number before decimal.
// console.log(scoreAvg); //The result is 3




                                // Generating random numbers Chap No.27

// var bigDecimal = Math.random(); //Generate 16-place decimal
// console.log(bigDecimal)

// var improvedNum = (bigDecimal * 7) + 1; //Now it give the number before decimal till seven or seven
// console.log(improvedNum) //The result may be 7. , 6. but not greater than 7

// var numberOfStars = Math.floor(improvedNum); //Now it rounds the number
// console.log(numberOfStars) //The result may be 1-7




                    // Converting strings to integers and decimals Chap No.28

//You caneven ask JavaScript to multiply, divide, or subtract using nothing but strings as terms,
//and JavaScript, interpreting your intentions correctly, does the math. The come with addition instead
//of add it concatenate two strings.

// var myInteger = parseInt("3" + 6); //If you write this it give you result
// console.log(myInteger) //The result is 36 the string "3" converted to number 3.

// var currentAge = prompt("Enter your age."); //The value comes with the prompt is always string
// var qualifyingAge = parseInt(currentAge) + 1
// console.log(qualifyingAge); //Now it gives you result with plus 1 with the value user enter

// var myInteger = parseInt("1.5999"); //While converting into numbers it ignore the after decimal value
// console.log(myInteger); //The result is 1

// var myFractional = parseFloat("1.9999"); //It doesn't ignore any numbers,it convert whole number
// console.log(myFractional); //The result is 1.9999




                    // Converting strings to numbers, numbers to strings Chap No.29
                    
//The following code converts the string "24" to the number 24.=========================
// var integerString = "24"
// var num = Number(integerString); //It do same with the floating point number,convert whole value
// console.log(num);

//Converting a number to a string =====================================================
// var numberAsNumber = 124;
// var numberAsString = numberAsNumber.toString();
// var result = typeof numberAsString //With this you can check it convert the number to string
// console.log(result); //Result is string




                            // Controlling the length of decimals Chap No.30
                        
// var total =  10.59675;
// var prettyTotal = total.toFixed(1); //It gives us the option how many places we want to round-up
// console.log(prettyTotal); //The result is 10.5 bcz of 1 in brackets

// var num = 123.4345
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") { //Check if converted string have last character 5
//     str = str.slice(0, str.length - 1) + "6"; //If it found 5 than change it to 6
// }

// num = Number(str); //Convert string to number
// var prettyNum = num.toFixed(2); //Round up to 2 decimal places
// console.log(prettyNum); //The result is 123.43




                            // Getting the current date and time Chap No.31

// var rightNow = new Date(); // Get the full date with month,date,year,day,time,and time zone
// console.log(rightNow); 

// var theDay = rightNow.getDay(); //Gives the current day but in number and day start with "Sunday" and
// //have index number 0
// console.log(theDay);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay]; //It get the number and matches it with the value of same index
//number in array for e.g it get 6 so the value on index 6 in array it take.
// console.log(nameOfToday);




                         //Extracting parts of the date and time Chap No.32

// var d = new Date();
// var currentMonth = d.getMonth();//It also give you number of month starting from zero
// console.log(currentMonth); //Now current month is august it give the result 6 if we start from zero(0)

// var dayOfMonth = d.getDate(); //Gives you a number for the day of the month.
// console.log(dayOfMonth);

// var currYr = d.getFullYear(); //Gives you a 4-digit number for the year
// console.log(currYr);

// var currentHrs = d.getHours();//Gives you a number from 0 through 23 corresponding to midnight
// //through 11p.m.
// console.log(currentHrs);

// var currMins = d.getMinutes(); // Gives you a number from 0 through 59.
// console.log(currMins); 

// var currSecs = d.getSeconds(); // Gives you a number from 0 through 59.
// console.log(currSecs);

// var currMills = d.getMilliseconds(); //Gives you a number from 0 through 999
// console.log(currMills);

// var millsSince = d.getTime(); //gives you the number of milliseconds that have elapsed since
//midnight, Jan. 1,1970.
// console.log(millsSince);





                                 // Specifying a date and time Chap No.33

// var today = new Date();
// var doomsday = new Date("June 30, 2035"); //This is the correct format of specifying the date.
// var msToday = today.getTime(); //Get miliseconds since Jan.1,1970 till now
// var msDoomsday = doomsday.getTime(); //Get miliseconds since Jan.1,1970 till specified date
// var msDiff = msDoomsday - msToday; // Calculate the difference
// var dDiff = msDiff / (1000 * 60 * 60 * 24); //For converting miliseconds into days
// dDiff = Math.floor(dDiff); //Get the whole number of days
// console.log(dDiff); //It gives you the days have passed




                            // Changing elements of a date and time Chap No.34

// var d = new Date();
// d.setFullYear(2001); //It set the year 2001 without changin other elements
// console.log(d);

//The same follows with others set methods





                                // Functions Chap No.35

//A function is a block of JavaScript that robotically does the same thing again and again,
//whenever you invoke its name.

// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//     alert("Current time: "+ theHr + ":" + theMin);

// }
//Now i dont have to write this again and again i just call the function name an it execute the code
//we can also call boiler plates.

// tellTime(); //This is how you call the function.






                                 //Functions:Passing them data Chap No.36

// function greetUser() {
//     alert("Hello, there.");
// }
// Instead of writing greetUser(); you write...
// greetUser("Hello, there."); //Now, instead of just calling the function, you're calling it
//and passing data to it. The//string inside the parentheses, i.e. the data you're passing,
// is called an argument.

// function greetUser(greeting) { 
//     alert(greeting);
// }

//The parentheses of the function definition now contain a variable, greeting. A variable 
//inside the parentheses in a function statement is known as a parameter.
    

// var month = "March";
// showMessage(month, "'s winner number is ", 23);

// function showMessage(m, string, num){ //You can also pass three parameters
//  alert(m + string + num);
// }





                        //Functions:Passing data back from them Chap No.37

// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }

//      else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }

//     else {
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }

//  return orderTot;
//  }

//Thefunction returns the value held in orderTot to the calling code (line 12). It passes
// data back.



                               

                            //Functions:Local vs. global variables Chap No.38


// var two; //It is global variable and can use anywhere in main code

// function local(){
//     var one; //THe variable declared inside the function known as local variable.It can only use
    //within block of code
// }





                        //Switch statements:How to start them Chap No.39

// var dayOfWk = prompt("Enter day With short form");

// switch(dayOfWk) {
//  case "Sat" :
//  alert("Whoopee");
//  break;
//  case "Sun" :
//  alert("Whoopee");
//  break; //If we don't break line it continues switching
//  case "Fri" :
//  alert("TGIF!");
//  break;
//  default : //Default works like else 
//  alert("Shoot me now!");
//  }





                                    // While loops Chap No.41 

// var i = 0;

// while (i <= 3) {
//     alert(i);
//     i++;
// }

//A while loop does the same thing as for loop, but it's organized differently
//First initiallize variable
//Parentheses enclose the loop limiter.
//Curly brackets enclose the code that executes.
//The code that executes is indented 2 spaces.





                                //Do...while loops Chap No.42

// var i = 0;

// do {
//     alert(i);
//     i++;
// } while (i <= 3);

//A do...while loop accomplishes almost the same task as a while loop.But do while loop run always
//one time than match the condition .





                                    // Placing scripts Chap No.43

// <script>
//  function sayHi() {
//  alert("Hello world!");
//  }
//  function sayBye() {
//  alert("Buh-bye!");
//  }
//  </script>

//You can have different sections of code scattered all over your HTML file if you want.
// But each section has to be enclosed between the <script> and </script> tags.

//<script src="whatever.js"></script> //You can link external file also.







                                // Events: link Chap No.45

//<a href="#" onClick="alert('Hi');">Click</a> 
//On click is event handler that perform the action when item been clicked.The above code displays
//alert on click of the link.

//<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> //It doesn't change the link just
//execute the javaScript.

//<a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>
// function popup(message) {
//      alert(message);
// }

//YOu can also use it by calling function.When the user clicks the link, the event-handler
//calls the function, passing the argument'Hi' to it. The function displays an alert saying 'Hi'.





                                    // Events: mouse Chap No.47


//<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"> 
//This event handler works when we take mouse over the image and it change the image.

//<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"
//onMouseout="src='before-pic.jpg'"></img>

//On mouse out is event handler that perform the action we take mouse out from the image width height


    



                                    // Events: fields Chap No.48

//Email:<br>
//<input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"
//onBlur="this.style.backgroundColor='white';">

//On focus change the background color to white when user click the field and on blur change the 
//background color to white when the user click out of field





                                // Reading field values Chap No.49

// <form onSubmit="checkAddress('email');">
// Email:
// <input type="text" id="email">
// <input type="submit" value="Submit">
// </form>

//Now, when the user clicks the submit button, the function checkAddress executes. Note
// that, even though the action is a click on the submit button, the onSubmit event handler is in
// the form tag, not in the submit button tag. That's because the submission is an event that
// applies to the whole form, not the submit button


// Here's where things get interesting. When the form is submitted, the function
// checkAddress looks to see if the user has entered anything in the email field. If not, the
// function displays an alert reminding the user that the email address is required.

// function checkAddress(fieldId) {
//      if (document.getElementById(fieldId).value === "") {
//      alert("Email address required.");
//      }
//  }

 //When user submit the form If there's no value in the email field, an alert 
 // telling the user that an email address is required.

//  The keyword document, followed by...
// 2. a dot, followed by...
// 3. the keyword getElementById, followed by...
// 4. the parameter, in parens, received from the calling code, fieldId,followed by...
// 5. another dot, followed by...
// 6. the keyword value








                                    // Setting field values Chap No.50
{/* <form>
ZIP:<br>
<input type="text" id="zip" onBlur="fillCity();"><br>
City:<br>
<input type="text" id="city">
</form */}

//We use on blur bcz it execute not on submit but when user take out its mouse from it



// function fillCity() {
//  var cityName;
//  var zipEntered = document.getElementById("zip").value;
//  switch (zipEntered) {
//  case "60608" :
//  cityName = "Chicago";
//  break;
//  case "68114" :
//  cityName = "Omaha";
//  break;
//  case "53212" :
//  cityName = "Milwaukee";
//  }
//  document.getElementById("city").value = cityName;
//  }

 //In this case, the function assigns the value found in the ZIP field to a variable. Then, using
//a switch statement, it matches the ZIP to a city name and assigns that name to a second
//variable. Then, using the variable, it places the city name in the city field.







                         //Reading and setting paragraph text Chap No.51

// <p id="slowLoris">
// Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
// <a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a>
// </p>

// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates whichmake up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety ofdistinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
//  }

 //When we click on click fo more link it expand and replace original text to this text






                                // Manipulating images and text Chap No.52


{/* <img src="blobfish.jpg" id="ugly" onClick="makeInvisible();"></img> */}

// You have a CSS class for invisibility.=====================================
// .hidden {display:none;}


// function makeInvisible() {
//      document.getElementById("ugly").className = "hidden";
// }

//When the function is called, it assigns the "hidden" class to the element with the id "ugly."
//The image disappears

//Important Notes==========================================================
//document.getElementById(theElementId).value (for form fields) 
//document.getElementById(theElementId).innerHTML (for paragraphs, divs, and
//other HTML elements).

//For multiple classes ========================================================
// function makeBig() {
//      document.getElementById("p1").className += " big";
// }






                                    //Swapping images Chap No.53


{/* <img src="before-pic.jpg" id="before" onMouseover="swapPic();"></img> */}

//By using the same mouse event we use before to change image when we take mouse over but here we
//do it with the function

// function swapPic() {
//      document.getElementById("before").src = "after-pic.jpg";
// }

//document get the images tag whoose id is "before" and when we click over that image it change with
//"After-pic"


{/* <img src="before-pic.jpg" id="before" onMouseover="swapPic(id,'after-pic.jpg');"> */}

    
// function swapPic(eId, newPic) {
//     document.getElementById(eId).src = newPic;
// }






                       // Swapping images and setting classes Chap No.54

//A more common way to code the function is to break it into two steps, first assigning
//document.getElementById("before") to a variable. Then you combine that variable with
//.src. Let's call it the "verbose approach".

// function swapPic() {
//      var pic = document.getElementById("before");
//      pic.src = "after-pic.jpg";
//  }


//  function getAddress() {
//      var link = document.getElementById("link1");
//      var address = link.href;
//  }

 //Now whatever the href of that link is now store in address variable





                                    // Setting styles Chap No.55


//There's another way to specify style properties other than .className.With this style method it
// doesn't remove any other styles assigned to the element, whether those styles are specified in 
// css or inline.

//document.getElementById("pic99").style.cssFloat = "left";
//The statement float the imgae to the left

// document.getElementById("div9").style.visibility = "hidden";
//This makes the div9 visibility hidden

// var m = document.getElementById("mainPic").style.margin;
//It only give you margin if it specified in inline styling, if it specified in other css file or
//in style tag it doesn't show.
// console.log(m); //It show 20px which is margin specified in inline styling

// var m = document.getComputedStyle("mainPic").margin;
//The following statement gives you all the style properties, specified in both css
//and inline, but it has a limitation. Versions of Internet Explorer before Version 9 don't support
//it.
// console.log(m)





                             // Target all elements by tag name Chap No.56

// var par = document.getElementsByTagName("p");

//Now any paragraphs in the document are store in par variable.
// Remember:
// If there are 2 paragraphs in the document so it store in array like elements in par variable
//For example: par[0],par[1].Now you can also style or put any more text init just simply call its
//index number.

//Here's a loop that assigns a font family to all the paragraphs=============================

// for (var i = 0; i < par.length; i++) {
//      par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }





                            // Target some elements by tag name Chap No.57

// If you want target specific element of some specifiv div you can do this:

// var e = document.getElementByID("rules");
//Suppose Id "rules " assign to some and we want to target its paragraphs.
var paragraphs = e.getElementsByTagName("p");
//Store all paragraphs in that div to "paragraphs " variable

//We can also target td of some specific table
    





                                        // The DOM Chap No.58


//Document Object Model, the DOM. The DOM is an organization chart, created
//automatically by the browser when your web page loads, for the whole web page. All the
//things on your web page,the tags, the text blocks, the images, the links, the tables, the style
//attributes, and more,have spots on this organization chart.

//Levels pf DOM:

//1st Level:document
//2nd level:<html>
//3rd level:<head>,<body>

//These are the most important and fixed levels of "DOM" that every website inherited it.The <head> and
//<body> tag have same level which is "3".


// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <p>
// 5th level There's not much to this.
// </p>
// </body>
// </html>

//Now here that three level are constant and always same in every website but 4th,5th and so on levels
//might be differnt in every webite for e.g here <title> tag have level "4" in some websites it can be
//link to any external file and there's same to the 4th level which is <p> tag ,it can be <h1> in some
//websites.Now here the text of <p> tag have 5th level.



// 1st level: document
// 2nd level: <html>
// 3rd level: <head>
// 4th level: <title>
// 5th level: Simple document
// </title>
// </head>
// 3rd level <body>
// 4th level <div>
// 5th level <p>
// 6th level There's not much to this.
// </p>
// 5th level <p>
// 6th level Nor to this.
// </p>
// </div>
// </body>
// </html>


//Now we check the level with nodes.The above code have document node,html node,head and body nodes,
//title node ,div node, 2 paragraphs node, and three text nodes one for title and two for paragraphs

//Types of nodes in above code=====================================================

//1.document node
//2.element nodes
//3.text nodes

//document node is first level,element nodes are <p>,<div>,<head>,<title>,<body>,<html> and text nodes
//are the string of elements





















    



























































































































                



