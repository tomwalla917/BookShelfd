import * as React from 'react';
import { defaultUser } from "../types/User.js";
import { useState, useEffect } from 'react';

function FriendModal({ user, isOpen, onClose }) {
    if (!isOpen || !user) return null;

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