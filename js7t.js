console.log("This is tutorial");

function greet(name, greettext){
    console.log(greettext);
    console.log(name + " is good boy");

}

  function sum(a,b,c){
      d = a + b + c;
      return d;
  }

let name = "nikhil";
let name1 = "aks";
let name2 = "ajit";
let name3 = "aniket";
let greettext = "good morning";


greet(name,greettext);
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);

let returnval = sum(1,2,3);
console.log(returnval);