console.log("connected");
var y = 40;
// number, string, boleen, array, undifiend null, object
var fullName = "Gili menahem";
var x = 30; // number
var array = [0, 1, 2];
array.push(3);
console.log(array);
// math opreators
// + - * / **
var salary = 5000;
var tax = salary * 0.1;
// tax++;
// logic opreator -- if && ||
// compertor opreators < > ==, ===, >=, <=
// if(x > y) console.log("x is bigger")
//     true
// assiments opreators  הקצאה
// = += -= ++ --
tax = tax - 1;
tax--;
console.log(tax);
// conditions
if (x > y) {
    console.log("x is bigger");
}
else if (x < y) {
    console.log("x is smaller");
}
else {
    console.log("try again");
}
var noValue; //undefined
// turthy and falsy values
// flasy values: 0, '', undefined, null, NaN (false)
// turthy: number, array, string, [], {} ... (true)
var connectedUsers = [
    { name: "gili", age: 35 },
    { name: "Yaser", age: 29 },
    { name: "hadar", age: 26 },
];
if (connectedUsers.length > 0) {
    console.log("this is the users:");
    console.log(connectedUsers);
    console.log(connectedUsers[0].name);
    connectedUsers[0].age++;
}
else {
    console.log("no users found from database");
}
// x = 30
// soft Vs strict == ===
// strict checks type as well
// console.log(x == "30"); // true
//  ternery  opreator
//condition ? (true) Do This : (false) do this
connectedUsers.length > 0 ? console.log("users exist") : console.log("no users found from database");
// task                  form     prompt
// עליכם ליצור מחשבון מס, שיקבל מהיוזר (פורמפט, או פורם) משכורת, ויחשב לפי 
// מדרגות מס כמה מס אמור לרדת, עליו להדפיס על המסך את המשכורת נטו, וכמה מס ירד.
//let tax = 0;
// 6,450 > salary == X 10% 
//tak = X
//6,451 < salary < 9,240 == 2489 14% 
// tax = tax + 
//
//
// 55,271 < salary == 64,729 50%
function handleCalc(event) {
    event.preventDefault();
    var input = document.querySelector(".salary");
    console.log(input);
    //@ts-ignore
    var salary = input.value;
    console.log(salary);
}
function calculate() {
    var salary = 7000;
    var tax = 0;
    if (salary < 6450) { //10%
        tax = salary * 0.1;
    }
    else if (6451 < salary && salary < 9270) {
        var sum = salary - 6451;
    }
}