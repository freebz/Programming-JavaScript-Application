var car = function car(color, direction, mph) {
    var isParkingBrakeOn = false;

    return {
	color: color || 'pink',
	direction: direction || 0,
	mph: mph || 0,
	gas: function gas(amount) {
	    amount = amount || 10;
	    this.mph += amount;
	    return this;
	},

	brake: function brake(amount) {
	    amount = amount || 10;
	    this.mph = ((this.mph - amount) < 0) ? 0
		: this.mph - amount;
	    return this;
	},

	toggleParkingBrake: function toggleParkingBrake() {
	    isParkingBrakeOn = !isParkingBrakeOn;
	    return this;
	},

	isParked: function isParked() {
	    return isParkingBrakeOn;
	}
    };
},
myCar = car('orange', 0, 5);

test('Factory with private variable.', function () {
    ok(myCar.color, 'Has a color');
    
    equal(myCar.gas().mph, 15,
	  '.accelerate() should add 10mph.'
	 );

    equal(myCar.brake(5).mph, 10,
	  '.brake(5) should subtract 5mph.'
	 );

    ok(myCar.toggleParkingBrake().isParked(),
       '.toggleParkingBrake() toggles on.');

    ok(!myCar.toggleParkingBrake().isParked(),
       '.toggleParkingBrake() toggles off.');
});
