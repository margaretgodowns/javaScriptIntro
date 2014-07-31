//strings//

//1. Create a string stating today's date.//
"Today is July 30th."

//2. Create a string with my first name.//

"Margaret"

//3. Create popup window that says "Javascript rules."//

confirm("Javascript rules.");

//numbers//

//1. My age//
var myAge = 23

//2. My brother's age//
var traysAge = myAge - 3.5

//3. Number of jobs I've had since college//
var jobNumber = 4


//booleans//

23<10 //false//

23>10 //true//

//true statement about absences//

if ("Your Iron Yard absenses".length >= 4)
  {
    console.log("You are fucked.");
}

//and another//

if ("Your number of absences".length === 0){
    console.log("You will succeed.");
}
  else{
    console.log("You might still be fucked");
  }


//playing with modulo//
console.log(6 % 7)
console.log(10 % 3)

if(60 % 10 === 0) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

//substring exercises//

console.log("January" .substring(0,3)) //="Jan"//
console.log("Melbourne is great" .substring(0,13)) //="Melbourne is"//
console.log("Hamburgers" .substring(3,10)) //="burgers"//

//example of morphing variables//

var myName = "Margaret";
console.log(myName)
myName=("Ma")
console.log(myName)


//functions//
//1. favorite beer//
var myFavBeer=function(beer) {
  console.log("I want to drink + " " + beer");
}
myFavBeer("RJ Rockers")

//2. hi Calvin//
var greeting=function (funcname){
    console.log(name)
    };
    greeting("Calvin");

//3.some simple math//
var timesFour=function(number){
  return number * 4
};
var newNumber=timesFour(23);
console.log(newNumber);

//objects//

var dog = {
  name: 'Bella';
  breed: 'Golden Retriever';
  age: '5';
}

var restaurant = new Object();
restaurant.name='Leons';
restaurant.capacity='120';
restaurant.reservations='45';

var car = {
  make: 'Volvo';
  model: 's60';
  year: '2012';
  color: 'black';
  mileage: '50000'
}

//arrays//

//1. yoga pose array//
var arr = ["pidgeon", "tree", "wheel"]

//2. morph this array into three different yoga poses//
arr = ["fish", "camel", "bridge"]

//3. make a sentence about yoga using an array//
Succes = "Attempt" + arr[1] + "then" + arr[2] + "then" + arr[0] + "for"
