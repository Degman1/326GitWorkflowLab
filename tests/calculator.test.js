const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


// Add your tests here

// reciprocal
describe('Calculator Reciprocal', function() {
    const res = calculator.calculateReciprocal(4);
    it('should return 1/4', function() {
        assert.strictEqual(res, 1/4);
    });
});