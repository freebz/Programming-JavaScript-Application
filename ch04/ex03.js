(function (exports) {
    var api = {
	moduleExists: function test() {
	    return true;
	}
    };
    $.extend(exports, api);
}((typeof exports === 'undefined') ?
  window : exports));

test('Pass in exports.', function () {
    ok(moduleExists(),
       'The module exists.');
});
