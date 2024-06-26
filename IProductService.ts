import { Product } from "./Product";

export interface IProductService{
    getAll() : Array<Product>;
    getById(id: number) : Product;
    saveProduct(product: Product) : void;
    deleteProduct(product: Product): void;
}