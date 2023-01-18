// console.log("Hello World")

// alert("Hello World")


//var Sunday = 0; var Monday = 1; var Tuesday = 3; var Wednesday = 4; var Thursday = 5; var Friday = 6;

function myFunction(day) {
    switch (day) {

        case "Sunday":
            return "0";
            break;

        case "Monday":
            return "1";
            break;

        case "Tuesday":
            return "2";
            break;

        case "Wednesday":
            return "3";
            break;

        case "Thursday":
            return "4";
            break;


        case "Friday":
            return "5";
            break;

        case "Saturday":
            return "6";
            break;
        default:
            return "Invalid Weekday";

    }
}

console.log(myFunction('Wednesday'))



// var carModel1 = "volvo";
// var carModel2 = "Kia";
// var carModel3 = "Suzuki";
// function cars(maker) {
//     return carModel3;

// }
// console.log(cars(''))


// let x = 2;
// function number(num) {
//     return x;

// }
// console.log(x);

// //function Expression
// let A = adding(2, 4);
// function adding(H, S) {
//     return H + S;

// }
// console.log(A);

// //const
// const fahrenheit = celSius(5, 9);
// function celSius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

// console.log(fahrenheit);

// //operators
// //Assignment (concate +, +=)
// let txt1 = "Hafsa";
// let txt2 = "Saad";
// let txt3 = txt1 + " " + txt2;

// //boolean
// let xt = "true";
// let xf = "false";
// console.log(txt3, xt);

// //Arrow Function

// let hello = "";

// hello = () => {
//     return "Hello World";
// }
// console.log(hello(''));

// //object literal
// const employeeEmp = { firstName: "Hafsa", lastName: "Saad", age: 20 };
// employeeEmp.firstName + " is " + employeeEmp.age + "years old!";
// console.log(employeeEmp.firstName + " is " + employeeEmp.age + "years old!");

// // //if-else

// let ifx = 0;

// if (ifx == 1) {
//     ifx = "true";

// }

// else {
//     ifx = "false";
// }

// console.log(ifx);

// let val0 = -2; 
// let val1 = 55;

// if(val1 == 55 && val0 == -2){
//     val1 = "false";
// } else if(val1 < 55 || val0 < 1){
//     val0 = "true";
// } else{
//     console.log("nothing");
// }
// console.log(val1 + val0);