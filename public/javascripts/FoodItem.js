

var FoodItem = function (pName, pCalories, pQuantity) {
    this.name = pName;
    this.calories = pCalories;
    this.quantity = pQuantity;
};

FoodItem.prototype.isValid = function () {
    if (this.name == "" || this.calories == "" || this.quantity == "" || isNaN(this.calories) || isNaN(this.quantity)) {
    return false;
}  else {
    return true;
}
};
