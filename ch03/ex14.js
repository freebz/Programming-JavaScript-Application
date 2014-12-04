var person = stampit().enclose(function () {
    var firstName = '',
    lastName = '';

    this.getName = function getName() {
	return firstName + ' ' + lastName;
    };

    this.setName = function setName(options) {
	firstName = options.firstName || '';
	lastName = options.lastName || '';
	return this;
    };
}),

jimi = person().setName({
    firstName: 'Jimi',
    lastName: 'Hendrix'
});

test('Init method', function () {
    
    equal(jimi.getName(), 'Jimi Hendrix',
	  'Object should be initialized.');

});
