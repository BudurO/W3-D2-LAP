let num = 20;

if (num % 2 === 0) {
  console.log("it is even");
} else if (num % 1 === 0) {
  console.log("it is odd");
} else {
  console.log("number");
}
console.log("-------------------------");

let Grade = 79;
if (Grade >= 90) {
  console.log("Grade is A");
} else if (Grade >= 80 && Grade >= 89) {
  console.log("Grade is B");
} else if (Grade >= 70 && Grade >= 79) {
  console.log("Grade is C");
} else if (Grade >= 60 && Grade >= 69) {
  console.log("Grade is D");
} else if (Grade >= 59) {
  console.log("Grade is F");
} else {
  console.log("Grade is NAN");
}
console.log("-------------------------");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("-------------------------");

for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("-------------------------");

for (let i = 1; i <= 25; i++) {
  console.log(i);
}
console.log("-------------------------");
let rows = 8;
let res = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    res += " " + j;
  }
  res += "\n";
}
console.log(res);
console.log("-------------------------");

console.log("Fibonacci sequence:");

let numberSeries = 10;
let series0 =0 ;
let series1 =1;
let series;
for (let i = 1; i <=numberSeries; i++){
  console.log(series0);
  series = series0 + series1;
  series0 =series1;
  series1 = series;
}