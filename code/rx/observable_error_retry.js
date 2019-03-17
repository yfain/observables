const interval$ = Rx.Observable.interval(2000);

const beers$ = Rx.Observable.create( observer => {
    let beers = [
        {name: "Stella", country: "Belgium", price: 9.50},
        {name: "Sam Adams", country: "USA", price: 8.50},
        {name: "Bud Light", country: "USA", price: 6.50},
        {name: "Brooklyn Lager", country: "USA", price: 8.00},
        {name: "Sapporo", country: "Japan", price: 7.50}
    ];

        observer.next("dddd");
        observer.next(beers.shift()); // send next beer and remove it from array

/*
        if (beers.length < Math.random() * 5) {    // Generate a random error
            observer.error({
                status: 500,
                description: "Beer stream error"
         });
     }
*/

    });


/*beers$
    .map(obj => console.log(obj))
    .subscribe();*/

    const getBeersOverTime$ = interval$
        .mergeMap(beers$);


/*getBeersOverTime$*/
beers$
    .map(beer => beer.name + ", " + beer.country)
    .subscribe(
        beer => console.log("Subscriber got " + beer),
        err => console.error( "Subscriber got error " + JSON.stringify(err)),
        () => console.log("The stream is over")
    );
