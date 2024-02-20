import { useSelector } from "react-redux";
import { deleteBook } from "../../api/FetchBooks";
import BookFilter from "../../filters/bookShelfFilters/BookFilter";
import BookSearchInput from "../../filters/bookShelfFilters/BookSearchInput";
import BookCard from "./BookCard";
import { getSelectedBookCategory } from "../../redux/BookSlice";
import { getSearchBookTerm } from "../../redux/SearchBookSlice";


const BookShelf = ({ myBooks, setMyBooks, updatingInInput, myPassword }) => {

    const searchBookTerm = useSelector(getSearchBookTerm);
    const selectedBookCategory = useSelector(getSelectedBookCategory);

    // Filtered notes based on selected category and search term
    const filteredBooks = myBooks
        .filter((book) => {
            if (selectedBookCategory === 'ALL') return true;
            return selectedBookCategory === book.category;
        })
        .filter((book) => {
            if (searchBookTerm === '') return true;
            return book.title.toLowerCase().includes(searchBookTerm.toLowerCase());
    });

    return (
        <div className="container pt-3">
            <div className="d-flex justify-content-center">
                <BookSearchInput />
            </div>
            <BookFilter />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5 g-3">
                { filteredBooks.map((book) => <BookCard
                    myPassword = { myPassword } 
                    key = { book._id }
                    modalTargetId = {"book" + book._id } 
                    imgUrl = { book.imgUrl } 
                    text = { book.text.substring(0, 164) + "..." }
                    updatingInInput = {() => updatingInInput(book._id, book.imgUrl, book.pdfUrl, book.category, book.text)}
                    deleteBook={() => deleteBook(book._id, setMyBooks)} 
                />)}
            </div>
        </div>
    )
};

export default BookShelf;