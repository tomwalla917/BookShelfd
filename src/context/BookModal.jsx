function BookModal({ book, isOpen, onClose }) {
    if (!isOpen || !book) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
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

                    </div>
                    

                </div>
                <div className="modal-actions">
                        <button className="modal-button">Add to List</button>
                        <button className="modal-button">Write Review</button>
                        <button className="modal-button" onClick={onClose}>&times;</button>
                    </div>
            </div>
        </div>
    );
}

export default BookModal;