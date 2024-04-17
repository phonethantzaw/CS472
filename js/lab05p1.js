"use strict";


// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.

function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }

}

console.log("Max Number is " + max(15, 24));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

function maxOfThree(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log("The Largets of three numbers is " + maxOfThree(12, 2, 93))

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(ch) {
    ch = ch.toLowerCase();

    if (ch.includes('a') || ch.includes('e') || ch.includes('i') || ch.includes('o') || ch.includes('u')) {
        return true;
    }
    return false;
}

let x = "BCD";
console.log(x + " Is Vowel " + isVowel(x));

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
// given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24


function sum(numArr) {
    let sumOfElement = 0;
    for (let i = 0; i < numArr.length; i++) {
        sumOfElement += numArr[i];
    }
    return sumOfElement;
}

function multiplies(numArr) {
    let multiplyOfElement = 1;
    for (let i = 1; i < numArr.length; i++) {
        multiplyOfElement *= numArr[i];
    }
    return multiplyOfElement;
}
let arr = [1, 2, 3, 4];

console.log("Array of Sum " + sum(arr));
console.log("Array of Multiplies " + multiplies(arr));


// 5. Define a function reverse(str) that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".

function reverse(str) {
    let retStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        retStr += str[i];
    }
    return retStr;
}
let str = "jag testar";
console.log(str + " Reverse String Is " + reverse(str));


// 6. Write a function findLongestWordLength() that takes an array of words and returns the length of the longest one.

function findLongestWordLength(strArr) {
    let max = -Infinity;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > max) {
            max = strArr[i].length;
        }
    }
    return max;
}

let strArr = ["Air", "Bubble", "water"];
console.log("The length of the longest one is " + findLongestWordLength(strArr));


// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.

// function filterLongWords(strArr, num) {
//     let retArr = [];
//     for (let i = 0; i < strArr.length; i++) {
//         if (strArr[i].length > num) {
//             retArr.push(strArr[i]);
//         }
//     }
//     return retArr;

// }

function filterLongWords(strArr, num) {
    return strArr.filter(item => item.length > num);
    
}

let strArray = ["Fire", "Apple", "Water", "Boo", "Earth"];
let num = 4;




console.log("Filter Long Words are " + filterLongWords(strArray, num));

function factorial(num, a, b) {
    let next;
    for (let i = a; i < num; i++) {
        a = num - 1;
        b = num - 2;
        next = a + b;
        
        console.log(next);    
    }
    

}

console.log(factorial(7, 0, 1));