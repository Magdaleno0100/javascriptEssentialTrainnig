var pens;

pens = ["red", "blue", "green", "orange"];
console.log("Originar array:" + pens);


pens.reverse();
console.log("Reverse method:" + pens);

pens.shift();
console.log("Shift method:" + pens);

pens.unshift("purple", "balck");
console.log("Unshift method:"+ pens);

pens.pop();
console.log("Pop method:"+ pens);

pens.push("pink", "prussian blue");
console.log("Push method:" + pens);

pens.splice(0,3);
console.log("Splice method:"+ pens);

var newPens = pens.slice();
console.log("Copy of Pens:" + newPens);

var result  = pens.indexOf("pink", 0);
console.log("Result:" + result);


var stringToArray = pens.join(" | ");
console.log("String from array:" + stringToArray);


function namedFunction(){
  console.log("Example from namedFunction");
}
//Call namedFunction
namedFunction();

var anonymousFunction = function() {
  console.log("anonymousFunction");
}
//Call anonymousFunction
anonymousFunction();

//Inmediatly invoque functions expression
(function(){
  console.log("Inmediatly invoque functions expression");
}());

function valores(){
  a>b?console.log("mayor"):console.log("menor");
}

function valores2(){
  return a>b ? ["valor a", a]:["valor b", b];
}


var a = 1;
var b = 2;

valores();
console.log(valores2());

//Example anonymousFunction
var theBiggest = function(){
  return a>b ? ["valor a -anony", a]:["valor b -anony", b];
}

console.log(theBiggest());

//Example with Inmediatly function
var theBiggest2 = (function(){
  return a>b ? ["valor a -Inmediatly", a]:["valor b -Inmediatly", b];
})();

console.log(theBiggest2);

//Objects examples+
/*
var obj1 = new Object();
obj1.title = "Título";


*/

var obj1 = {
  title:"Title2"
};
console.log(obj1.title);


//Constructor example

function Course(title, time){
  this.title = title;
  this.time = time;
  this.method1 = function(){
    console.log("Example method");
  };
}

var couser1  = new Course("Título 1", 2);
var courses = [
   new Course("Título 2", 2),
   new Course("Título 3", 1)
];

console.log(courses[0].method1());




function examploClosure(){
  function m(){
    return 6;
  }
  return m;
}

var d = examploClosure();
console.log(d);
console.log(d());


//Examples from free code camp
//https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//Interatuar con el DOM

var elementDom_1 = document.querySelector(".test");
console.log(elementDom_1);

var textElement = document.querySelector(".test").innerHTML;
console.log(textElement);

var textElement2 = document.querySelector(".test").outerHTML;
console.log(textElement2);

var classListElement  = document.querySelector(".test").classList;
console.log(classListElement);


document.querySelector(".test").classList.toggle(".classToRemove");
/*
if element has name class classToRemove, it is remove and return false
if elemento has not that class, toggle add it and return true
*/


const TESTELEMENT = document.querySelector(".test");

if (TESTELEMENT.hasAttribute("target")) {
  console.log("it has target attribute");
}else{
  TESTELEMENT.setAttribute("target","_blank");
  console.log("set target attribute");
}

/*
We can use createElement, createTextNode
appendChild for relational elements
*/

function revel(){
  console.log("First Event");
}

var elementoClick = document.querySelector("#click1");
elementoClick.addEventListener("click", revel, false);
elementoClick.addEventListener("click", function(){console.log("Another Event");}, false);


function interval(){
  setInterval(function(){console.log("Execute");}, 3000);
}


var valorLambda = (valor3) => valor3*3;

console.log(valorLambda(3));

var valorz = 10;
console.log('${valorz} valor de za');
