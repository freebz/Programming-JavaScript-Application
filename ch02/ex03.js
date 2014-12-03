test('Named function expressions.', function(){
    var a = function x(){
	ok(x, 'x() is usable inside the function.');
    };

    a();

    try {
	x();  // Error
    } catch(e){
	ok(true, 'x() is undefined outside the function.');
    }
});
