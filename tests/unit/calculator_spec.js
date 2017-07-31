var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });


  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should know which number has been clicked', function(){
    calculator.numberClick(3)
    assert.equal(3, calculator.runningTotal);
  })

  it('should know which operator has been clicked', function(){
    calculator.operatorClick('*');
    assert.equal('*', calculator.previousOperator);
  })

  it('should add numbers to the runningTotal when add is called', function(){
    calculator.add(1);
    calculator.operatorClick('=');
    assert.equal(1, calculator.runningTotal);
  })

  it('should add more than one number to runningTotal', function(){
    calculator.add(1);
    calculator.operatorClick('=');
    calculator.add(1);
    calculator.operatorClick('=');
    assert.equal(2, calculator.runningTotal);
  })

  it('should remove number from runningTotal when subtract is called', function(){
    calculator.add(2);
    calculator.operatorClick('=');
    calculator.subtract(1);
    calculator.operatorClick('=');
    assert.equal(1, calculator.runningTotal);
  })

  it('should multiply numbers when multiply is called', function(){
    calculator.add(2);
    calculator.operatorClick('=');
    calculator.multiply(3);
    calculator.operatorClick('=');
    assert.equal(6, calculator.runningTotal);
  })

  it('should divide numbers when divide is called', function(){
    calculator.add(6);
    calculator.operatorClick('=');
    calculator.divide(3);
    calculator.operatorClick('=');
    assert.equal(2, calculator.runningTotal);
  })

  it('should clear number when clearClick is called', function(){
    calculator.add(6);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })






});
