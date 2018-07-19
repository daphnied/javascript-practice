/*
 * Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.
 */



function average(...nums) {
    let total = 0;
    for(const num of nums){
        total += num;
        a = nums.length;
    }
    return total/a;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
