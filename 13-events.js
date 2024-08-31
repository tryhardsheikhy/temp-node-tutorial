const EventEmitter = require('events');

const customEmitter = new EventEmitter ()

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} `)
})

customEmitter.on('response', (name, id) => {
  console.log(`some other logic here ${id}`)
})



customEmitter.emit ('response', 'john', 34);