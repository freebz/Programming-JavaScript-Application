function factory() {
    var highlander = {
	name: 'MacLeod'
    };

    return {
	get: function get() {
	    return highlander;
	}
    };
}

test('Singleton', function () {
    var singleton = factory();
    hero = singleton.get(),
    hero2 = singleton.get();

    hero.sword = 'Katana';
    
    // Since hero2.sword exists, you know it's the same
    // Object.
    ok(hero2.sword, 'There can be only one.');
});
