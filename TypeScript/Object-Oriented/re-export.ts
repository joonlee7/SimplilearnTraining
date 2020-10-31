export { Student as St } from "./modules";

export class Person {

    name: string;
    gender: string;

    constructor(name: string, gender: string) {
        this.name = name;
        this.gender = gender;
    }

    showDetail() {
        console.log(`${this.name} ${this.gender}`);
    }
}