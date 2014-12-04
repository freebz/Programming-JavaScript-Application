var enemyPrototype = {
    name: 'Wolf',
    position: {  // Override this with setPosition
	x: 0,
	y: 0
    },
    setPosition: function setPosition (x, y) {
	this.position = {
	    x: x,
	    y: y
	};
	return this;
    },
    health: 20,  // Overrides automatically on change
    bite: function bite() {
    },
    evade: function evade() {
    }
},

spawnEnemy = function () {
    return Object.create(enemyPrototype);
};

test('Flyweight pattern.', function () {
    var wolf1 = spawnEnemy(),
    wolf2 = spawnEnemy();

    wolf1.health = 5;
    ok(wolf2.health = 20,
       'Primitives override automatically.');

    ok(wolf1.setPosition(10, 10)
       .position.x === 10, 'Object override works.');
    equal(wolf2.position.x, 0,
	  'The prototype should remain unchanged.');
});
