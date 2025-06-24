//1.arihtmetic operators
let a = 10;
let b = 5;
console.log("=>  Arithmetic operators :");
console.log("a =",a,"b =",b);
let s = a + b;
let d = a - b ;
let pr = a * b ;
let div  = a/b;
let rem = b%a;
let exp = a ** b;
console.log(" sum is :",s);
console.log("difference is :",d);
console.log("product is :",pr);
console.log("divsion :",div);
console.log("a module b :",rem);
console.log("a exponent b is :",exp);
console.log("\n")

//2.Assignment operators
let x = 10;
console.log("=>  Assignment oprators");
console.log("initial x is :",x);
x +=5;
x -=3;
x *=2;
x /=4;
x %=3;
console.log("x after assignmentsm: ",x);
console.log("\n")

//3.Comparison operators
let isEqual = (a == b);
let isStrictEqual = ( a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);
console.log("=>  comparison operators");
console.log("isEqual",isEqual);
console.log("isStrictEqual",isStrictEqual);
console.log("isNotEqual",isNotEqual);
console.log("isStrictNotEqual",isStrictNotEqual);
console.log("isGreaterThan",isGreaterThan);
console.log("isLessThan",isLessThan);
console.log("isGreaterThanOrEqual",isGreaterThanOrEqual);
console.log("isLessThanOrEqual",isLessThanOrEqual);
console.log("\n")
//4.logical operators
let andOperator = (a >0 && b >0);
let orOperator = (a > 0 || b >0);
let notOperator = !a;
console.log("=>  Logical Operators");
console.log("andOperator",andOperator);
console.log("orOperator",orOperator);
console.log("notOperator",notOperator);
console.log("\n")
//5.Bitwise Operators
let bitwiseAnd = a & b;
let bitwiseOr = a | b ;
let bitwiseXor = a ^ b ;
let bitwiseNot = ~a ;
let leftshift =a << 1;
let rightshift =a >> 1;
console.log("=>  Bitwise Operators");
console.log("bitwiseAnd",bitwiseAnd);
console.log("bitwiseOr",bitwiseOr);
console.log("bitwiseXor",bitwiseXor);
console.log("bitwiseNot",bitwiseNot);
console.log("leftshift",leftshift);
console.log("rightshift",rightshift);
console.log("\n")

//6.Ternary Operators
//short if..else statement
let age = 18
let elgibility = (a => 18)? "eligible to vote":"Not eligible to vote";
console.log("=>  Ternary Operator");
console.log("eligibilty :",elgibility);

//7.type of operator
//to know what type of value are we using we use this operator
console.log("=>  Typeof Operator")
variableType = typeof a;
console.log("Typeof operator: ");
console.log("type of variable 'a'is :",variableType)
