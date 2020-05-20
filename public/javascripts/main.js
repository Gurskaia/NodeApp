
  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("apply").addEventListener("click", function(){
        var nextFoodItem = new FoodItem(
            document.getElementById("name").value,
            document.getElementById("calories").value,
            document.getElementById("quantity").value
        );
        if(nextFoodItem.isValid()) {
            foodList.push(nextFoodItem);
            clear();
            updateDisplay(foodList);
        }
        else {
            document.getElementById("total").innerHTML = "Sorry, invalid input data";
        }
    });

    document.getElementById("clear").addEventListener("click", clear);
});

function clear() {
    document.getElementById("name").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("name").focus();
}

var foodList = [];

function updateDisplay(array) {
    var myList = document.getElementById('foodList');
    myList.innerHTML= '';
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + (array[i].calories * array[i].quantity);
        var node = document.createElement("li");
        node.innerHTML = array[i].name + " , " + array[i].calories + " , " + array[i].quantity;
        document.getElementById("foodList").appendChild(node);
    }

    document.getElementById("total").innerHTML = "You have consumed" + total + "calories";
    return total;

};
  function calsPerDay() {
    function find(id) { return document.getElementById(id) }

    var age = find("age").value
    var height = find("height").value * 2.54
    var weight = find("weight").value / 2.2
    var result = 0
    if (find("male").checked) 
      result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
    else if (find("female").checked)
      result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
    find("totalCals").innerHTML = Math.round( result )

    return result;
}
calsPerDay()

function cals() {
    function find(id) { return document.getElementById(id) }

    var tatal = find("total").value
    var totalCals = find("totalCals").value
    var result = 0
  
      result = totalCals - tatal;
    find("cals").innerHTML = Math.round( result )

    return result;
}
