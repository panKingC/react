import Student from "./student";
export default class JJstudent extends Student{
    constructor(){
        super("杰伦","male",21)
    }

    getDescription(){
        return super.getDescription();
    }

}