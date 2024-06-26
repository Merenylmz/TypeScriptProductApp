"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone 13", "Phone", 1000), new Product_1.Product(2, "Samsung Galaxy A71+", "Phone", 900), new Product_1.Product(3, "Iphone 12 Pro", "Phone", 1000), new Product_1.Product(4, "Samsung Galaxy S21", "Phone", 1200));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
