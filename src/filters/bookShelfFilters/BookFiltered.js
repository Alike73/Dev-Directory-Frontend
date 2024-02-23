import { useDispatch, useSelector } from "react-redux";
import { filterBookCategory, getSelectedBookCategory } from "../../redux/BookSlice";
import { setSearchBookTerm } from "../../redux/SearchBookSlice";


const BookFiltered = ({ category }) => {

    const selectedBookCategory = useSelector(getSelectedBookCategory);
    const dispatch = useDispatch();

    const handleFilterBookCategory = () => {
        dispatch(filterBookCategory(category))
        dispatch(setSearchBookTerm(''))
    };

    return (
        <button 
            className={ `btn btn-sm rounded-pill px-3 category_btn ${ 
                selectedBookCategory === category 
                    ? "active" 
                    : "" 
                }` } 
            type="button"
            onClick={handleFilterBookCategory}
        >
            { category }
        </button>
    )
};

export default BookFiltered;