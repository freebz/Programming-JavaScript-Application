var app = {};

(function (exports) {

    (function (exports) {
	var api = {
	    moduleExists: function test() {
		return true;
	    }
	};
	$.extend(exports, api);
    }((typeof exports === 'undefined') ?
      window : exports));

}(app));

test('Pass app as exports.', function () {
    ok(app.moduleExists(),
       'The module exists.');
});
