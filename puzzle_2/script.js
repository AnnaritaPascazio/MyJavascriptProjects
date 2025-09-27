/*
Javascript puzzles, real world projects - applying theory
Puzzle #2 - compound interest 
Ask for the number of years, rate of interest, principal amout from user with prompt
convert them all to numbers
calculate the compound interest - display 
*/

let p = prompt("What is the principal amount?");
p = parseFloat(p);
let n = prompt("What are the number of years?");
n = parseInt(n);
let r = prompt("What is the rate of interest?");
r = parseFloat(r);

function compoundInterest(p, n, r) {
    if (p > 0 && n > 0 && r > 0) {
        // Compound interest formula: A = P * (1 + r/100)^n
        let amount = p * Math.pow(1 + r / 100, n);
        return amount.toFixed(2);
    } else {
        alert("You haven't given proper values");
        return '';
    }
}

let h1 = document.getElementById("h1");
h1.innerHTML = compoundInterest(p, n, r);