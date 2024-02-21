import BookCardDetails from "./BookCardDetails";
import BookRibbon from "./BookRibbon";


const BookCard = ({ imgUrl, category, title, text, modalTargetId, updatingInInput, deleteBook, myPassword }) => {
    
    // https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg
    return (
        <div className="col d-flex justify-content-center align-items-center mb-5 pb-3">
            <div className="ribbon_box">
                <BookRibbon category = { category } />
                <div className="card">
                    <div className="poster">
                        <img src={ imgUrl } alt="Book cover illustration" />
                    </div>
                    <BookCardDetails
                        myPassword = { myPassword }
                        title = { title }
                        text = { text } 
                        modalTargetId = { modalTargetId } 
                        updatingInInput = { updatingInInput }
                        deleteBook = { deleteBook} 
                    />
                </div>
            </div>
        </div>
    )
};

export default BookCard;