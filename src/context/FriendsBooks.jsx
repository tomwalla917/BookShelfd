

function FriendsBooks () {
    const books =[
        {
            id: 1, 
            title: "The Song of Achilles",
            author: "Madeline Miller",
            coverUrl: "http://books.google.com/books/content?id=szMU9omwV0wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"

        },
        {
            id: 2,
            title: "Between Two Fires",
            author: "Christopher Buehlman",
            coverUrl: "http://books.google.com/books/content?id=YetvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 3,
            title: "The Man in the High Castle",
            author: "Philip K. Dick",
            coverUrl:"http://books.google.com/books/content?id=NtukmPtq2l8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 4,
            title: "Frankenstein",
            author: "Mary Shelley",
            coverUrl: "http://books.google.com/books/content?id=9xHCAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 5,
            title: "We Share the Sun",
            author: "Sarah Gearhart",
            coverUrl: "http://books.google.com/books/content?id=qvN0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        {
            id: 6,
            title: "When Breath Becomes Air",
            author: "Paul Kalanithi",
            coverUrl: "http://books.google.com/books/content?id=Dg1sCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    ];

    return (
        <div className="col-12">
            <h2 className="section-title">Books Popular With Your Friends</h2>
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

export default FriendsBooks;

