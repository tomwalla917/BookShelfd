import * as React from 'react';
import { defaultUser } from "../types/User.js";
import { useState, useEffect } from 'react';

function BookModal({ book, isOpen, onClose }) {
    if (!isOpen || !book) return null;

    const [reviewText, setReviewText] = useState('');
    const [savedReview, setSavedReview] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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
        if (defaultUser[listType].includes(book.title)) {
            alert(`"${book.title}" is already in your ${listType.replace("books", "").toLowerCase()} list.`);
        } else {
            defaultUser[listType].push(book);
            localStorage.setItem("user", JSON.stringify(defaultUser));
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
                        <div className="modal-review-user">
                            <p>user review</p>
                        </div>
                        <div className="modal-review-friends">
                            <p>Reviews</p>
                        </div>
                        <div className="modal-review-rating">
                            <h4>Your Review</h4>


                            {isEditing ? (

                                <>
                                    <textarea
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        placeholder='Write a review'
                                        rows="6"
                                        style={{ width: '100%', padding: '10px' }}
                                    />
                                    <button onClick={handleSaveReview}>
                                        Save Review
                                    </button>
                                    <button onClick={onClose}>
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
                                    <button onClick={handleEditReview}>
                                        Edit Review
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="modal-actions">
                    <button className="modal-button" onClick={() => addBookToList("booksToRead")}>Plan to Read</button>
                    <button className="modal-button" onClick={() => addBookToList("booksReading")}>Currently Reading</button>
                    <button className="modal-button" onClick={() => addBookToList("booksRead")}>Completed</button>
                    <button className="modal-button" onClick={() => writeReview()}>Write Review</button>
                    <button className="modal-button" onClick={onClose}>&times;</button>
                </div>

            </div>
        </div>
    );
}

export default BookModal;