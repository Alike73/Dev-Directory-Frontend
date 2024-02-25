import { useDispatch, useSelector } from "react-redux";
import { filterCssSetCategory, getSelectedCssFilterCategory } from "../../redux/CssFilterSlice";


const CssFilteredItem = ({ category }) => {

    const selectedCssFilterCategory = useSelector(getSelectedCssFilterCategory);
    const dispatch = useDispatch();
    const handleFilterCssQnACategory = () => {
        dispatch(filterCssSetCategory(category))
    };

    return (
        <button className={ `btn btn-sm rounded-pill px-3 category_btn ${ 
            selectedCssFilterCategory === category 
                ? "active" 
                : "" 
            }` }
            onClick={ handleFilterCssQnACategory }
            >
            { category }
        </button>
    )
};

export default CssFilteredItem;