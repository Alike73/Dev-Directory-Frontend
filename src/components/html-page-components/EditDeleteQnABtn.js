import { TfiPencilAlt } from "react-icons/tfi";
import { BsTrash3 } from "react-icons/bs";

const EditDeleteQnABtn = () => {

    return (
        <div className="d-flex align-items-center accord_btn_group">
            <button type="button" className="btn btn-sm btn-outline-secondary me-3">
                    <TfiPencilAlt className='fs-5 btn_ico' />
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
                <BsTrash3 className='fs-5 btn_ico' />
            </button>
        </div>
    )
};

export default EditDeleteQnABtn;