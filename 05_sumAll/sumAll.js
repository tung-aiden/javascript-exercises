const sumAll = function(num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }
    const large_num = Math.max(num1, num2);
    const small_num = Math.min(num1,num2);
    let count = 0;
    if (large_num < 0|| small_num < 0){
        return "ERROR";
    }
    for (let i = small_num; i <= large_num; i++){
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
