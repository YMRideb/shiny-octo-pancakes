for (i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("Next: Countdown by 3");

for (i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("Next: Print Sequence");

for (i = 4; i > -4; i -= 1.5) {
    console.log(i);
}
console.log("Next: Sigma");
var sum = 0;
for (i=0; i<=100;i++) {
    sum = sum + i;
    console.log(sum);
}

console.log("Next: Factorial");
var product = undefined;
for(i=0;i<=12;i++) {
    product = i*i;
    console.log(product);
}