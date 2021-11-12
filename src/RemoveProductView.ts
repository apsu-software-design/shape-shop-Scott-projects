import { ProductManager } from "./ProductManager";

/**
 * This class acts as a View for list of products the user wants to remove.
 */
export class RemoveProductView {

    productManager: ProductManager;

    constructor(pm: ProductManager){
        this.productManager = pm;
    }

    /**
     * This function formats the content of the RemoveProductView menu.
     * @returns string object
     */
    getView(){
        let removeView: String = "";

        for(let i = 0; i < this.productManager.getProductList().length; i++){
            removeView += i + ": " + this.productManager.getProductList()[i].getName() + "\n";
        }

        return removeView;
    }
}