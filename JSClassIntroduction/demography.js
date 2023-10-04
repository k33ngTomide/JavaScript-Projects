
raw_array = [];

row1 = [];
let obj1 = {name : "Sabo", population: 200, temp: -15, currency: "NG"};
let obj2 = {name : "Ibadan", population: 500, temp: 10, currency: "YO"};
let obj3 = {name : "Abeokuta", population: 100, temp: 15, currency: "KG"};

row1.push(null);
row1.push(obj1);
row1.push(obj2);
row1.push(obj3);

row2 = [];
let obj4 = {name : "Akure", population: 150, temp: 50, currency: "YK"};
let obj5 = {name : "Mushin", population: 130, temp: 12, currency: "TL"};
let obj6 = {name : "Osun", population: 700, temp: -2, currency: "WR"};
row2.push(obj4);
row2.push(obj5);
row2.push(obj6);
row2.push(null);


row3 = [];
let obj7 = {name : "Iwo", population: 350, temp: 8, currency: "WA"};
let obj8 = {name : "Oshodi", population: 100, temp: 34, currency: "DR"};
let obj9 = {name : "Ikorodu", population: 720, temp: 10, currency: "NM"};
row3.push(obj7);
row3.push(null);
row3.push(obj8);
row3.push(obj9);

raw_array.push(row1);
raw_array.push(row2);
raw_array.push(row3);

console.table(raw_array);


overallPopulation = 0;

for (let counter = 0; counter < raw_array.length; counter++){
  for(let count = 0; count < raw_array[counter].length; count++){
    let newObject = raw_array[counter][count];
    if(newObject == null){
      continue;
    }

    if(newObject.temp <= 10){
      console.log("city = ", newObject.name, "\tPopulation = ", newObject.population)
      overallPopulation += newObject.population;
    }
  }
}

console.log("Population =", overallPopulation);
