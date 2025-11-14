import * as React from 'react';
import { defaultUser } from "../types/User.js";
import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

function BookModal({ book, isOpen, onClose, onBookListChange }) {
    if (!isOpen || !book) return null;

    const [reviewText, setReviewText] = useState('');
    const [savedReview, setSavedReview] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [currentList, setCurrentList] = useState(null);
    const [rating, setRating] = useState(0);
    const handleRatingChange = (rate) => {
        setRating(rate);
        localStorage.setItem(`rating-${book.title}`, rate);
    };

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

            if (defaultUser.booksToRead.some(b => b.title === book.title)) {
                setCurrentList('booksToRead');
            } else if (defaultUser.booksReading.some(b => b.title === book.title)) {
                setCurrentList('booksReading');
            } else if (defaultUser.completedBooks.some(b => b.title === book.title)) {
                setCurrentList('completedBooks');
            } else {
                setCurrentList(null);
            }
            setIsEditing(false);

            if (book && book.title) {
                const stored = localStorage.getItem(`rating-${book.title}`);
                setRating(stored ? Number(stored) : 0);
            }
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
        // Remove book from all lists first
        defaultUser.booksToRead = defaultUser.booksToRead.filter(b => b.title !== book.title);
        defaultUser.booksReading = defaultUser.booksReading.filter(b => b.title !== book.title);
        defaultUser.completedBooks = defaultUser.completedBooks.filter(b => b.title !== book.title);

        // Add to the selected list
        defaultUser[listType].push(book);
        localStorage.setItem("user", JSON.stringify(defaultUser));

        // Update the current list state
        setCurrentList(listType);

        if (onBookListChange) {
            onBookListChange();
        }
    };

    const getButtonText = (listType) => {
        if (currentList === listType) {
            // This is the current list
            if (listType === 'booksToRead') return '✓ Want to Read';
            if (listType === 'booksReading') return '✓ Currently Reading';
            if (listType === 'completedBooks') return '✓ Completed';
        } else {
            // Show "Move to..." for other lists
            if (listType === 'booksToRead') return currentList ? 'Move to Want to Read' : 'Want to Read';
            if (listType === 'booksReading') return currentList ? 'Move to Currently Reading' : 'Currently Reading';
            if (listType === 'completedBooks') return currentList ? 'Move to Completed' : 'Completed';
        }
    };
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
                            <Rating
                                onClick={handleRatingChange}
                                initialValue={rating}
                                size={30}
                                allowFraction={true}
                                fillColor="#ffd700"
                            />
                            <p>Your current rating: {rating}</p>
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
                                    <button className="modal-button" style={{ margin: '.5rem' }} onClick={onClose}>
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
                                    <button className="modal-button" onClick={handleEditReview}>
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
                        disabled={currentList === 'booksToRead'}
                        style={{
                            opacity: currentList === 'booksToRead' ? 0.6 : 1,
                            cursor: currentList === 'booksToRead' ? 'default' : 'pointer',
                            backgroundColor: currentList === 'booksToRead' ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {getButtonText('booksToRead')}
                    </button>
                    <button
                        className="modal-button"
                        onClick={() => addBookToList("booksReading")}
                        disabled={currentList === 'booksReading'}
                        style={{
                            opacity: currentList === 'booksReading' ? 0.6 : 1,
                            cursor: currentList === 'booksReading' ? 'default' : 'pointer',
                            backgroundColor: currentList === 'booksReading' ? 'rgba(33, 150, 243, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {getButtonText('booksReading')}
                    </button>
                    <button
                        className="modal-button"
                        onClick={() => addBookToList("completedBooks")}
                        disabled={currentList === 'completedBooks'}
                        style={{
                            opacity: currentList === 'completedBooks' ? 0.6 : 1,
                            cursor: currentList === 'completedBooks' ? 'default' : 'pointer',
                            backgroundColor: currentList === 'completedBooks' ? 'rgba(156, 39, 176, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        {getButtonText('completedBooks')}
                    </button>
                    <button className="modal-button" onClick={onClose}>&times;</button>
                </div>

            </div>
        </div>
    );
}

export default BookModal;