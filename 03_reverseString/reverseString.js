const reverseString = function(string) {
    let reverse_string = "";
    let rev_string_array = string.split("");
    for (let i = rev_string_array.length; i > 0; i--){
        reverse_string += rev_string_array[i-1];
    }
    return reverse_string;
};

// Do not edit below this line
module.exports = reverseString;
