var switchProto = {
    isOn: function isOn() {
	return this.state;
    },

    toggle: function toggle() {
	this.state = !this.state;
	return this;
    },

    state: false
},

switch1 = Object.create(switchProto),
switch2 = Object.create(switchProto);

test('Object.create', function () {
    ok(switch1.toggle().isOn(),
       '.toggle() works.'
      );

    ok(!switch2.isOn(),
       'instance safe.'
      );
});
