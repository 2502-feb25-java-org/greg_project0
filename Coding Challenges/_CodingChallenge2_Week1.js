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