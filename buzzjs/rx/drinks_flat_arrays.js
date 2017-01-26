function getDrinks() {

    let beers = [
        {name: "Stella", country: "Belgium", price: 9.50},
        {name: "Sam Adams", country: "USA", price: 8.50},
        {name: "Bud Light", country: "USA", price: 6.50}
    ];

    let softDrinks = [
        {name: "Coca Cola", country: "USA", price: 1.50},
        {name: "Fanta", country: "USA", price: 1.50},
        {name: "Lemonade", country: "France", price: 2.50}
    ];

    return Rx.Observable.create( observer => {

            observer.next(beers);        // pushing the beer pallet (array)

            observer.next(softDrinks);   // pushing the soft drinks pallet (array)

            observer.complete();
        }
    );
}

// We want to unload each pallet and print the into about each case with drinks

console.info("\n*** Unloading drinks with flatMap() ***\n");

getDrinks()
    .flatMap(drinks => Rx.Observable.from(drinks))           // converting each array into an observable
    .subscribe(
        drink => console.log("Subscriber got " + drink.name + ": " + drink.price ),
        error => console.err(error),
        () => console.log("The stream of observables is over")
    );
