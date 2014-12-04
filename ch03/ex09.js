var carPrototype = {
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
    },
    color: 'pink',
    direction: 0,
    mph: 0
},

car = function car(options) {
    return extend(Object.create(carPrototype), options);
},

myCar = car({
    color: 'red'
});

test('Flyweight factory with cloning', function () {
    ok(Object.getPrototypeOf(myCar).gas,
       'Prototype methods are shared.'
      );
});
