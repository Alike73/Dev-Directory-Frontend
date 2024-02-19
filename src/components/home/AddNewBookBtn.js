import { GiSecretBook } from "react-icons/gi";

const AddNewBookBtn = ({ setEditingBook, setImgUrl, setPdfUrl, setCategory, setText }) => {

    const handleCreateNote = () => {

        setEditingBook(false)
        setImgUrl("")
        setPdfUrl("")
        setCategory("")
        setText("")
    };

    return (
        <div>
            <button 
                className="btn btn-primary rounded-pill px-3 add_book_btn" 
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#bookEditorModal"
                onClick={ handleCreateNote }
            >
                <GiSecretBook className="me-2 fs-3" />
                Add book
            </button>
        </div>
    )
};

export default AddNewBookBtn;