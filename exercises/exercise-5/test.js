const assert = require('assert');

function testFunction() {
  return 100;
}

console.log('Executed tests');
assert(testFunction() > 1000);
