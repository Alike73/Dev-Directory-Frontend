import { useDispatch, useSelector } from "react-redux";
import { getMyIframeLoader, setIsShowLoader } from "../../redux/IframeLoaderSlice";
import { GiSecretBook } from "react-icons/gi";


const ReadBookBtn = ({ bookTargetId, modalTargetId }) => {

    const isShowLoader = useSelector(getMyIframeLoader);
    const dispatch = useDispatch();

    const handleLoader = () => {
        dispatch(setIsShowLoader(!isShowLoader))

        setTimeout(() => {
            dispatch(setIsShowLoader(false))
        }, 3700)
    };

    return (
        <button 
            type="button" 
            className="btn btn-sm me-3 btn-outline-secondary read_btn" 
            onClick = { handleLoader  }
            data-bs-toggle="modal" 
            data-bs-target={ `#${modalTargetId}` }
        >
            <span>Read</span>
            <GiSecretBook className='fs-3 btn_ico ms-2' />
        </button>
    )
};

export default ReadBookBtn;