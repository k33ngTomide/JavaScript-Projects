class Native {
  
  constructor(_firstName, _lastName, _scVID, _age) {
    this.firstNam = _firstName;
    this.lastNam = _lastName;
    this.scvID = _scVID;
    this.aged = _age;

  }

  set age(newAge){
    this.aged = newAge;
  }

  get age(){
    return this.aged;
  }

  set scVID(newScVID){
    this.scvID = newScVID;
  }

  get scVID(){
    return this.scvID;
  }

  set firstName(newFirstName){
    this.firstNam = newFirstName;
  }

  get firstName(){
    return this.firstNam;
  }

  set lastName(newLastName){
    this.lastNam = newLastName;
  }

  get lastName(){
    return this.lastNam;
  }
  
}

let newNative = new Native("Akintomide", "Muiliyu", "SCVID010", 10);
console.log(newNative.firstName);
console.log(newNative.lastName);
console.log(newNative.scVID);
console.log(newNative.age);

