'use strict';
require(['mymodule.js', 'text!mymodule.html'],
	function (myModule, view) {
	    var container = document.body,
	    css = 'mymodule.css';

	    myModule.render(container, view, css);

	    test('AMD Plugins', function () {
		equal($('#mymodule').text(), 'Hello, world!',
		      'Plugin loading works.');
	    });
	});
