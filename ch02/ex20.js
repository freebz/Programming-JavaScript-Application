var $button = $('<button class="select">Click</button>')
.appendTo('body');

asyncTest('Async callback event listener.', function (){
    $button.on('click', function clicked(){
	ok(true, 'Button clicked.');
	start();
    });

    setTimeout(function timeOut(){
	$button.click();
	$button.remove();
    }, 20);
});
