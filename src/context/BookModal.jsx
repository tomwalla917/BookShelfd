function BookModal({ book, isOpen, onClose }) {
    if (!isOpen || !book) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    <div className="modal-left-column">
                        <img src={book.coverUrl} alt={`${book.title} cover`} className="modal-cover" />

                        <h2>{book.title}</h2>
                        <p className="modal-author">by {book.author}</p>
                        <p className="modal-pages">Pages: {book.pageCount}</p>
                        <p className="modal-genre">Genre: {book.categories}</p>
                    </div>
                    <div className="modal-right-column">
                        <p className="modal-plot">Plot: {book.description}</p>
                        <button>Add to List</button>
                        <button>Write Review</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookModal;