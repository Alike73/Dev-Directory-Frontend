import { useSelector } from "react-redux";
import { getIsOpen } from "../../redux/SidebarSlice";
import { useEffect, useState } from "react";
// import { GiBurningBook } from "react-icons/gi";
import SidebarLinkItem from "./SidebarLinkItem";
import dataSidebar from "../../data/DataSidebar";
import dataSidebarTwo from '../../data/DataSidebarTwo';
import LanguageToggle from "./LanguageToggle";
import SidebarOpenEditorItem from "./SidebarOpenEditorItem";


const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);
    const [sidebarLinks, setSidebarLinks] = useState([]);
    const [openEditorItems, setOpenEditorItems] = useState([]);

    useEffect(() => {
        setSidebarLinks(dataSidebar);
        setOpenEditorItems(dataSidebarTwo);
    }, []);

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 sidebar ${ isOpen ? "open" : "" }` }>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
                <LanguageToggle />
                {/* <GiBurningBook className="fs-1 sidebar_logo" /> */}
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto my_nav">
                { sidebarLinks.map((item) => <SidebarLinkItem 
                    key = { item.id }
                    routeTo = { item.routeTo }
                    icon = { item.icon }
                    title = { item.title } 
                />)}
            </ul>
            <hr />
            <div className="dropup">
                <a href="#abc" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="user" width="32" height="32" className="rounded-circle me-2" />
                    <strong>user</strong>
                </a>
                <ul className="dropdown-menu text-small">
                    { openEditorItems.map((item) => <SidebarOpenEditorItem 
                        key = { item.id } 
                        title = { item.title } 
                        data_bs_target = { item.data_bs_target } 
                    />)}
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#abc">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;