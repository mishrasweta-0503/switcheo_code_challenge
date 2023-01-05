var n;
function summation(n){
    if (n <= 1)
        return n;
    return n + summation(n-1);
}
console.log("sum:",summation(5));


var n;
function summation(n){
    total = 0;
    i = 0;
    while (i <= n){
        total += i;
        i += 1;
    }
    return total;
}
console.log("sum:",summation(6));


var sum;
var num = prompt("Enter a number: ");
num = parseInt(num);
sum = (num*(num + 1))/2;
console.log(sum);





