class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }

    addAnswer(question) {
        this.answers.push(question);
    }

}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return this.answer === answer;

    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(question => {
            this.questions.set(question.qid, question.answer);
        });
        this.students = students;
    }

    scoreStudentBySid(sid) {
        const student = this.students.find(s => s.studentId === sid);
        if (!student) {
            return 0;
        }
        return student.answers.filter(q => this.questions.get(q.qid) === q.answer).length;
    }

    getAverageScore() {
        const totalScore = this.students.reduce((total, student) => {
            return total + this.scoreStudentBySid(student.studentId);
        }, 0);
        return totalScore / this.students.length;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];

const quiz = new Quiz(questions, students);

let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10); // Expected Result: 3

let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11); // Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); // Expected Result: 2.5