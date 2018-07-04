export class Employee{
    name;
    surname;
    idNo;
    role;
    image;

    constructor(Name: string, Surname: string, IdNo: string, Role: string, Image:any){
        this.name = Name;
        this.surname = Surname;
        this.idNo = IdNo;
        this.role = Role;
        this.image = Image;
    }
}

let employeeArray = [];

export default employeeArray;