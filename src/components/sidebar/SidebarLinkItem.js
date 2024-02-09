import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, setIsOpen } from "../../redux/SidebarSlice";
import { BubblyLink } from "react-bubbly-transitions";


const SidebarLinkItem = ({ routeTo, icon, title }) => {

    const isOpen = useSelector(getIsOpen);
    const dispatch = useDispatch();

    const handleToggleSidebar = () => {
        dispatch(setIsOpen(!isOpen));
    };

    return (
        <li 
            className={ `nav-item my_nav_item my-3 ${ isOpen ? "open" : "" }` } 
            onClick = { handleToggleSidebar }
        >
            <BubblyLink to={ routeTo }>
                <div className="list-item my_nav_list_item">
                    <div className="rank">
                        <span>
                            { icon }
                        </span>
                    </div>
                    <div className="name ms-3">
                        <h4>{ title }</h4>
                    </div>
                </div>
            </BubblyLink>
        </li>
    )
};

export default SidebarLinkItem;