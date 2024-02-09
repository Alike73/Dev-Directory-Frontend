import BookFilter from "../../filters/bookShelfFilters/BookFilter";
import BookSearchInput from "../../filters/bookShelfFilters/BookSearchInput";
import BookCard from "./BookCard";


const BookShelf = () => {

    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-center">
                <BookSearchInput />
            </div>
            <BookFilter />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 pt-5 g-3">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    )
};

export default BookShelf;