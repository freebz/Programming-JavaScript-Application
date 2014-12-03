var shows = [
    {
	artist: 'Kreap',
	city: 'Melbourne',
	ticketPrice: '40'
    },
    {
	artist: 'DJ EQ',
	city: 'Paris',
	ticketPrice: '38'
    },
    {
	artist: 'Treasure Fingers',
	city: 'London',
	ticketPrice: '60'
    }
],
books = [
    {
	title: 'How to DJ Proper',
	price: '18'
    },
    {
	title: 'Music Marketing for Dummies',
	price: '26'
    },
    {
	title: 'Turntablism for Beginners',
	price: '15'
    }
];

test('Datatype abstraction', function (){
    var sortedShows = shows.sort(function (a, b){
	return a.ticketPrice < b.ticketPrice;
    });
    sortedBooks = books.sort(function (a, b){
	return a.price < b.price;
    });
    ok(sortedShows[0].ticketPrice >
       sortedShows[2].ticketPrice,
       'Shows sorted correctly.');
    ok(sortedBooks[0].price >
       sortedBooks[1].price,
       'Books sorted correctly.');
});


test('Traditional for loop', function (){
    var i,
    length = books.length;

    for (i = 0; i < length; i++) {
	books[i].category = 'music';
    }

    ok(books[0].category === 'music',
       'Books have categories.');
});


test('Iterator abstraction', function (){
    books.forEach(function (book){
	book.category = 'music';
    });

    ok(books[0].category === 'music',
       'Books have categories.');
});
