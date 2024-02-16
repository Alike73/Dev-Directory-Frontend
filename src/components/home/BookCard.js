import BookCardDetails from "./BookCardDetails";


const BookCard = ({ imgUrl, text, bookTargetId, modalTargetId, updatingInInput }) => {

    // https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg
    return (
        <div className="col d-flex justify-content-center align-items-center mb-5 pb-3">
            <div className="card">
                <div className="poster">
                    <img src={ imgUrl } alt="Book cover illustration" />
                </div>
                <BookCardDetails 
                    text = { text } 
                    bookTargetId = { bookTargetId }
                    modalTargetId = { modalTargetId } 
                    updatingInInput = { updatingInInput } 
                />
            </div>
        </div>
    )
};

export default BookCard;