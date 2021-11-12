//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import { PriceView } from './PriceView';
import { ProductManager } from './ProductManager';
import {Product} from './products';
import { ShoppingCartView } from './ShoppingCartView';
import { RemoveProductView } from './RemoveProductView';


/**
 * Function to run the UI
 */
export function start() {
  showMainMenu();
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu() {

  let productManager: ProductManager = new ProductManager();

  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }
    switch(response) { //handle each response
      case '1': addItemToCart(productManager); break;
      case '2': removeItemFromCart(productManager); break;
      case '3': viewItemsInCart(productManager); break;
      case '4': viewCartTotal(productManager); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart(productManager: ProductManager) {
    letUserSelectItem(productManager);
    letUserSelectQuantity(productManager);
}

function letUserSelectItem(productManager: ProductManager) {
    console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);

    let response = readlineSync.question('> ')

    switch(response) { //handle each response
      case '1': productManager.addProduct(new Product("Triangle", 3.5, "It's got three sides!")); break;
      case '2': productManager.addProduct(new Product("Square", 4.5, "It's got four sides!")); break;
      case '3': productManager.addProduct(new Product("Pentagon", 5.5, "It's got five sides!")); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity(productManager: ProductManager) {
    console.log(`How many of this shape would you like to purchase?
  `);

    let response = readlineSync.question('> ')
    productManager.addQuantity(parseInt(response));
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart(productManager: ProductManager) {
    console.log(`Select an item to be removed from the cart.
  `);

    console.log(new RemoveProductView(productManager).getView());

    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    productManager.removeProduct(toRemove);

    console.log(''); //extra empty line for revisiting
}

function viewItemsInCart(productManager: ProductManager) {
    console.log(new ShoppingCartView(productManager).getView());
}

function viewCartTotal(productManager: ProductManager) {
    console.log('');
    console.log(new PriceView(productManager).getView());

}
