$(document).ready(function () {
    $("form#buy-items").submit(function(event){
        event.preventDefault()
var pizzaSize=$(".pizza-size").val();
var crustType=$(".crust-type").val();
var toppings=$(".toppings").val();
var pizzanumber=$(".pizzano").val();



var newPizza=new Pizza(pizzaSize, crustType,toppings,pizzanumber)

console.log(newPizza.totalprice())

console.log("NumberofPizzas",pizzanumber)

});
});

//constructor
function Pizza(pizzaSize, crustType,toppings,pizzanumber){
    this.pizzaSize=pizzaSize;
    this.crustType=crustType;
    this.toppings=toppings;
    this.pizzanumber=pizzanumber;

};

//prototype

Pizza.prototype.totalprice=function(){
    var total=parseInt(this.pizzaSize) + parseInt(this.crustType)+ parseInt(this.toppings);
    document.getElementById("totalprice").innerHTML=total*parseInt(this.pizzanumber);
    return total


};



// alert("totalprice()")


// $document.getElementById("output").innerHTML="Your Total is" +total;