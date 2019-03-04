//Challenge 1
function fizzBuzz(a) {
    if((a % 3 == 0) && (a % 5 == 0)) {
        return "Fizz Buzz";
    }
    else if(a % 3 == 0) {
        return "Fizz";
    }
    else if(a % 5 == 0) {
        return "Buzz";
    }
    else {
        return a;
    }
}


//Challenge 2
function nthFib(n) {
    let t1 = 0, t2 = 1, sum = 1;
    for (let i = 0; i < n; i++) {
        sum = t1 + t2;
        t1 = t2;
        t2 = sum;
    }
    return t1;
}