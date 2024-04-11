/*Question 1*/

const student = {
    firstName: 'Bryan',
    lastName: 'Phone',
    grades: [60, 50, 80, 90],


    insertGrade(newGrade) {
        this.grades.push(newGrade);
    },

    computeAverageGrade() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

}

console.log(student.firstName);
console.log(student.lastName);
console.log(student.grades);
student.insertGrade(80);

const averageGrade = student.computeAverageGrade();
console.log(`The average grade is: ${averageGrade}`);

/*Question 2*/
function Student(fname, lname, grades) {
    this.firstName = fname;
    this.lastName = lname;
    this.grades = grades;
}

Student.prototype.insertGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.displayName = function (){
    return this.firstName+` `+this.lastName;
}

Student.prototype.computeAverageGrade = function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
        sum += this.grades[i];
    }
    return sum / this.grades.length;
}

let std1 = new Student('Bryan', 'Phone', [90, 80, 60])
let std2 = new Student('Liana', 'Ei', [75, 80, 50]);

std1.insertGrade(70);

console.log( std1.displayName() + ' Average grade is : ' + std1.computeAverageGrade());
console.log( std2.displayName() + ' Average grade is : ' + std2.computeAverageGrade());

/*Question 3 */

Array.prototype.mySort = function() {
    return this.sort((a, b) => a - b);
};

console.log('sorted list :: '+std1.grades.mySort());



/* Question 4 */
function Animal(n, s) {
    this.name = n;
    this.speed = s;
}

Animal.prototype.run = function (speed) {
    this.speed += speed;
    console.log(this.name + ' is running at '+ this.speed);
}

Animal.compareBySpeed = function (a1, a2) {
    if (a1.speed > a2.speed) {
        console.log(`${a1.name} is faster than ${a2.name}.`);

    } else if (a1.speed < a2.speed) {
        console.log(`${a2.name} is faster than ${a1.name}.`);
    } else{
        console.log(`${a1.name} is same speed ${a2.name}.`);
    }

}

function Rabbit(name,speed) {
    Animal.call(this, name,speed);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;


Rabbit.prototype.hide = function (){
    return console.log(this.name +' hides.');
}

const animal1 = new Animal("Tiger", 30);
const rabbit1 = new Rabbit("Bunny", 50);

animal1.run(10);
rabbit1.run(5);
rabbit1.hide();

Animal.compareBySpeed(animal1, rabbit1);
