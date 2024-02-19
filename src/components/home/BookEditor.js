import { CgCloseR } from "react-icons/cg";
import BookEditorForm from "./BookEditorForm";


const BookEditor = ({ 
    handleSubmit, imgUrl, setImgUrl, pdfUrl, setPdfUrl, 
    category, setCategory, text, setText, editingBook
    }) => {

        const titleText = editingBook ? "Book editing" : "Create new book";
        

    return (
        <div className="modal fade" id="bookEditorModal" tabIndex="-1" aria-labelledby="bookEditorModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header editor_header">
                        <h3 className="modal-title fs-5" id="bookEditorModalLabel">
                            { titleText }
                        </h3>
                        <CgCloseR className="fs-3 close_viewer_btn" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <BookEditorForm 
                            handleSubmit = { handleSubmit } 
                            imgUrl = { imgUrl }
                            setImgUrl = { setImgUrl }
                            pdfUrl = { pdfUrl }
                            setPdfUrl = { setPdfUrl }
                            category = { category }
                            setCategory = { setCategory }
                            text = { text }
                            setText = { setText }
                            editingBook = { editingBook }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookEditor;