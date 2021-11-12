"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceView = void 0;
/**
 * This class acts as a View for the total price.
 */
var PriceView = /** @class */ (function () {
    function PriceView(pm) {
        this.productManager = pm;
    }
    /**
     * This function formats the content of the PriceView.
     * @returns string and number variable
     */
    PriceView.prototype.getView = function () {
        var total = 0;
        for (var i = 0; i < this.productManager.getProductList().length; i++) {
            total += this.productManager.getProductList()[i].getPrice();
        }
        return "Shopping Cart Total: " + total;
    };
    return PriceView;
}());
exports.PriceView = PriceView;
