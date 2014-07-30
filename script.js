//finding the length of my name//

"Margaret".length

//numbers//

3 + 4

5-6

1*2

//creating popup windows and prompts//

confirm("Javascript rules.");

//string examples///

"Today is July 30th.".length

//booleans//

23<10 //false//

23>10 //true//

console.log("Margaret".length === 8)
console.log("Margaret Godowns".lenth > 10)

//some more examples using multiple elements//

if ("Your Iron Yard absenses".length >= 4)
  {
    console.log("You are fucked.");
}

if ("Your number of absences".length === 0){
    console.log("You will succeed.");
}
  else{
    console.log("You might still be fucked");
  }


if ("yourName".length > 8){
console.log("The condition is true")
}
else{
    console.log("The condition is false")
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

//more variable fun//

var myColor = "coral"
console.log(myColor.length)

//function examples from Codecademy//

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};
divideByThree(24);
//answer is 8, obvi//

var sayHello = function(name) {
    console.log('Hello ' + name);
};

var foodDemand=function(food){
    console.log("I want to eat" + " " + food);
};
foodDemand("watermelon")

var orangeCost=function(price){
    console.log(price * 5)
};
orangeCost(3);

//my function examples//

var myFavBeer=function(beer) {
  console.log("I want to drink + " " + beer");
}
myFavBeer("RJ Rockers")

var greeting=function (funcname){
    console.log(name)
    };
    greeting("Calvin");

var timesFour=function(number){
  return number * 4
};
var newNumber=timesFour(23);
console.log(newNumber);
