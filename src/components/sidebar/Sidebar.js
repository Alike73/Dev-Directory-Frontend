import { useSelector } from "react-redux";
import { getIsOpen } from "../../redux/SidebarSlice";
import { useEffect, useState } from "react";
// import { GiBurningBook } from "react-icons/gi";
import SidebarLinkItem from "./SidebarLinkItem";
import dataSidebar from "../../data/DataSidebar";
import LanguageToggle from "./LanguageToggle";
import SidebarUserLogout from "./SidebarUserLogout";


const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);
    const [sidebarLinks, setSidebarLinks] = useState([]);

    useEffect(() => {
        setSidebarLinks(dataSidebar);
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
            <SidebarUserLogout />
        </div>
    )
};

export default Sidebar;