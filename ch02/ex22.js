var timer = function timer(delay) {
    var whenTimedOut = $.Deferred(),
    promise = whenTimedOut.promise();

    promise.cancel = function (payload){
	whenTimedOut.reject(payload);
    };

    setTimeout(function (){
	whenTimedOut.resolve();
    }, delay);

    return promise;
};

asyncTest('Deferred', function (){
    var startTime = new Date(),
    delay = 30,
    afterTimeout = 50,
    cancelTime = 100,
    myTimer = timer(delay),
    cancelTimer = timer(cancelTime);

    expect(4);

    myTimer.done(function (){
	ok(true,
	   'First callback fired.');
    });

    myTimer.done(function (){
	var now = new Date();
	ok((now - startTime) > delay,
	   'Delay works.'
	  );
    });

    setTimeout(function (){
	ok(true,
	   'Fires after timeout expires.');
    }, afterTimeout);

    setTimeout(function (){
	start();
    }, afterTimeout + 20);

    cancelTimer
    .done(function (){
	ok(false,
	   'A canceled timer should NOT run .done().');
    })
    .fail(function (){
	ok(true,
	   'A canceled timer calls .fail().');
    })
    .cancel();
});
