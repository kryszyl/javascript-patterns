class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You subscribed to ${fn.name}`);

    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You unsubscribed from ${fn.name}`);
    }
    fire() {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}



const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
    click.subscribe(getMillis);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
    click.unsubscribe(getMillis);
});

document.querySelector('.sub-s').addEventListener('click', function () {
    click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function () {
    click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire-event').addEventListener('click', function () {
    click.fire();
});

const getMillis = function () {
    console.log(`Current millis: ${new Date().getMilliseconds()}`);

}
const getCurSeconds = function () {
    console.log(`Current seconds: ${new Date().getSeconds()}`);

}