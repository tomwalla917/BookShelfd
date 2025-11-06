

function TrendingBooks() {
    const books =[
        {
            id: 1, 
            title: "A Game of Thrones",
            author: "George R. R. Martin", 
            coverUrl: "http://books.google.com/books/content?id=hffZtgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        {
            id: 2, 
            title: "Blood Meridian",
            author: "Cormac McCarthy",
            coverUrl: "http://books.google.com/books/content?id=s-QzccStux4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            coverUrl: "http://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        {
            id: 4, 
            title: "The Handmaid's Tale",
            author: "Margaret Atwood",
            coverUrl: "http://books.google.com/books/content?id=ECuBswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        {
            id: 5, 
            title: "Conversations with Friends",
            author:  "Sally Rooney",
            coverUrl: "http://books.google.com/books/content?id=4ZQnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 6, 
            title: "Slow Days, Fast Company",
            author: "Eve Babitz",
            coverUrl: "http://books.google.com/books/content?id=iGA9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    ];

    return (
        <div className="col-12">
            <h2 className="section-title">Trending Books</h2>
            <div className="book-grid">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <img
                            src={book.coverUrl}
                            alt={`${book.title} cover`}
                            className="book-cover"
                        />
                        <div className="book-info">
                            <h5 className="book-title">{book.title}</h5>
                            <p className="book-author">{book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingBooks;