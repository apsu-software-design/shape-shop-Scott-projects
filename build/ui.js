"use strict";
//User Interface for The Shopping Cart 
//@author James Church
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var PriceView_1 = require("./PriceView");
var ProductManager_1 = require("./ProductManager");
var products_1 = require("./products");
var ShoppingCartView_1 = require("./ShoppingCartView");
var RemoveProductView_1 = require("./RemoveProductView");
/**
 * Function to run the UI
 */
function start() {
    showMainMenu();
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {
    var productManager = new ProductManager_1.ProductManager();
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart(productManager);
                break;
            case '2':
                removeItemFromCart(productManager);
                break;
            case '3':
                viewItemsInCart(productManager);
                break;
            case '4':
                viewCartTotal(productManager);
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart(productManager) {
    letUserSelectItem(productManager);
    letUserSelectQuantity(productManager);
}
function letUserSelectItem(productManager) {
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            productManager.addProduct(new products_1.Product("Triangle", 3.5, "It's got three sides!"));
            break;
        case '2':
            productManager.addProduct(new products_1.Product("Square", 4.5, "It's got four sides!"));
            break;
        case '3':
            productManager.addProduct(new products_1.Product("Pentagon", 5.5, "It's got five sides!"));
            break;
        default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity(productManager) {
    console.log("How many of this shape would you like to purchase?\n  ");
    var response = readlineSync.question('> ');
    productManager.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart(productManager) {
    console.log("Select an item to be removed from the cart.\n  ");
    console.log(new RemoveProductView_1.RemoveProductView(productManager).getView());
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    productManager.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart(productManager) {
    console.log(new ShoppingCartView_1.ShoppingCartView(productManager).getView());
}
function viewCartTotal(productManager) {
    console.log('');
    console.log(new PriceView_1.PriceView(productManager).getView());
}
