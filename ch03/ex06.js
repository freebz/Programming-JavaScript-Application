var myCar = {
    color: 'pink',
    direction: 0,
    mph: 0,

    gas: function gas(amount) {
	amount = amount || 10;
	this.mph += amount;
	return this;
    },

    brake: function brake(amount) {
	amount = amount || 10;
	this.mph = ((this.mph - amount) < 0)? 0
	    : this.mph - amount;
	return this;
    }
};

test('Object literal notation.', function () {
    ok(myCar.color, 'Has a color');

    equal(myCar.gas().mph, 10,
	  '.accelerate() should add 10mph.'
	 );

    equal(myCar.brake(5).mph 5,
	  '.brake(5) should subtract 5mph.'
	 );
});
