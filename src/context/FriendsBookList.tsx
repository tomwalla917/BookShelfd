import * as React from 'react';
import {User} from "../types/User.js";

interface FriendsBooksProps {
    user: User;
}

const FriendsBookList: React.FC<FriendsBooksProps> = ({ user })=> {

    const { booksReading, completedBooks, booksToRead } = user;

    return (
        <div className="container mt-4">

            <div className="row g-4">

                {/* Want to Read */}
                <div>
                    <div className="card h-100 profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Want to Read</h3>
                            {booksToRead.length > 0 ? (
                                <ul className="row row-cols-2 g-2 list-unstyled">
                                    {booksToRead.map((book, index) => (
                                        <li key={index} className="col">
                                            <div className="book-card-friends p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <img
                                                            src={book.coverUrl}
                                                            alt={book.title}
                                                            className="shadow-lg"
                                                            height="75"/>
                                                    </div>
                                                    <div className="col">
                                                        <strong>{book.title}</strong>
                                                        <br/>
                                                        <small>{book.author}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    Books they plan to read later.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Currently Reading */}
                <div>
                    <div className="card h-100 profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Currently Reading</h3>
                            {booksReading.length > 0 ? (
                                <ul className="row row-cols-2 g-2 list-unstyled">
                                    {booksReading.map((book, index) => (
                                        <li key={index} className="col">
                                            <div className="book-card-friends p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <img
                                                            src={book.coverUrl}
                                                            alt={book.title}
                                                            className="shadow-lg"
                                                            height="75"/>
                                                    </div>
                                                    <div className="col">
                                                        <strong>{book.title}</strong>
                                                        <br/>
                                                        <small>{book.author}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    Books they plan to read later.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Finished Reading */}
                <div>
                    <div className="card h-100 profile-card">
                        <div className="card-body">
                            <h3 className="card-title">Completed</h3>
                            {completedBooks.length > 0 ? (
                                <ul className="row row-cols-2 g-2 list-unstyled">
                                    {completedBooks.map((book, index) => (
                                        <li key={index} className="col">
                                            <div className="book-card-friends p-2">
                                                <div className="row align-items-center">
                                                    <div className="col-auto">
                                                        <img
                                                            src={book.coverUrl}
                                                            alt={book.title}
                                                            className="shadow-lg"
                                                            height="75"/>
                                                    </div>
                                                    <div className="col">
                                                        <strong>{book.title}</strong>
                                                        <br/>
                                                        <small>{book.author}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted mb-0">
                                    Books they plan to read later.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FriendsBookList