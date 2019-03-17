let a1 = 2;
let b1 = 4;

let c1 = a1 + b1;  // c1 = 6  

a1 = 55;           // c1 = 6;     
b1 = 20;           // c1 = 6; 

console.log('In the non-reactive code c1=' + c1);



/*
const a1 = Rx.Observable.from([2, 55])
    .zip(Rx.Observable.interval(1200), x => x);

const b1 = Rx.Observable.from([4, 20])
    .zip(Rx.Observable.interval(1500), x => x);

a1.combineLatest(b1, (x, y) => x + y)
    .subscribe(val => console.log("c1=" + val));
*/
