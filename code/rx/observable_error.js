function getData(){

    return Rx.Observable.create( observer => {
        let beers = [
            {name: "Stella", country: "Belgium", price: 9.50},
            {name: "Sam Adams", country: "USA", price: 8.50},
            {name: "Bud Light", country: "USA", price: 6.50},
            {name: "Brooklyn Lager", country: "USA", price: 8.00},
            {name: "Sapporo", country: "Japan", price: 7.50}
        ];

        let delay = 1000;
        let timeout = () => setTimeout(sendNext, delay);
        timeout();

        function sendNext(){
            observer.next(beers.shift()); // shift removes and returns the removed array element

            timeout(sendNext, delay);     // send next element to observer

            if(beers.length < Math.random()*5) {    // Generate a random error
                observer.error(  {
                    status: 500,
                    description: "Beer stream error"
                });
            }

            if (!beers.length) {
                observer.complete();
                window.clearTimeout(timeout);
            }
        }
    });
}

getData()
    .map(beer => beer.name + ", " + beer.country)
    .subscribe(
        beer => console.log("Subscriber got " + beer),
        err => console.error( "Subscriber got error " + JSON.stringify(err)),
        () => console.log("The stream is over")
    );
