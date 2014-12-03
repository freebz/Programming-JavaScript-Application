var rotate = function rotate(arr) {
    arr.push(arr.shift());
    return arr;
}

test('Rotate', function (){
    var original = [1, 2, 3];
    
    deepEqual(rotate(original), [2, 3, 1],
	      'rotate() should ratate array elements.');

    // Fails! Original array gets mutated.
    deepEqual(original, [1, 2, 3],
	      'Should not mutate external data.');
});


var safeRotate = function safeRotate(arr) {
    var newArray = arr.slice(0);
    newArray.push(newArray.shift());
    return newArray;
}

test('safeRotate', function (){
    var original = [1, 2, 3];

    deepEqual(safeRotate(original), [2, 3, 1],
	      'safeRotate() should rotate array elements.');
    
    // Passes.
    deepEqual(original, [1, 2, 3],
	      'Should not mutate external data.');
});
