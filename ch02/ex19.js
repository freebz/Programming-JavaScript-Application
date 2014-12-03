var multiply = function multiply(x, y){
    return x * y;
},

partial = function partial(fn) {
    // Drop the function from the arguments list and
    // fix arguments in the closure.
    var args = [].slice.call(arguments, 1);

    // Return a new function with fixed arguments.
    return function() {
	// Combine fixed arguments with new arguments
	// and call fn with them.
	var combinedArgs = args.concat(
	    [].slice.call(arguments));
	return fn.apply(this, combinedArgs);
    };
},

double = partial(multiply, 2);

test('Partial application', function (){
    equal(double(4), 8,
	  'partial() works.');
});


var boundDouble = multiply.bind(null, 2);

test('Partial application with bind', function (){
    equal(boundDouble(4), 8,
	  '.bind() should allow partial application.');
});
