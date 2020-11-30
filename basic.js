// console.log('Hello');

// const math = require('./math');
// const Person = require('./person');
const Logger = require('./logger');

// console.log(math.foo   (1,2));
// const person1 = new Person('John Doe', 30);
// person1.greetings();

const logger = new Logger();
logger.on('message', (data) => console.log('called listener', data ));

logger.log('Hello');