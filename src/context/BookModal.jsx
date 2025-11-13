import * as React from 'react';
import { defaultUser } from "../types/User.js";
import { useState, useEffect } from 'react';

function BookModal({ book, isOpen, onClose }) {
    if (!isOpen || !book) return null;

    const [reviewText, setReviewText] = useState('');
    const [savedReview, setSavedReview] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [bookLists, setBookLists] = useState({
        booksToRead: false,
        booksReading: false,
        completedBooks: false
    });

    useEffect(() => {
        if (book && book.title) {
            const storedReview = localStorage.getItem(`review-${book.title}`);
            if (storedReview) {
                try {
                    const parsedReview = JSON.parse(storedReview);
                    setSavedReview(parsedReview);
                    setReviewText(parsedReview.text);
                } catch (error) {
                    console.error('Error loading review:', error);
                }
            } else {
                setSavedReview(null);
                setReviewText('');
            }

            setBookLists({
                booksToRead: defaultUser.booksToRead.some(b => b.title === book.title),
                booksReading: defaultUser.booksReading.some(b => b.title === book.title),
                completedBooks: defaultUser.completedBooks.some(b => b.title === book.title)
            });
            setIsEditing(false);
        }
    }, [book?.title, isOpen]);

    const handleSaveReview = () => {
        const review = {
            title: book.title,
            text: reviewText,
            date: new Date().toISOString()
        };
        console.log('Saving review:', review);
        localStorage.setItem(`review-${book.title}`, JSON.stringify(review));
        setSavedReview(review);
        setIsEditing(false);
        setReviewText('');
    };

    const handleEditReview = () => {
        setIsEditing(true);
    };

    const addBookToList = (listType) => {
        const isInList = defaultUser[listType].some(b => b.title === book.title);
        
        if (isInList) {
            alert(`"${book.title}" is already in your ${listType.replace("books", "").toLowerCase()} list.`);
        } else {
            defaultUser[listType].push(book);
            localStorage.setItem("user", JSON.stringify(defaultUser));

            setBookLists(prev => ({
                ...prev,
                [listType]: true
            }));
        }
    }

    return (
       <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                <div className="modal-body">
                    <div className="modal-left-column">
                        <img src={book.coverUrl} alt={`${book.title} cover`} className="modal-cover" />
                    </div>
                    <div className="modal-right-column">
                        <h4>{book.title}</h4>
                        <p className="modal-author">by {book.author}</p>
                        <p className="modal-pages">Pages: {book.pageCount}</p>
                        <p className="modal-genre">Genre: {book.categories}</p>
                        <p className="modal-plot">Plot: {book.description}</p>
                    </div>
                    <div className="modal-reviews">

                        <div className="modal-review-friends">
                            <h4>Reviews</h4>
                        </div>
                        <div className="modal-review-rating">
                            <h6>Your Review:</h6>

                            {isEditing ? (
                                <>
                                    <textarea
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        placeholder='Write a review'
                                        rows="6"
                                        style={{ width: '80%', padding: '10px' }}
                                    />
                                    <button className="modal-button" onClick={handleSaveReview}>
                                        Save Review
                                    </button>
                                    <button className="modal-button" style={{margin: '.5rem'}} onClick={onClose}>
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <p>{savedReview?.text}</p>
                                        <small style={{ color: '#666' }}>
                                            Saved on: {savedReview?.date ? new Date(savedReview.date).toLocaleDateString() : ''}
                                        </small>
                                    </div>
                                    <button className="modal-button"onClick={handleEditReview}>
                                        Edit Review
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="modal-actions">
                    <button 
                        className="modal-button" 
                        onClick={() => addBookToList("booksToRead")}
                        disabled={bookLists.booksToRead}
                        style={{ 
                            opacity: bookLists.booksToRead ? 0.5 : 1,
                            cursor: bookLists.booksToRead ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {bookLists.booksToRead ? '✓ Added to Read' : 'Plan to Read'}
                    </button>
                    <button 
                        className="modal-button" 
                        onClick={() => addBookToList("booksReading")}
                        disabled={bookLists.booksReading}
                        style={{ 
                            opacity: bookLists.booksReading ? 0.5 : 1,
                            cursor: bookLists.booksReading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {bookLists.booksReading ? '✓ Currently Reading' : 'Currently Reading'}
                    </button>
                    <button 
                        className="modal-button" 
                        onClick={() => addBookToList("completedBooks")}
                        disabled={bookLists.completedBooks}
                        style={{ 
                            opacity: bookLists.completedBooks ? 0.5 : 1,
                            cursor: bookLists.completedBooks ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {bookLists.completedBooks ? '✓ Completed' : 'Completed'}
                    </button>
                    <button className="modal-button" onClick={onClose}>&times;</button>
                </div>

            </div>
        </div>
    );
}

export default BookModal;