test('Function Scope', function(){
    var testDeclaration = false,
    foo;
    
    // This function gets erroneously overridden in IE8.
    function bar(arg1, bleed){
	if (bleed){

	    ok(false,
	       'Declaration bar() should NOT be callable from'
	       + ' inside the expression.');
	} else {
	    ok(true,
	       'Declaration bar() should be called outside the'
	       + 'expression.');
	}
	testDeclaration = true;
    }

    foo = function bar(declaration, recurse){
	if (recurse){

	    ok(true,
	       'Expression bar() should support sope safe'
	       + ' recursion');

	} else if (declaration === true) {
	    
	    ok(true,
	       'Expression bar() should be callable via foo()');
	    bar(false, true);

	} else {
	    
	    // Fails in IE8 and older
	    ok(false,
	       'Expression bar() should NOT be callable outside'
	       + ' the expression');
	}
    };

    bar();
    foo(true);

    // Fails in IE8 and older
    ok(testDeclaration,
       'The bar() declaration should NOT get overridden by'
       + ' the expression bar()');
});
