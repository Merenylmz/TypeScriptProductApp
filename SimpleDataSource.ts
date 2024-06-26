import { Product } from "./Product";

export class SimpleDataSource {

    private products: Array<Product>;
    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Iphone 13", "Phone", 1000),
            new Product(2, "Samsung Galaxy A71+", "Phone", 900),
            new Product(3, "Iphone 12 Pro", "Phone", 1000),
            new Product(4, "Samsung Galaxy S21", "Phone", 1200)
        );
    }

    getProducts() : Array<Product>{
        return this.products;
    }
}