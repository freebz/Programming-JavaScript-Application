function highPass(number, cutoff){
    cutoff = cutoff || this.cutoff;
    return (number >= cutoff);
}

var filter1 = {
    highPass: highPass,
    cutoff: 5
},
filter2 = {
    // No highPass here!
    cutoff: 3
};

test('Invoking a function.', function(){
    var result = highPass(6, 5);
    
    equal(result, true,
	  '6 > 5 should be true.');
});

test('Invoking a method.', function(){
    var result1 = filter1.highPass(3),
    result2 = highPass.call(filter2, 3),
    result3 = filter1.highPass(6);
    
    equal(result1, false,
	  '3 >= filter1.cutoff should be false.');
    
    equal(result2, true,
	  '3 >= filter2.cutoff should be true.');

    equal(result3, true,
	  '6 >= filter1.cutoff should be true.');
});
