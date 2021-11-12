"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProductView = void 0;
/**
 * This class acts as a View for list of products the user wants to remove.
 */
var RemoveProductView = /** @class */ (function () {
    function RemoveProductView(pm) {
        this.productManager = pm;
    }
    /**
     * This function formats the content of the RemoveProductView menu.
     * @returns string object
     */
    RemoveProductView.prototype.getView = function () {
        var removeView = "";
        for (var i = 0; i < this.productManager.getProductList().length; i++) {
            removeView += i + ": " + this.productManager.getProductList()[i].getName() + "\n";
        }
        return removeView;
    };
    return RemoveProductView;
}());
exports.RemoveProductView = RemoveProductView;
