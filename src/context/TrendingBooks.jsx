import { useEffect, useState } from "react";
import BookModal from "./BookModal";

function TrendingBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titles = [
    "A Game of Thrones",
    "Blood Meridian",
    "1984",
    "The Handmaid's Tale",
    "Conversations with Friends",
    "Slow Days, Fast Company"
  ];

  useEffect(() => {
    async function fetchBooks() {
      const fetched = await Promise.all(
        titles.map(async (title) => {
          const res = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`
          );
          const data = await res.json();
          const info = data.items?.[0]?.volumeInfo;

          return info
            ? {
                title: info.title,
                author: info.authors?.[0] || "Unknown",
                coverUrl: info.imageLinks?.thumbnail,
                pageCount: info.pageCount || "N/A",
                categories: info.categories || "N/A",
                description: info.description || "N/A"
              }
            : null;
        })
      );

      setBooks(fetched.filter(Boolean));
    }

    fetchBooks();
  }, []);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="col-12">
      <div className="boxHome">
      <h2 className="section-title">Trending Books</h2>
      </div>
      <div className="book-grid">
        {books.map((book, i) => (
          <div 
            key={i} 
            className="book-card"
            onClick={() => handleBookClick(book)}
          >
            <img src={book.coverUrl} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h5>{book.title}</h5>
              <p>{book.author}</p>

            </div>
          </div>
        ))}
      </div>
      <BookModal 
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default TrendingBooks;