var testObj = stampit(
    // methods
    {
	delegateMethod: function delegateMethod() {
	    return 'shared property';
	}
    },

    // state
    {
	instanceProp: 'instance property'
    },

    // enclose
    function () {
	var privateProp = 'private property';
	
	this.getPrivate = function getPrivate() {
	    return privateProp;
	}
    }).create();

test('Stampit with params', function () {
    equal(testObj.delegateMethod(), 'shared property',
	  'delegate methods should be reachable');

    ok(Object.getPrototypeOf(testObj).delegateMethod,
       'deledate methods should be stored on the ' +
       'delegate prototype');

    equal(testObj.instanceProp, 'instance property',
	  'state should be reachable.');

    ok(testObj.hasOwnProperty('instanceProp'),
       'state should be instance safe.');

    equal(test.hasOwnProperty('privateProp'), false,
	  'should hide private properties');

    equal(testObj.getPrivate(), 'private property',
	  'should support privileged methods');
});
