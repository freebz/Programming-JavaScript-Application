var person = stampit().state({name: ''}),
jimi = person({name: 'Jimi Hendrix'});

test('Initialization', function () {
    
    equal(jimi.name, 'Jimi Hendrix',
	  'Object should be initialized.');
    
});
