import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getAll();
result = _productService.getById(2);

// let p = new Product();
// p.id = 2
// p.name = "Iphone 6+";
// p.price = 200;
// p.category = "Phone"

// _productService.saveProduct(p);
let p = _productService.getById(2);

_productService.deleteProduct(p);
result  = _productService.getAll();

console.log(result);
