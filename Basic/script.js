//Exercise 1

let human1 = {
    fName: "Aron",
    lastname: "Faulhaber",
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
        document.getElementById("demo").innerHTML = `My name is ${this.fName} and I am ${this.age} years old.`
    }
}

myArray = [human1, human2, human3];

for (val of myArray){
    val.somefunction();
}


let pet = {
    species: "dog",
    petname: "Theo",
    age: 8,
    goodboy: true,
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

    printCar() {

        return `<div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="Car">
        <div class="card-body">
          <h5 class="card-title">${this.brand} in ${this.color}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Mahmoods Car</a>
        </div>
      </div>`

    }
}

let MahmoodsCar = new car("Maybach", "red", "", true, "pic.jpg");

document.getElementById("demo2").innerHTML = MahmoodsCar.printCar();


class Animal {
    Species;
    color;
    Legs;
    Habitat;
    Food;
    Pet;
    constructor(s,c,l,h,f,p){
        this.Species=s;
        this.color=c;
        this.Legs=l;
        this.Habitat=h;
        this.Food=f;
        this.Pet=p;
    }
    PrintInfo(){
        console.log(`This is a ${this.Species}`);
    }
}

let Animal1 = new Animal("cat", "calico",4,"land", "carnivore", true);

Animal1.PrintInfo();


//Exercise Intermediate 1

class Motorbike extends car {

    wheels;

    constructor(b, c, p, e, i, w){
        super(b,c,p,e,i);
        this.wheels = w;
    }
}

let bike1 = new Motorbike("volvo", "green", "", true, "pic.jpg", 2);
document.getElementById("demo4").innerHTML = bike1.printCar();


