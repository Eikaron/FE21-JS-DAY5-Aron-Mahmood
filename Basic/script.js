//Exercise 1

let human1 = {
    fName: "Aron",
    age: 30,
    eyecolor: "green",
    covid: false,

    somefunction(){
        console.log(`My name is ${this.fName} and I am ${this.age} years old.`);
    }
}


let human2 = {
    fName: "Marina",
    age: 28,
    eyecolor: "blue",
    covid: true,

    somefunction(){
        console.log(`My name is ${this.fName} and I am ${this.age} years old.`);
    }
}


let human3 = {
    fName: "Leah",
    age: 31,
    eyecolor: "brown",
    covid: false,

    somefunction(){
        console.log(`My name is ${this.fName} and I am ${this.age} years old.`);
    }
}



let pet = {
    species: "dog",
    petname: "Theo",
    age: 8,
    goodboy: true,

    printPet() {
    }
}

let vehicle = {
    brand: "bmw",
    color: "red",
    plate: "W4545X",
    ecar: false,
}


// Exercise 2

class car{
    brand;
    color;
    plate;
    ecar;
    image;

    constructor(b, c, p, e, i){
        this.brand = b;
        this.color = c;
        this.plate = p;
        this.ecar = e;
        this.image = i;

    }

    printCard() {
       return `<div class="card" style="width: 18rem;">
  <img src="${this.image}"" class="card-img-top" alt="car">
  <div class="card-body">
    <h5 class="card-title"> ${this.brand}</h5>
    <p class="card-text"> fancy text</p>
  </div>
</div>`;

    }
}


class animal{
    brand;
    color;
    plate;
    ecar;

    constructor(b, c, p, e){
        this.brand = b;
        this.color = c;
        this.plate = p;
        this.ecar = e;
    }
}

let car1 = new car("volvo", "red", "W2323", true,"car.jpg");
car1.printCard();