import * as React from 'react';
import {defaultUser} from "../types/User.js";

export default function UserBooks() {
    const { booksReading, booksRead, booksToRead } = defaultUser;

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
                                            <strong>{book.title}</strong>
                                            <br />
                                            <small className="text-muted">{book.author}</small>
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
                            {booksRead.length > 0 ? (
                                <ul className="list-group list-group-flush">
                                    {booksRead.map((book, index) => (
                                        <li key={index} className="list-group-item">
                                            <strong>{book.title}</strong>
                                            <br />
                                            <small className="text-muted">{book.author}</small>
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
                                            <strong>{book.title}</strong>
                                            <br />
                                            <small className="text-muted">{book.author}</small>
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

