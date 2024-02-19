import BookCardDetails from "./BookCardDetails";


const BookCard = ({ imgUrl, text, modalTargetId, updatingInInput, deleteBook }) => {
    
    // https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg
    return (
        <div className="col d-flex justify-content-center align-items-center mb-5 pb-3">
            <div className="card">
                <div className="poster">
                    <img src={ imgUrl } alt="Book cover illustration" />
                </div>
                <BookCardDetails
                    text = { text } 
                    modalTargetId = { modalTargetId } 
                    updatingInInput = { updatingInInput }
                    deleteBook = { deleteBook} 
                />
            </div>
        </div>
    )
};

export default BookCard;