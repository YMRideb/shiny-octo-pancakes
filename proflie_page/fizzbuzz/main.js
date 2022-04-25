for (let n = 1; n <= 100; n +=1) {
    let myStr = "";
    if (n % 3 == 0) {
       myStr += "Fizz";
    } if (n % 5 == 0) {
       myStr += "Buzz";
    } console.log(myStr || n);
 }
