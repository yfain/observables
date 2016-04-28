function getData(){

    var beers = [
        {name: "Stella", country: "Belgium", price: 9.50},
        {name: "Sam Adams", country: "USA", price: 8.50},
        {name: "Bud Light", country: "USA", price: 6.50},
        {name: "Brooklyn Lager", country: "USA", price: 8.00},
        {name: "Sapporo", country: "Japan", price: 7.50}
    ];


    return Rx.Observable.create( observer => {
                    let counter = 0;
                    beers.forEach( beer => {
                                     observer.next(beer);
                                     counter++;

                                     if (counter > Math.random()*5) {
                                         observer.error("Beer stream error");
                                     } else{
                                         emulateDelayInSeconds(1);
                                     }
                                   }
                    );

                    observer.complete();}
    );
}

function emulateDelayInSeconds(seconds)
{
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {} // just keep the CPU busy
}

getData()
    .map(beer => beer.name + ", " + beer.country)
    .subscribe(
        beer => console.log("Subscriber got " + beer),
        err => console.error(err),
        () => console.log("The stream is over")
    );
