

const ReadBookBtnGroup = () => {

    return (
        <div className="btn-group dropup">
            <button 
                type="button" 
                className="btn btn-outline-info rounded-pill px-3 dropdown-toggle" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
            >
                Open in:
            </button>
            <ul className="dropdown-menu dropdown_menu_book_card py-4">
                <li className="mb-3 d-flex justify-content-center">
                    <a 
                        className="btn btn-outline-secondary rounded-pill px-3" 
                        href="#abc" 
                        data-bs-toggle="modal" 
                        data-bs-target="#bookModal"
                    >
                        Viewer
                    </a>
                </li>
                <li className="d-flex justify-content-center">
                    <a 
                        className="btn btn-outline-secondary rounded-pill px-3" 
                        href="http://tinyurl.com/2d8vafel" 
                        target="_blank" rel="noreferrer"
                    >
                        Browser
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default ReadBookBtnGroup;