import CssFilter from "../../filters/cssFilters/CssFilter";
import CssQnAList from "./CssQnAList";


const CssQnASection = () => {

    return (
        <div className="qa_section">
            <CssFilter />
            <div className="container">
                <CssQnAList />
            </div>
        </div>
    )
};

export default CssQnASection;