// import BookQRCode from '../book-qr-code/BookQRCode';
import { TfiPencilAlt } from "react-icons/tfi";
import { BsTrash3 } from "react-icons/bs";
import Swal from 'sweetalert2';
import my_logo from '../../assets/images/my-Logo-AI.png';

const BookEditDeleteBtn = ({ updatingInInput, deleteBook }) => {

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            deleteBook();
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1700
            });
        }
        });
    }


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
                    onClick = { updatingInInput }
                >
                    <TfiPencilAlt className='fs-3 btn_ico' />
                </button>
                <button 
                    type="button" 
                    className="btn btn-sm btn-outline-secondary delete_btn"
                    onClick = { handleDelete }
                >
                    <BsTrash3 className='fs-3 btn_ico' />
                </button>
            </div>
        </div>
    )
};

export default BookEditDeleteBtn;