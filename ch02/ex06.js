var Lightbulb = function(){
    this.isOn = false;
},
lightbulb = new Lightbulb();

Lightbulb.prototype.toggle = function(){
    this.isOn = !this.isOn;
    return this.isOn;
};

Lightbulb.prototype.getState = function getState(){
    // Implementation...
};

Lightbulb.prototype.off = function off(){
    // Implementation...
};

Lightbulb.prototype.on = function on(){
    // Implementation...
};

Lightbulb.prototype.blink = function blink(){
    // Implementation...
};

test('Prototypes without IIFE.', function(){
    equal(lightbulb.toggle(), true, 'Lightbulb turns on.');
    equal(lightbulb.toggle(), false, 'Lightbulb turns off.');
});
