import { Link } from 'react-router-dom'
import { useState } from "react";
import BookModal from "../context/BookModal";

function Search() {
    const [formData, setFormData] = useState({
        author: '',
        title: '',
        genre: '',
    });

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const RESULTS_PER_PAGE = 10;


    const genres = [
        'Fiction',
        'Fantasy',
        'Science Fiction',
        'Mystery',
        'Thriller',
        'Romance',
        'Historical Fiction',
        'Horror',
        'Biography & Autobiography',
        'History',
        'Science',
        'Business & Economics',
        'Self-Help',
        'Religion',
        'Philosophy',
        'Psychology',
        'Cooking',
        'Travel',
        'Art',
        'Computers',
        'Education',
        'Medical',
        'True Crime'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSearch = async (page = 1) => {
        setLoading(true);
        setError('');

        try {
            let query = '';
            if (formData.title) query += `intitle:${formData.title}`;
            if (formData.author) query += `${query ? '+' : ''}inauthor:${formData.author}`;
            if (formData.genre) query += `${query ? '+' : ''}subject:${formData.genre}`;

            if (!query) {
                setError('Please select at least one criteria');
                setLoading(false);
                return;
            }

            const startIndex = (page - 1) * RESULTS_PER_PAGE;

            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${RESULTS_PER_PAGE}&startIndex=${startIndex}&key=${import.meta.env.VITE_GOOGLE_BOOKS}`
            );

            if (!response.ok) throw new Error('Failed to fetch books');

            const data = await response.json();

            let results = data.items || [];
            setTotalResults(data.totalItems || 0);

            const formattedBooks = results.map(book => {
                const info = book.volumeInfo;
                return {
                    title: info.title,
                    author: info.authors?.[0] || "Unknown",
                    coverUrl: info.imageLinks?.thumbnail,
                    pageCount: info.pageCount || "N/A",
                    categories: info.categories || "N/A",
                    description: info.description || "N/A"
                };
            });

            setBooks(formattedBooks);
            setCurrentPage(page);

            if (formattedBooks.length === 0) {
                setError('No Books were found matching your criteria');
            }

        } catch (err) {
            setError('Error fetching books try again');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    const handleClearForm = () => {
        handleCloseModal();
        setFormData({
            author: '',
            title: '',
            genre: '',
        });

        setBooks([]);
        setError('');
        setCurrentPage(1);
        setTotalResults(0);
    };


    const MAX_PAGES = 40;
    const totalPages = Math.min(Math.ceil(totalResults / RESULTS_PER_PAGE), MAX_PAGES);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handleSearch(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handleSearch(currentPage - 1);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(1);
        }
    };

    return (
        <>
            <div className="col-12">
                <div className="searchBar">
                    <div className="formFields">
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Author Name"
                        />

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Title"
                        />

                        <select
                            name="genre"
                            value={formData.genre}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            style={{ height: '40px', overflowY: 'auto' }}
                        >
                            <option value="">Select a genre</option>
                            {genres.map(genre => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>

                        <button className="submitButton"
                            onClick={() => handleSearch(1)}
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Search Books'}
                        </button>

                        <button
                            className="clearButton"
                            onClick={handleClearForm}
                            disabled={loading}
                        >
                            {'Reset Search'}
                        </button>
                    </div>
                </div>

                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            </div>

            {books.length > 0 && (
                <div className="col-12">
                   
                    <div className="book-grid-search">
                        {books.map((book, i) => (
                            <div
                                key={i}
                                className="book-card-search"
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
                 


                    <div className="pagination" style={{ marginTop: '20px', textAlign: 'center' }}>

                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1 || loading}
                            style={{ margin: '0 10px', padding: '8px 16px' }}
                        >
                            Previous
                        </button>
                        <span style={{ margin: '0 15px' }}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages || loading}
                            style={{ margin: '0 10px', padding: '8px 16px' }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            <BookModal
                book={selectedBook}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}

export default Search;