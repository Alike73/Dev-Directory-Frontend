import { useSelector } from "react-redux";
import { getIsOpen } from "../../redux/SidebarSlice";
import { useEffect, useState } from "react";
import { GiBurningBook } from "react-icons/gi";
import SidebarLinkItem from "./SidebarLinkItem";
import dataSidebar from "../../data/DataSidebar";


const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);
    const [sidebarLinks, setSidebarLinks] = useState([]);

    useEffect(() => {
        setSidebarLinks(dataSidebar);
    }, []);

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 sidebar ${ isOpen ? "open" : "" }` }>
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
                <GiBurningBook className="fs-1 sidebar_logo" />
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
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
                    <li><a className="dropdown-item" href="#abc">New project...</a></li>
                    <li><a className="dropdown-item" href="#abc">Settings</a></li>
                    <li><a className="dropdown-item" href="#abc">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#abc">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;