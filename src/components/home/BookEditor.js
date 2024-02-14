import { CgCloseR } from "react-icons/cg";
import BookEditorForm from "./BookEditorForm";


const BookEditor = () => {

    return (
        <div className="modal fade" id="bookEditorModal" tabIndex="-1" aria-labelledby="bookEditorModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header editor_header">
                        <h3 className="modal-title fs-5" id="bookEditorModalLabel">
                            Book name...
                        </h3>
                        <CgCloseR className="fs-3 close_viewer_btn" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <BookEditorForm />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookEditor;