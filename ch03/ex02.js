var switchProto = {
    isOn: function isOn() {
	return this.state;
    },

    toggle: function toggle() {
	this.state = !this.state;
	return this;
    },

    meta: {
	name: 'Light switch'
    },

    state: false
},
switch1 = Object.create(switchProto),
switch2 = Object.create(switchProto);

test('Prototype mutations.', function () {
    switch2.meta.name = 'Breaker switch';

    equal(switch1.meta.name, 'Breaker switch',
	  'Object and array mutations are shared.'
	 );
    
    switch2.meta = { name: 'Power switch' };

    equal(switch1.meta.name, 'Breaker switch',
	  'Property replacement is instance-specific.'
	 );
});
