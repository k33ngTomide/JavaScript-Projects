
let vehicle = {
  "seats": 5,
  "wheels": 4,
  "doors": 4
  
}

let car = {
  model: "Lamboghini",
  color: "Midnight Black",
  year: "2023",
  mileage: 3,
  __proto__: vehicle

}

console.log(car.color);
console.log(car.doors);


function Human(_name, _age, _sex, _maritalStatus, _numberOfChildren){

  this.name = _name;
  this.age = _age;
  this.sex = _sex;
  this.maritalStatus = _maritalStatus;
  this.numberOfChildren = _numberOfChildren;

  this.setName = (name) => {
    this.name = name;
  } 

  this.getName = () => {return this.name;}
  
  this.setAge = (age) => {
    this.age = age;
  } 
  this.getAge = () => {return this.age;}

  this.getSex = () => {return this.sex;}

  this.setMaritalStatus = (maritalStatus) => {
    this.maritalStatus = maritalStatus;
  }

  this.getMaritalStatus = () => {return this.maritalStatus;}

  this.setNumberOfChildren = (numberOfChildren) => {
    this.numberOfChildren = numberOfChildren;
  }

  this.getNumberOfChildren = () => {return this.numberOfChildren;}
}