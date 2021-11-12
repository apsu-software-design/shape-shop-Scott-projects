import { Product } from "./products";

/**
 * This class acts as the Model.
 */
export class ProductManager{

    private shopping_cart: Product[];
    private quantity_cart: number[];

    constructor(){
        this.shopping_cart = [];
        this.quantity_cart = [];
    }

    /**
     * This function adds the product into the product cart.
     * @param p Product object
     */
    addProduct(p: Product){
        this.shopping_cart.push(p);
    }

    /**
     * This function adds the quantity into the quantity cart.
     * @param num quantity of the product
     */
    addQuantity(num: number){
        this.quantity_cart.push(num);
    }

    /**
     * This function removes the product from the product cart.
     * @param index number to remove the product
     */
    removeProduct(index: number){
        this.shopping_cart.splice(index, 1);
        this.quantity_cart.splice(index, 1);
    }

    /**
     * This function gets the product list.
     * @returns Product list
     */
    getProductList(){
        return this.shopping_cart;
    }

    /**
     * This function gets the quantity list.
     * @returns Quantity list
     */
    getQuantityCart(){
        return this.quantity_cart;
    }
}