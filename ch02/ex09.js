test('Function declaration hoisting', function(){
    function number(){
	return 1;
    }

    (function (){
	equal(number(), 2, 'Inner scope wins.');
	
	function number(){
	    return 2;
	}
    }());

    equal(number(), 1, 'Outer scope still works.');
});

test('Function declaration hoisted.', function(){
    function number(){
	return 1;
    }

    (function (){
	function number(){
	    return 2;
	}

	equal(number(), 2, 'Inner scope wins.');
    }());

    equal(number(), 1, 'Outer scope still works.');
});

test('Function expression hoisting', function (){
    function number(){
	return 1;
    }

    (function (){
	try {
	    number();
	} catch(e) {
	    ok(true, 'number() is undefined.');
	}

	var number = function number(){
	    return 2;
	}

	equal(number(), 2, 'inner() is defined now.');
    }());

    equal(number(), 1, 'Outer scope still works.');
});
