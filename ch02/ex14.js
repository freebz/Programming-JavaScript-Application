var methods = {
    init: function (args){
	return 'initializing...';
    },
    hello: function (args){
	return 'Hello, ' + args;
    },
    goodbye: function (args){
	return 'Goodbye, cruel ' + args;
    }
},
greet = function greet(options){
    var args = [].slice.call(arguments, 0),
    initialized = false,
    action = 'init';  // init will run by default

    if (typeof options === 'string' &&
	typeof methods[options] === 'function'){
	
	action = options;
	args.shift();
    }

    return methods[action](args);
};

test('Dynamic dispatch', function (){
    var test1 = greet(),
    test2 = greet('hello', 'world!'),
    test3 = greet('goodbye', 'world!');

    equal(test2, 'Hello, world!',
	  'Dispatched to hello method.');

    equal(test3, 'Goodbye, cruel world!',
	  'Dispatched to goodbye method.');
});
