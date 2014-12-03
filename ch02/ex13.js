function sort() {
    var args = [].slice.call(arguments, 0);
    return args.sort();
}

test('Sort', function () {
    var result = sort('b', 'a', 'c');
    ok(result, ['a', 'b', 'c'], 'Sort works!');
});

function morph(options){
    var args = [].slice.call(arguments, 0),
    animals = 'turtles';  // Set a default

    if (typeof options === 'string'){
	animals = options;
	args.shift();
    }

    return('The pet store has ' + args + ' ' + animals
	   + '.');
}

test('Polymorphic branching.', function() {
    var test1 = morph('cats', 3),
    test2 = morph('dogs', 4),
    test3 = morph(2);

    equal(test1, 'The pet store has 3 cats.', '3 Cats.');
    equal(test2, 'The pet store has 4 dogs.', '$ Dogs.');
    equal(test3, 'The pet store has 2 turtles.',
	  'The pet store has 2 turtles.');
});
