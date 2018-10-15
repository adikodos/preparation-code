const events = require('events');
const eventEmitter = new events.EventEmitter();

const listenerone = () => {
    console.log('listener one execute');
}

const listenertwo = () => {
    console.log('listener two execute');
}

eventEmitter.addListener('connection', listenerone);

eventEmitter.on('connection', listenertwo);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(`${eventListeners} Listner(s) listening to connection event`);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listenerone);
console.log('listenerone will not listen now.');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(`${eventListeners} listner(s) listening to connection event`);

console.log('program ended');
