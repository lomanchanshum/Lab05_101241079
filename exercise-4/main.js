"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
// object = instance of class
var customer = new customer_1.Customer("John", "Smith", 22);
customer.greeter();
customer.getAge();
