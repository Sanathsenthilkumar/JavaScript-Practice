//JS object constructor


function myDetails(fname, age, dept, profession){
    this.fname = fname;
    this.age = age;
    this.dept = dept;
    this.profession = profession;
}
const ITEmployee = new myDetails("John", 30, "IT", "Developer");
const HRManager = new myDetails("Jane", 28, "HR", "Manager");
ITEmployee.salary = 60000;
console.log(ITEmployee);
console.log(HRManager);