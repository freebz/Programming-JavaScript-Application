var validString = 'abc',
invalidString = 'abcd',

validArray = ['a', 'b', 'c'],
invalidArray = ['a', 'b', 'c', 'd'],

isValid = function isValid(char){
    return validString.indexOf(char) >= 0;
};

test('Array String generics', function (){
    ok(![].every.call(invalidString, isValid),
       'invalidString is rejected.');

    ok([].every.call(validString, isValid),
       'validString passes.');

    ok(![].every.call(invalidArray, isValid),
       'invalidArray is rejected.');
    
    ok([].every.call(validArray, isValid),
       'validArray passes.');
});


var num = 303;

test('String number generics', function (){
    var i = ''.indexOf.call(num, 0);
    ok(i === 1,
       'String methods work on numbers.');
});
