import { useEffect, useState } from "react";
import CssFilteredItem from "./CssFilteredItem";
import { getCssFilter } from "../../api/FetchCssFilter";


const CssFilter = () => {

    const [filter, setFilter] = useState([]);
    useEffect(() => {
        getCssFilter(setFilter)
    }, [])

    console.log(filter)

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center py-5">
            { filter.map((item) => <CssFilteredItem 
                key = { item._id } 
                category = { item.category } 
            />)}
        </div>
    )
};

export default CssFilter;