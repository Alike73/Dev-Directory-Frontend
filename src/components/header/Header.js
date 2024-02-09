import { useDispatch, useSelector } from "react-redux";
import GoHome from "../go-home/GoHome";
import { getActiveHeader, setIsActiveHeader } from "../../redux/NavbarSlice";
import { useEffect } from "react";
import ScrollProgress from "../scrollprogress/ScrollProgress";


const Header = () => {

    const isActiveHeader = useSelector(getActiveHeader);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                dispatch(setIsActiveHeader(true));
            } else {
                dispatch(setIsActiveHeader(false));
            }
        });
    }, [dispatch]);

    return (
        <header className={ `py-3 mb-3 header ${ isActiveHeader ? "active" : "" }` }>
        <ScrollProgress />
            <div className="container-fluid">
                <GoHome />
            </div>
        </header>
    )
};

export default Header;