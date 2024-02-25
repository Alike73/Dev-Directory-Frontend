import { useEffect, useState } from "react";
import CssFilter from "../../filters/cssFilters/CssFilter";
import CssQnAList from "./CssQnAList";
import { getCssQnA } from "../../api/FetchCssQnA";
import { useSelector } from "react-redux";
import { getSelectedCssFilterCategory } from "../../redux/CssFilterSlice";


const CssQnASection = () => {

    const [cssSet, setCssSet] = useState([]);
    const selectedCssSetCategory = useSelector(getSelectedCssFilterCategory);

    useEffect(() => {
        getCssQnA(setCssSet)
    }, []);

    const filteredCssSet = cssSet
        .filter((item) => {
            if (selectedCssSetCategory === 'SET 1') return true;
            return selectedCssSetCategory === item.category;
        })

    return (
        <div className="qa_section">
            <CssFilter />
            <div className="container">
            { filteredCssSet.map((item) => <CssQnAList 
                key = { item._id } 
                markdown = { item.markdown } 
            />)}
                
            </div>
        </div>
    )
};

export default CssQnASection;