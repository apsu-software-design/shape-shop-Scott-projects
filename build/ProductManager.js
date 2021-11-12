"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
/**
 * This class acts as the Model.
 */
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.shopping_cart = [];
        this.quantity_cart = [];
    }
    /**
     * This function adds the product into the product cart.
     * @param p Product object
     */
    ProductManager.prototype.addProduct = function (p) {
        this.shopping_cart.push(p);
    };
    /**
     * This function adds the quantity into the quantity cart.
     * @param num quantity of the product
     */
    ProductManager.prototype.addQuantity = function (num) {
        this.quantity_cart.push(num);
    };
    /**
     * This function removes the product from the product cart.
     * @param index number to remove the product
     */
    ProductManager.prototype.removeProduct = function (index) {
        this.shopping_cart.splice(index, 1);
        this.quantity_cart.splice(index, 1);
    };
    /**
     * This function gets the product list.
     * @returns Product list
     */
    ProductManager.prototype.getProductList = function () {
        return this.shopping_cart;
    };
    /**
     * This function gets the quantity list.
     * @returns Quantity list
     */
    ProductManager.prototype.getQuantityCart = function () {
        return this.quantity_cart;
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
