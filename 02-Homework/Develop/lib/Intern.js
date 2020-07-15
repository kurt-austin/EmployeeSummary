// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school
  }

  getName() {
    return name;
  };

  getId () {
    return id;
  };

  getEmail (){
    return email
  }; 

  
  getSchool(){
    return this.school;
  };

  getRole (){
    return "Intern"
  };

}
module.exports = Intern;