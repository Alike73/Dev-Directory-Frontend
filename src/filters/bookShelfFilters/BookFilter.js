import { useEffect, useState } from "react";
import BookFiltered from "./BookFiltered";
import dataBookCategories from '../../data/DataBookFilterCategory';


const BookFilter = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(dataBookCategories)
    }, [])

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center py-5">
            {categories.map((item) => <BookFiltered 
                category = { item.category }
                key = { item.id }
            />)}
        </div>
    )
};

export default BookFilter;