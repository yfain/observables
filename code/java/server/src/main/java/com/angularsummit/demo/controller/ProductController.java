package com.angularsummit.demo.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    Product products[] = new Product[3];

    ProductController() {
        products[0] = new Product(0, "First product", 59.99);
        products[1] = new Product(1, "Second product", 12.50);
        products[2] = new Product(2, "Third product", 14.40);
    }

    @RequestMapping(value = "products",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public Product[] getProducts() {
        return products;
    }
}