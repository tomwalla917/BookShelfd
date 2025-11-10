import * as React from 'react';

function BookModal({book, isOpen, onClose, user, setUser}) {
    if (!isOpen || !book) return null;

    const addBookToList = (listType) => {
        const current = user?.[listType] ??  [];
        if (user[listType].includes(book.title)) {
            alert(`"${book.title}" is already in your ${listType.replace("books", "").toLowerCase()} list.`);
        }

        setUser((prevUser) => ({
            ...prevUser,
            [listType]: [...prevUser[listType], book.title],
        }));

        alert(`"${book.title}" has been added to your ${listType.replace("books", "").toLowerCase()} list.`);
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <img src={book.coverUrl} alt={`${book.title} cover`} className="modal-cover"/>
                    <div className="modal-info">
                        <h2>{book.title}</h2>
                        <p className="modal-author">by {book.author}</p>
                        <p className="modal-pages">Pages: {book.pageCount}</p>
                        <p className="modal-genre">Genre: {book.categories}</p>
                        <p className="modal-plot">Plot: {book.description}</p>
                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={() => addBookToList("booksToRead")}>Plan to Read</button>
                    <button onClick={() => addBookToList("booksReading")}>Currently Reading</button>
                    <button onClick={() => addBookToList("booksRead")}>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;