import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{
    private products : Array<Product>;
    private dataSource : SimpleDataSource;

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p=>this.products.push(p));
    }

    getAll(): Product[] {
        return this.products;
    }
    getById(id: number): Product {
        let product : Product = this.products.filter(p=>p.id == id)[0];
        return product;
    }
    saveProduct(product: Product): void {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        } else{
            let index : number = 0;

            for (let j = 0; j < this.products.length; j++) {
                if (product.id === this.products[j].id) {
                    index = j;
                }
            }
            this.products.splice(index, 1, product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }

    private generateId() : number{
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }

        return key;
    }

}