var score = 6;

if (score > 5){
    function grade(){
	return 'pass';
    }
} else {
    function grade(){
	return 'fail';
    }
}

//module('Pass or Fail');

test('Conditional function declaration.', function(){
    
    // Firefox, IE11: Pass
    // Chrome, Safari, IE, Opera: Fail
    equal(grade(), 'pass',
	  'Grade should pass.');
});
