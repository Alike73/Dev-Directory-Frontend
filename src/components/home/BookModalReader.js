import { useSelector } from "react-redux";
import { GiBurningBook } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";
import IframeLoader from "./IframeLoader";
import { getMyIframeLoader } from "../../redux/IframeLoaderSlice";


const BookModalReader = ({ pdfUrl, modalTargetId }) => {
    
    const isShowLoader = useSelector(getMyIframeLoader);

    return (
        <div className="modal fade" id={ modalTargetId } tabIndex="-1" aria-labelledby={ `${modalTargetId}Label`} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header reader-header">
                        <GiBurningBook className="fs-2 viewer_logo" data-bs-dismiss="modal" aria-label="Close" />
                        <CgCloseR className="fs-3 close_viewer_btn" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body p-0">
                        { isShowLoader && <IframeLoader />}
                        <div className={ `iframe_wrapper ${ !isShowLoader ? "active" : "" }` }> 
                            <iframe
                                className="my_viewer_iframe" 
                                title="PDF Books Viewer"
                                src={ pdfUrl } 
                                allow="gyroscope" 
                                loading='eager'
                            />
                        </div>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default BookModalReader;