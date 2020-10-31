
// class Student {

//     protected name: string;
//     protected age: number;
//     protected id: number;

//     constructor(name: string, age: number, id: number) {
//         this.name = name;
//         this.age = age;
//         this.id = id;
//     }

//     displayDetails() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Student ID: ${this.id}`);
//     }
// }


// class Marks extends Student {

//     protected objMarks: number;
//     protected subMarks: number;

//     constructor(name: string, age: number, id: number, objMarks: number, subMarks: number) {
//         super(name, age, id);
//         this.objMarks = objMarks;
//         this.subMarks = subMarks
//     }

//     displayDetails() {
//         super.displayDetails();
//         console.log(`Objective marks: ${this.objMarks}`);
//         console.log(`Subjective marks: ${this.subMarks}`);

//     }
// }

// class Sports extends Marks {

//     protected score: number;

//     constructor(name: string, age: number, id: number, objMarks: number, subMarks: number, score:number) {
//         super(name, age, id, objMarks, subMarks);
//         this.score = score;
//     }

//     displayDetails() {
//         super.displayDetails();
//         console.log(`Score: ${this.score}`);
//     }
// }

// class Result extends Sports {

//     private totalMarks: number;
//     private avgMark: number;

//     calculateResults() {
//         this.totalMarks = this.objMarks + this.subMarks + this.score;
//         this.avgMark = this.totalMarks / 3
//         super.displayDetails();
//         console.log(`Total marks: ${this.totalMarks}`)
//         console.log(`Average marks: ${this.avgMark}`)
//     }
// }

// var test = new Result("Joon Lee", 26, 1001, 95, 80, 87);
// test.calculateResults();
