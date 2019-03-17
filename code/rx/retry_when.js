let {Observable} = require('rxjs/Observable');
require('rxjs/add/observable/interval');
require('rxjs/add/observable/timer');
require('rxjs/add/operator/retryWhen');
require('rxjs/add/operator/delayWhen');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');

const example = Observable.interval(1000)
    .map(val => {
        if(val > Math.random()*10){

            throw val;
        }
        return val;
    })
    .retryWhen(errors => errors
            .do(val => console.log(`Element ${val} throws an error`))
            //retry in val seconds
            .delayWhen(val => Observable.timer(val * 1000))
    );

const subscribe = example.subscribe(console.log);
