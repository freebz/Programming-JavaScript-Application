define(['amd1.js', 'amd2.js'],
       function myModule(amd1, amd2) {
	   var testResults = {
	       test1: amd1.test(),
	       test2: amd2.test()
	   },

	   // Define a public API for your module:
	   api = {
	       testResults: function () {
		   return testResults;
	       }
	   };

	   return api;
});

require(['ex05'], function (amd) {
    var results = amd.testResults();

    test('AMD with Require.js', function () {
	equal(results.test1, true,
	      'First dependency loaded correctly.');

	equal(results.test2, true,
	      'Second dependency loaded correctly.');
    });
});
