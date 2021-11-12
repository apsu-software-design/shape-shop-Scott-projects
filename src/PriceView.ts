import { ProductManager } from "./ProductManager";

/**
 * This class acts as a View for the total price.
 */
export class PriceView {

    productManager: ProductManager;

    constructor(pm: ProductManager){
        this.productManager = pm;
    }

    /**
     * This function formats the content of the PriceView.
     * @returns string and number variable
     */
    getView(){
        let total = 0;
        
        for(let i = 0; i < this.productManager.getProductList().length; i++){
            total += this.productManager.getProductList()[i].getPrice();
        }

        return "Shopping Cart Total: " + total;
    }
}