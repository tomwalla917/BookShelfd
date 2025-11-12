import { useEffect, useState } from "react";
import BookModal from "./BookModal";

function TrendingBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const titles = [
    "A Game of Thrones",
    "Blood Meridian",
    "1984",
    "The Handmaid's Tale",
    "Conversations with Friends",
    "Slow Days, Fast Company"
  ];

  const STORAGE_KEY = "trendingBooks";
  const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  useEffect(() => {
    async function fetchBooks() {

      const cached = getFromCache();
      
      if (cached) {
        setBooks(cached);
        setLoading(false);
        return;
      }

      try {
        const fetched = await Promise.all(
          titles.map(async (title) => {
            try {
              const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`
              );
              
              if (!res.ok) {
                console.error(`Failed to fetch ${title}: ${res.status}`);
                return null;
              }
              
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
            } catch (error) {
              console.error(`Error fetching ${title}:`, error);
              return null;
            }
          })
        );

        const validBooks = fetched.filter(Boolean);
        setBooks(validBooks);
        
        saveToCache(validBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  function getFromCache() {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (!cached) return null;

      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      // Check if cache is expired
      if (now - timestamp > CACHE_DURATION) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return data;
    } catch (error) {
      console.error("Error reading from cache:", error);
      return null;
    }
  }

  function saveToCache(data) {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cacheData));
    } catch (error) {
      console.error("Error saving to cache:", error);
    }
  }
  
  function clearCache() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

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