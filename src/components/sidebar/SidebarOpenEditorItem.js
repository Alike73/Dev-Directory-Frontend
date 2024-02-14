

const SidebarOpenEditorItem = ({ title, data_bs_target }) => {

    return (
        <li>
            <button 
                className="dropdown-item btn" 
                data-bs-toggle="modal" 
                data-bs-target={ data_bs_target }
            >
                { title }
            </button>
        </li>
    )
};

export default SidebarOpenEditorItem;