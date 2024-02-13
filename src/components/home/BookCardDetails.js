import { TfiPencilAlt } from "react-icons/tfi";
import { BsTrash3 } from "react-icons/bs";
import SecureInput from '../secure-input/SecureInput';
// import BookQRCode from '../book-qr-code/BookQRCode';
import ReadBookBtn from "./ReadBookBtn";
import my_logo from '../../assets/images/my-Logo-AI.png';


const BookCardDetails = () => {


    return (
        <div className="details">
            <h2 className='mb-3'>Description</h2>
            {/* <p className='desc'>
                Author
            </p> */}
            <p className="desc">
                Marco, a disillusioned backpacker in his late 20s, 
                embarks on a solitary journey in search for meaning...
            </p>
            <div className="tags">
                <ReadBookBtn />
            </div>
            <div className="cast">
                <SecureInput />
                <div className="edit_delete_wrapper">
                    {/* <BookQRCode /> */}
                    <img className="book_qr_code_wrapper" src={ my_logo } alt="admin-logo" width={30} />
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-sm me-3 btn-outline-secondary edit_btn">
                            <TfiPencilAlt className='fs-3 btn_ico' />
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary delete_btn">
                            <BsTrash3 className='fs-3 btn_ico' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookCardDetails;