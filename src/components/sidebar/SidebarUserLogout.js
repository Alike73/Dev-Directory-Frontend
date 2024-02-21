

const SidebarUserLogout = () => {

    return (
        <div className="dropup">
            <a 
                href="#abc" 
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                <img 
                    src="https://github.com/mdo.png" 
                    alt="user" 
                    width="32" 
                    height="32" 
                    className="rounded-circle me-2" 
                />
                <strong>username</strong>
            </a>
            <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#abc">User email</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#abc">Sign out</a></li>
            </ul>
        </div>
    )
};

export default SidebarUserLogout;