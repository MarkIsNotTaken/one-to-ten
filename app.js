var hero = "Florida Man";
var gender = "Man";
var age = 462;
var weapon = "live crocodile";
var pronoun;
var xp;

function trigger(){
	if(gender = "Man"){pronoun = "His"}
}

function experience() {
	if(age < 18){xp = "is just beginning"}
		else if(19 > age < 40){xp = "has seen a few battles"}
			else if(age > 40){xp = "has live through many epic battles"}
}

console.log(hero + " is our lovable hero, who " + xp + " with his trusty " + weapon)

var count;
var animal = "Tasmanian Gerbil";

function animalHouse(a,b){
	{count = a + b}
}

animalHouse(1,2)

function check(){
	if(count > 2){
		console.log("We have too many " + animal + "s")
	}else{
		console.log("Welcome to the club")
	}
}

check();

var avenger = "Hulk";

function avengersAssemble(avenger){
	if(avenger == "Hulk"){
		console.log(avenger + " want friend")
	}else("Sorry, you are not needed for this mission")
}

avengersAssemble(avenger);

var lights = true;

function luminus(){
	if(lights === true){
		console.log("And then there was light")
	}else("Lights out")
}

luminus();

var carType = "Toyota";
var color = "Black";
var num = 2;

function muhCar(){
	if(carType == "Toyota" && color == "blue"){
		console.log("We have " + color + " " + carType)
	}if(carType == "Lamborghini" && color == "red"){
		console.log("We have " + color + " " + carType)
	}if(carType == "Tesla" && color == "black"){
		console.log("We have " + color + " " + carType)
	}else{
		console.log("We don't have any " + color + " " + carType + "s in stock")
	}
}

muhCar();