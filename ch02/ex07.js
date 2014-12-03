(function (){
    var isOn = false,
    toggle = function toggle() {
	isOn = !isOn;
	return isOn;
    },
    getState = function getState(){
	// Implementation...
    },
    off = function off(){
	// Implementation...
    },
    on = function on(){
	// Implementation...
    },
    blink = function blink(){
	// Implementation...
    },

    lightbulb = {
	toggle: toggle,
	getState: getState,
	off: off,
	on: on,
	blink: blink
    };

    test('Prototypes with IIFE.', function(){
	equal(lightbulb.toggle(), true, 'Lightbulb turns on.');
	equal(lightbulb.toggle(), false, 'Lightbulb turns off.');
    });
}());
