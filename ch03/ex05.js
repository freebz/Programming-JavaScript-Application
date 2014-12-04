function Car(color, direction, mph) {
    var isParkingBrakeOn = false;
    this.color = color || 'pink';
    this.direction = direction || 0;  // 0 = Straight ahead
    this.mph = mph || 0;

    this.gas = function gas(amount) {
	amount = amount || 10;
	this.mph += amount;
	return this;
    };

    this.brake = function brake(amount) {
	amount = amount || 10;
	this.mph = ((this.mph - amount) < 0)? 0
	    : this.mph - amount;
	return this;
    };

    this.toggleParkingBrake = function toggleParkingBrake() {
	isParkingBrakeOn = !isParkingBrakeOn;
	return this;
    };

    this.isParked = function isParked() {
	return isParkingBrakeOn;
    }
}

var myCar = new Car();

/*
test('Constructor', function () {
    ok(myCar.color, 'Has a color');

    equal(myCar.gas().mph, 10,
	  '.accelerate() should add 10mph.'
	 );

    equal(myCar.brake(5).mph, 5,
	  '.brake(5) should substract 5mph.'
	 );
});
*/

test('Constructor with private property.', function () {
    ok(myCar.color, 'Has a color');

    equal(myCar.gas().mph, 10,
	  '.accelerate() should add 10mph.'
	 );

    equal(myCar.brake(5).mph, 5,
	  '.brake(5) should substract 5mph.'
	 );

    ok(myCar.toggleParkingBrake().isParked(),
       '.toggleParkingBrake works.'
      );
});
