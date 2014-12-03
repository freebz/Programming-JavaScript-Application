(function (){
    var arr = [],
    count = 1,
    delay = 20,
    timer,
    complete;

    timer = function timer() {
	setTimeout(function inner() {
	    arr.push(count);

	    if (count < 3) {
		count += 1;
		timer();
	    } else {
		complete();
	    }
	}, delay);
    };

    asyncTest('Closure with setTimeout.', function (){
	complete = function complete() {
	    equal(
		arr.join(','), '1,2,3',
		'arr should be [1,2,3]'
	    );
	    start();
	};

	timer();

	equal(
	    arr.length, 0,
	    'array should be empty until the first timeout.'
	);
    });
}());
