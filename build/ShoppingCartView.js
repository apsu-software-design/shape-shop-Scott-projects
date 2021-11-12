"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartView = void 0;
/**
 * This class acts as a View for list of products.
 */
var ShoppingCartView = /** @class */ (function () {
    function ShoppingCartView(pm) {
        this.productManager = pm;
    }
    /**
     * This function formats the content of the ShoppingCartView.
     * @returns string object
     */
    ShoppingCartView.prototype.getView = function () {
        var cartView = " ";
        for (var i = 0; i < this.productManager.getProductList().length; i++) {
            cartView += "\n";
            cartView += "       Name: " + this.productManager.getProductList()[i].getName() + "\n";
            cartView += "      Price: " + this.productManager.getProductList()[i].getPrice() + "\n";
            cartView += "Description: " + this.productManager.getProductList()[i].getDescription() + "\n";
            cartView += "   Quantity: " + this.productManager.getQuantityCart()[i] + "\n";
        }
        return cartView;
    };
    return ShoppingCartView;
}());
exports.ShoppingCartView = ShoppingCartView;
