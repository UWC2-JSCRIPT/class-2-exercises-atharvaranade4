// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const person = {
  firstName: "Atharva",
  lastName: "Ranade",
  'favorite food': "Indian",

  bestFriend: {
      firstName: "Arjun",
      lastName: "Kapoor",
      'favorite food': "Mexican",
  }
}


// 2. console.log best friend's firstName and your favorite food
console.log(person.bestFriend.firstName);
console.log(person["favorite food"]);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
ttt = [['-','0','X'],['-','X','0'],['X','-', 'X']]
console.table(ttt)


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ttt[0][2] = '0'


// 5. Log the grid to the console.
console.table(ttt)


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const myEmail = 'test @guy.com';

const emailRegex = new RegExp('/\w+([.-_]\w+)*@\w+([.-_]\w+)*\.\w{2,4}/g');
const validEmail = emailRegex.test(myEmail);

console.log(validEmail)

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const currentDate = new Date(assignmentDate);
console.log("current date is", currentDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(currentDate);
dueDate.setDate(currentDate.getDate() + 7);
console.log("dueDate is ", dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

//Get year, month, and day from the date
let year = dueDate.toLocaleString("default", { year: "numeric" });
let month = dueDate.toLocaleString("default", { month: "2-digit" });
let day = dueDate.toLocaleString("default", { day: "2-digit" });
// Generate yyyy-mm-dd date string
const datetime = year + "-" + month + "-" + day;

console.log(datetime)

document.getElementById("date").innerHTML = datetime;

// 10. log this value using console.log

