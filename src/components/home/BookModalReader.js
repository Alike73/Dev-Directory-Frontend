import { useSelector } from "react-redux";
import { GiBurningBook } from "react-icons/gi";
import { CgCloseR } from "react-icons/cg";
import IframeLoader from "./IframeLoader";
import { getMyIframeLoader } from "../../redux/IframeLoaderSlice";


const BookModalReader = () => {
    
    const my_pdf_file = 'https://cdn.glitch.me/38f6cb42-0588-46b2-8b27-d721c2c36fc4/%D0%93%D1%80%D0%BE%D0%BA%D0%B0%D0%B5%D0%BC%20%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B.pdf?v=1707600661249';
    const isShowLoader = useSelector(getMyIframeLoader);

    return (
        <div className="modal fade" id="bookModal" tabIndex="-1" aria-labelledby="bookModalLabel" aria-hidden="true">
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
                                src={ my_pdf_file } 
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