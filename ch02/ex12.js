var userProto = {
    name: '',
    email: '',
    alias: '',
    showInSearch: true,
    colorScheme: 'light'
};

function createUser(name, email, alias, showInSearch, colorScheme) {
    return {
	name: name || userProto.name,
	email: email || userProto.email,
	alias: alias || userProto.alias,
	showInSearch: showInSearch,
	colorScheme: colorScheme || userProto.colorScheme
    };
}

test('User account creation', function () {
    var newUser = createUser('Tonya', '', '', '', 'dark');

    equal(newUser.colorScheme, 'dark',
	  'colorScheme stored correctly.');
});
