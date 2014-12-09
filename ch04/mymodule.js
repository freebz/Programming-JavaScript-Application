define(function () {
    'use strict';
    var api = {
	render: function render(container, view, css) {
	    loadCss('mymodule.css');
	    
	    $(view).text('Hello, world!')
		.appendTo(container);
	}
    };

    return api;
});
