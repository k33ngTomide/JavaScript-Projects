function Native(_firstName, _lastName, _scVID, _age) {
  this.firstName = _firstName;
  this.lastName = _lastName;
  this.scVID = _scVID;
  this.age = _age; 

  this.setFirstName = (newFirstName) => {
    this.firstName = newFirstName;
  }

  this.setLastName = (newLastName) => {
    this.lastName = newLastName;
  }

  this.getFirstName = () => {
    return this.firstName;
  }

  this.getLastName = () => {
    return this.lastName;
  }

  this.setScVID = (newScVID) => {
    this.scVID = newScVID;
  }

  this.getScVID = () => {
    return this.scVID;
  }

  this.getAge = () => {
    return this.age;
  }

  this.setAge = (age) => {
    this.age = age;
  }
  
}

let newNative = new Native("Akintomide", "Muiliyu", "SCVID010", 10);
console.log(newNative.getFirstName());
console.log(newNative.getLastName());
console.log(newNative.getScVID());
console.log(newNative.getAge());
