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

switch1 = extend({}, switchProto),
switch2 = extend({}, switchProto);

test('Prototype clones.', function () {
    
    switch1.isOn.isShared = true;

    ok(!switch2.isShared,
       'Methods are copied for each instance, not shared.'
      );

    ok(switch1.toggle().isOn(),
       '.toggle() works.'
      );

    ok(!switch2.isOn(),
       'instance safe.'
      );

    switch2.meta.name = 'Breaker switch';

    equal(switch1.meta.name, 'Breaker switch',
	  'Object and array mutations are shared.'
	 );

    switch2.meta = { name: 'Power switch' };
    
    equal(switch1.meta.name, 'Breaker switch',
	  'Property replacement is instance-specific.'
	 );
});
