// import BookQRCode from '../book-qr-code/BookQRCode';
import { TfiPencilAlt } from "react-icons/tfi";
import { BsTrash3 } from "react-icons/bs";
import my_logo from '../../assets/images/my-Logo-AI.png';

const BookEditDeleteBtn = () => {

    return (
        <div className="edit_delete_wrapper">
                    {/* <BookQRCode /> */}
            <img className="book_qr_code_wrapper" src={ my_logo } alt="admin-logo" width={30} />
            <div className="d-flex justify-content-end">
                <button 
                    type="button" 
                    className="btn btn-sm me-3 btn-outline-secondary edit_btn"
                    // ---Open-Close-Modal---> 
                    data-bs-toggle="modal" 
                    data-bs-target="#bookEditorModal"
                >
                    <TfiPencilAlt className='fs-3 btn_ico' />
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-secondary delete_btn"
                >
                    <BsTrash3 className='fs-3 btn_ico' />
                </button>
            </div>
        </div>
    )
};

export default BookEditDeleteBtn;