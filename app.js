"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getAll();
result = _productService.getById(2);
// let p = new Product();
// p.id = 2
// p.name = "Iphone 6+";
// p.price = 200;
// p.category = "Phone"
// _productService.saveProduct(p);
var p = _productService.getById(2);
_productService.deleteProduct(p);
result = _productService.getAll();
console.log(result);
