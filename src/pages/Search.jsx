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



    const handleSearch = async () => {
        setLoading(true);
        setError('');
        setBooks([]);

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

            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`
            );

            if (!response.ok) throw new Error('Failed to fetch books');

            const data = await response.json();

            let results = data.items || [];


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
            }).slice(0, 20);

            setBooks(formattedBooks);

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
    };

    return (
        <>
            <div className="col-12">
                <div className="authorForm">
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Author Name"
                    />
                </div>
                <div className="titleForm">
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                </div>
                <div className="genreForm">
                    <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        style={{height: '40px', overflowY: 'auto'}}
                    >
                        <option value="">Select a genre</option>
                        {genres.map(genre => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>

                <button className="submitButton"
                    onClick={handleSearch}
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

                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            </div>

            {books.length > 0 && (
                <div className="col-12">
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