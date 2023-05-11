const removeFromArray = function(num_array, ... vals_to_remove) {
    const filtered_array = num_array.filter(val => (!vals_to_remove.includes(val)));
    return filtered_array;
};

// Do not edit below this line
module.exports = removeFromArray;
