"use strict";

let beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
];

console.log("*** Inexpensive beers with Array.forEach() ***");

beers
    .filter(beer => beer.price < 8)
    .map(beer => beer.name + ": $" + beer.price)
    .forEach(result => console.log(result));


console.log("*** Inexpensive beers with Observable.subscribe()");

Rx.Observable.from(beers)
    .filter(beer => beer.price < 8)
    .map(beer => beer.name + ": $" + beer.price)
    .subscribe(
        beer => console.log(beer),
        err => console.error(err),
        () => console.log("The sream is over")
);










/*
let observableBeers = Rx.Observable.from(beers)
    .filter(beer => beer.price < 8)
    .map(beer => beer.name + ": $" + beer.price);

observableBeers
    .subscribe(
        beer => console.log(beer),
        err => console.error(err),
        () => console.log("The sream is over")
    );*/
