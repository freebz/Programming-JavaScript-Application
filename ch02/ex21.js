var whenDataFetched = $.getJSON(
    'https://graph.facebook.com/jsapplications'
);

asyncTest('Ajax promise API', function (){
    whenDataFetched
    .done(function (response) {
	ok(response,
	   'The server returned data.');
	start();
    })
    .fail(function () {
	ok(true,
	   'There was an error.');
	start();
    });
});
