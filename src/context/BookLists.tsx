import * as React from 'react';
import {useUser} from "./UserContext";

export default function UserBooks() {
    const { user } = useUser()
    const { booksReading, booksRead, booksToRead } = user;

    return (
        <div className="container mt-4">

            <div className="row g-4">
                {/* Currently Reading */}
                <div className="col-md-4">
                    <div className="profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Currently Reading</h3>
                            {booksReading.length > 0 ? (
                                <ul className="book-grid" onClick={() => handleBookClick(book)}>
                                    {booksReading.map((book, index) => (
                                        <li key={index} className="profile-book-card">
                                            <img src={book.coverUrl} alt={book.title} className="book-cover" />
                                            <h5>{book.title}</h5>
                                            <p className="list-group-item">{book.author}</p>
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
                    <div className="profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Completed</h3>
                            {booksRead.length > 0 ? (
                                <ul className="book-grid">
                                    {booksRead.map((book, index) => (
                                        <li key={index} className="book-card">
                                            <img src={book.coverUrl} alt={book.title} className="book-cover" />
                                            <h5>{book.title}</h5>
                                            <p className="list-group-item">{book.author}</p>
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
                    <div className="profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Want to Read</h3>
                            {booksToRead.length > 0 ? (
                                <ul className="book-grid">
                                    {booksToRead.map((book, index) => (
                                        <li key={index} className="book-card">
                                            <img src={book.coverUrl} alt={book.title} className="book-cover" />
                                            <h5>{book.title}</h5>
                                            <p className="list-group-item">{book.author}</p>
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
        </div>
    );
}

