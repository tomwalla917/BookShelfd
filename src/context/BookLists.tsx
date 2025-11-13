import * as React from 'react';
import {useUser} from "./UserContext";
import {useState} from "react";
import BookModal from "../context/BookModal";

export default function UserBooks() {
    const { user } = useUser()
    const { booksReading, completedBooks, booksToRead } = user;

    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookClick = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    return (
        <div className="container mt-4">

            <div className="row g-4">
                {/* Currently Reading */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">Currently Reading</h3>
                            {booksReading.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {booksReading.map((book, index) => (
                                        <li key={index} className="list-group-item">
                                            <div className="row align-items-center"
                                                 onClick={() => handleBookClick(book)}>
                                                <div className="col-auto">
                                                    <img
                                                        src={book.coverUrl}
                                                        alt={book.title}
                                                        className="img-fluid"
                                                        width="50" />
                                                </div>
                                                <div className="col">
                                                    <strong>{book.title}</strong>
                                                    <br />
                                                    <small className="text-muted">{book.author}</small>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    List of books currently being read.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Finished Reading */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">Completed</h3>
                            {completedBooks.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {completedBooks.map((book, index) => (
                                        <li key={index} className="list-group-item">
                                            <div className="row align-items-center"
                                                 onClick={() => handleBookClick(book)}>
                                                <div className="col-auto">
                                                    <img
                                                        src={book.coverUrl}
                                                        alt={book.title}
                                                        className="img-fluid"
                                                        width="50" />
                                                </div>
                                                <div className="col">
                                                    <strong>{book.title}</strong>
                                                    <br />
                                                    <small className="text-muted">{book.author}</small>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    Books you’ve completed will go here.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Want to Read */}
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title">Want to Read</h3>
                            {booksToRead.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {booksToRead.map((book, index) => (
                                        <li key={index} className="list-group-item">
                                            <div className="row align-items-center"
                                                 onClick={() => handleBookClick(book)}>
                                                <div className="col-auto">
                                                    <img
                                                        src={book.coverUrl}
                                                        alt={book.title}
                                                        className="img-fluid"
                                                        width="50" />
                                                </div>
                                                <div className="col">
                                                    <strong>{book.title}</strong>
                                                    <br />
                                                    <small className="text-muted">{book.author}</small>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    Books you plan to read later.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <BookModal
                book={selectedBook}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}

