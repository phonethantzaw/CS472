"use strict";

// a) Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates
// and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3])
// should be computed as 1 + 2 + 3 = 14. Note: Write your Javascript code without using Imperative
// programming. i.e. Do NOT use any explicit looping construct; instead use functional programming
// style/approach.

function computeSumOfSquares(arr) {
    return arr.reduce((sum, current) => sum + current * current, 0);
}
console.log("computeSumOfSquares :: " + computeSumOfSquares([1, 2, 3]));

// b) Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and
// prints only the numbers which are odd.

function printOddNumbersOnly(arr) {
    return arr.filter(num => num % 2 != 0);
}
console.log("printOddNumbersOnly :: " + printOddNumbersOnly([1, 2, 3, 4, 5]));

// c) Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and
// b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length,
// beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1),
// prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0,
// b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13,
// 21, 34", as output).


function printFibo(num, a, b) {

    let fibos = [a, b];

    for (let i = 2; i < num; i++) {
        fibos.push(fibos[i - 1] + fibos[i - 2]);
    }

    console.log("printFibo :: " + fibos);

}

printFibo(1, 0, 1);
printFibo(6, 0, 1);
printFibo(10, 0, 1);



function showAlert() {
    let user = {
        name: "John",
        years: 30
    };


    // your code to the left side:
    let { name, years: age, isAdmin = false } = user;

    alert(name); // John
    alert(age); // 30
    alert(isAdmin); // false
}


let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];

// o addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it to the
// library. addBook should return the newly created book.
// o getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array.
// o findBooks, which will take the keyword of title as input. It will find books which contain the given keyword in
// the title and return books alphabetically ordered by the author.


function addBook(title, author, libraryId) {
    const newBook = { title, author, libraryId };
    libraryBooks.push(newBook);
    return newBook;
}

console.log("New Book :: " + addBook("Alpha", "Eleon Mars", 700));

function getTitles() {
    return libraryBooks.map(item => item.title).sort();
}

console.log("Get Titles :: " + getTitles());

const findBooks = (libraryBooks, keyword) => {
    const matchingBooks = libraryBooks.filter(book =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
    );


    return matchingBooks
        .sort((a, b) => a.author.localeCompare(b.author))
        .map(book => `Title: ${book.title}, Author: ${book.author}`);
};

console.log("Find Book :: " + findBooks(libraryBooks, "The"));