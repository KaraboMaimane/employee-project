export class Employee{
    name;
    surname;
    idNo;
    role;
    imagePath;

    constructor(Name: string, Surname: string, IdNo: string, Role: string){
        this.name = Name;
        this.surname = Surname;
        this.idNo = IdNo;
        this.role = Role;
    }
}

let employeeArray = [];

export default employeeArray;