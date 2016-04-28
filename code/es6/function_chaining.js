let beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
];

console.log("*** All beers ***");

beers.forEach(beer => console.log(`${beer.name}, ${beer.country}, $${beer.price}`));

console.log("*** Inexpensive beers ***");

beers
    .filter(beer => beer.price < 8)
    .map(beer => beer.name + ": $" + beer.price)
    .forEach(result => console.log(result));









/*
beers
    .filter(function (beer) { return beer.price < 9})
    .map(beer => beer.name + ":" + beer.price)
    .forEach(result => console.log("Cheap: " + result));*/
