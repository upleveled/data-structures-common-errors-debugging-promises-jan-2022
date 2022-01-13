import authenticate from './util/auth.js';
import logUser, { magicNumber } from './util/index.js';
import { sum } from './util/math/sum.js';

// Old CommonJS format (you don't need to use this)
// const authenticate = require( './util/auth.js');
// const logUser, { magicNumber } = require( './util/index.js');
// const { sum } = require( './util/math/sum.js');

console.log('logUser', logUser);
console.log('magicNumber', magicNumber);
console.log('sum', sum);
console.log('authenticate', authenticate);
