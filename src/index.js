module.exports = function zeros(expression) {
    let factorials = expression.split('*');
    let zeros=0, fives=0, dewces =0;
    for (let factorial of factorials){
        let number;
        if(factorial.indexOf('!!') ===-1){
            number = +factorial.substring(0, factorial.length-1);
            zeros+=factorialZeros(number);
        } else {
            number = +factorial.substring(0, factorial.length-2);
            if(number%2===0){
                dewces+=getDewcesFromEvenFactorial(number);
                fives+=getFiversFromEvenFactorial(number);
            } else{
                fives+=getFiversFromOddFactorial(number);
            }
        }
    }
    zeros+=getZeroes(dewces, fives);
    return zeros;
}
function factorialZeros(number) {
    let result = 0;
    while (number>0) {
        number/=5;
        number= Math.trunc(number);
        result+=number;
    }
    return result;
}
function getDewcesFromEvenFactorial(number) {
    let result=0;
    for (let i = 2;i <=number; i+=2){
        result+=getDewcesFromEven(i);
    }
    return result;
}
function getDewcesFromEven(number) {
    let result = 0;
    while (true){
        if(number%2 ===0){
            number/=2;
            result++;
        } else {
            break;
        }
    }
    return result;
}
function getFiversFromEvenFactorial(number) {
    let result =0;
    for(let i = 10;i<=number;i+=10){
        result+=getFiversFromEven(i);
    }
    return result;
}
function getFiversFromOddFactorial(number) {
    let result =0;
    for (let i =5;i<=number;i+=10){
        result+=getFiversFromOdd(i);
    }
    return result;
}
function getFiversFromOdd(number) {
    let result = 0;
    while (true){
        if(number%5 ===0){
            number/=5;
            result++;
        } else {
            break;
        }
    }
    return result;
}
function getZeroes(dewces, fives) {
    if(dewces>=fives){
        return fives;
    } else{
        return  dewces;
    }
}
function getFiversFromEven(number) {
    let result = 0;
    while (true){
        if(number%5 ===0){
            number/=5;
            result++;
        } else {
            break;
        }
    }
    return result;
}

