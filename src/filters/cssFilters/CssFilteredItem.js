import { useSelector } from "react-redux";
import { getSelectedCssFilterCategory } from "../../redux/CssFilterSlice";


const CssFilteredItem = ({ category }) => {

    const selectedCssFilterCategory = useSelector(getSelectedCssFilterCategory);

    return (
        <button className={ `btn btn-sm rounded-pill px-3 category_btn ${ 
            selectedCssFilterCategory === category 
                ? "active" 
                : "" 
            }` }>
            { category }
        </button>
    )
};

export default CssFilteredItem;