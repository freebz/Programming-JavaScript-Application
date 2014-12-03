var toArray = function toArray(obj){
    var arr = [],
    prop;

    for (prop in obj){
	if (obj.hasOwnProperty(prop)) {
	    arr.push(prop);
	}
    }
    return arr;
};

var randomItem = function randomItem(collection){
    var arr = ({}.toString.call(collection) !==
	       '[object Array]')
    ? toArray(collection)
    : collection;
    return arr[Math.floor(arr.length * Math.random())];
};

test('randomItem()', function (){
    var obj = {
	a: 'a',
	b: 'b',
	c: 'c'
    },
    arr = ['a', 'b', 'c'];
    
    ok(obj.hasOwnProperty(randomItem(obj)),
       'randomItem works on Objects.');
     
    ok(obj.hasOwnProperty(randomItem(arr)),
       'randomItem works on Arrays.');
});
