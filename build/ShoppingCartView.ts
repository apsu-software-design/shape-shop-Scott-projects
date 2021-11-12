import { ProductManager } from "./ProductManager";

/**
 * This class acts as a View for list of products.
 */
export class ShoppingCartView {

    productManager: ProductManager;

    constructor(pm: ProductManager){
        this.productManager = pm;
    }

    /**
     * This function formats the content of the ShoppingCartView.
     * @returns string object
     */
    getView(){
        let cartView: String = " ";

        for(let i = 0; i < this.productManager.getProductList().length; i++){
            cartView += "\n";
            cartView += "       Name: "+this.productManager.getProductList()[i].getName() + "\n";
            cartView += "      Price: "+this.productManager.getProductList()[i].getPrice() + "\n";
            cartView += "Description: "+this.productManager.getProductList()[i].getDescription() + "\n";
            cartView += "   Quantity: "+this.productManager.getQuantityCart()[i] + "\n";
        }

        return cartView;
    }
}