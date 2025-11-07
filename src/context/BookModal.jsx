function BookModal({book, isOpen, onClose}) {
    if (!isOpen || !book) return null;

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookModal;