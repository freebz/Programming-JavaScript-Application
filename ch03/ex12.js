var stamp = stampit().methods({
    delegateMethod: function delegateMethod() {
	return 'shared property';
    }
}),
obj1 = stamp(),
obj2 = stamp();

Object.getPrototypeOf(obj1).delegateMethod = 
    function () {
	return 'altered';
    };

test('Prototype mutation', function () {
    equal(obj2.delegateMethod(), 'altered',
	  'Instances share the delegate prototype.');
});
