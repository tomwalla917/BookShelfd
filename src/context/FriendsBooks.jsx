import { useEffect, useState } from "react";
import BookModal from "./BookModal";

function FriendsBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titles = [
    "The Song of Achilles",
    "Between Two Fires",
    "The Man in the High Castle",
    "Frankenstein",
    "We Share the Sun",
    "When Breath Becomes Air"
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
      <h2 className="section-title">Friends Books</h2>
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

export default FriendsBooks;