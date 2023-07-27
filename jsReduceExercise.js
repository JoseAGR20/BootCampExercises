/*reduce takes an array of 
elements and "reduces them" to a single value.*/ 

const nums = [ 20, 30, 50, 12, -2, 45, 99, 19, 22, 85 ];

//to add them up 
const total = 0;
for (let num of nums) {
    total += num;
}
console.log(total)

//to get the min value
const min = nums[0];
for (const i = 0; i < nums.length; i++) {
    if(nums[i] < min) min = nums[i];
}
console.log(min);

//to find the frequency of letters in a string 
const str = "lollapalooza";
const charFreq = {};
for (let char of str) {
    if (charFreq[char]) {
        charFreq[char] += 1;
    }
    else {
        charFreq[char = 1]
    }
}

//In all 3 of these scenarios we are "reducing" values
/*whatever is returned from the callback function, 
becomes the new value of the accumulator. 
-Accepts a callback function adn an optional 
second parameter.
-Iterates through an array.
-Runs a callback on each value in the array.
-the first parameter to the callback is either 
the first value in the array or the optional 
second parameter.
-the firs parameter to the callback is often called 
"accumulator"
-The returned value from the callback becomes the 
new value of accumulator.
example: */
let evens = [2, 4, 6, 8, 10];

evens,reduce(function(accumulator, nextValue){
    return accumu lartor + nextValue;
});
/*
2
2 + 4 = 6
6 + 6 = 12
12 + 8 = 20
20 + 10 = 30
*/

const midtermScores = [ 70,88, 93, 94, 64,92, 56 ];
const finalScores = [ 92, 93, 76, 77, 78, 59, 61 ];
const minMidtermScore = midtermScores.reduce(function(min, nextScore) {
    if (nextScore < min) {
        return nextScore;
    }
    return min;
});
const maxScore = midtermScores.reduce(function(max, nextScore) {
    if (nextScore > max) {
        return nextScore;
    }
    return max;
});

/*using the terciary operator*/
const minFinalScore = finalScores.reduce(function(min, nextScore) {
    return nextScore < min ? nextScore : min;
});

/* by passing minMidTermScore as a second optional parameter, 
we can star the accumulator that resulted from that operation*/
const minOverallScore = finalScores.reduce(function(min, nextScore) {
    return nextScore < min ? nextScore : min;
}, minMidtermScore);

/* Adding a second parameter
we can add the "staring point"*/
evens 
evens.reduce(function(accum, nextValue) {
    return accum + nextValue;
}, 10);

/*
10 + 2 = 12
12 + 4 = 16
16 + 6 = 22
22 + 8 = 30
30 + 10 = 40
*/

//Reduce Exercises

/*Write a function called extractValue which accepts an 
array of objects and a key and returns a new array with 
the value of each object at the key.*/
const arr = [{name: 'Elie'}, {name: 'Tim'}, 
{name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key) {
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    }, []);
}

/*Write a function called vowelCount which accepts a string and 
returns an object with the keys as the vowel and the values as 
the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and 
uppercase letter should count*/

function vowelCount(str )

