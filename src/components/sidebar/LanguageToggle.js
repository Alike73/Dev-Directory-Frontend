import { BsGlobe } from "react-icons/bs";

const LanguageToggle = () => {

    return (
        <div className="dropdown text-end">
            <a href="#abc" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
                <BsGlobe className="fs-3 text-secondary" />
                <small className="ms-2 fw-bold text-secondary">EN</small>
            </a>
            <ul className="dropdown-menu text-small dropdown_menu_lang">
                <li><button className="dropdown-item" type="button">RU</button></li>
                <li><button className="dropdown-item" type="button">EN</button></li>
            </ul>
        </div>
    )
};

export default LanguageToggle;