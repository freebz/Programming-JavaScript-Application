var o = function o (){
    var data = 1,
    get;

    get = function get(){
	return data;
    };

    return {
	get: get
    };
};

test('Closure for object privacy.', function (){
    var obj = o();  // Get an object with the .get() method.

    try {
	ok(data, 'This throws an error.');
    } catch (e) {
	ok(true, 'The data var is only available'
	   + ' to privileged methods.');
    }

    equal(
	obj.get(), 1,
	'.get() should have access to the closure.'
    );
});
