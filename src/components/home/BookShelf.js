import BookFilter from "../../filters/bookShelfFilters/BookFilter";
import BookSearchInput from "../../filters/bookShelfFilters/BookSearchInput";
import BookCard from "./BookCard";


const BookShelf = ({ myBooks, updatingInInput }) => {


    return (
        <div className="container pt-3">
            <div className="d-flex justify-content-center">
                <BookSearchInput />
            </div>
            <BookFilter />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5 g-3">
                { myBooks.map((book) => <BookCard 
                    key = { book._id }
                    modalTargetId = {"book" + book._id }
                    bookTargetId = { book.bookTargetId } 
                    imgUrl = { book.imgUrl } 
                    text = { book.text.substring(0, 184) + "..." }
                    updatingInInput = {() => updatingInInput(book._id, book.imgUrl, book.pdfUrl, book.category, book.bookTargetId, book.text)} 
                />)}
            </div>
        </div>
    )
};

export default BookShelf;