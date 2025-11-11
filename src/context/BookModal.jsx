import * as React from 'react';
import { defaultUser } from "../types/User.js";

function BookModal({ book, isOpen, onClose }) {
    if (!isOpen || !book) return null;

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

                        <h4>{book.title}</h4>
                        <p className="modal-author">by {book.author}</p>
                        <p className="modal-pages">Pages: {book.pageCount}</p>
                        <p className="modal-genre">Genre: {book.categories}</p>
                    </div>
                    <div className="modal-right-column">
                        <p className="modal-plot">Plot: {book.description}</p>

                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={() => addBookToList("booksToRead", {book})}>Plan to Read</button>
                    <button onClick={() => addBookToList("booksReading")}>Currently Reading</button>
                    <button onClick={() => addBookToList("booksRead")}>Completed</button>
                    <button className="modal-button">Write Review</button>
                    <button className="modal-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-actions">
                    <button className="modal-button">Add to List</button>

                </div>
            </div>
        </div>
    );
}

export default BookModal;