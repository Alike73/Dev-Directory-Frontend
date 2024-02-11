import BookReader from "./BookReader";


const BookModalReader = () => {

    return (
        <div className="modal fade" id="bookModal" tabIndex="-1" aria-labelledby="bookModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5 m-0" id="bookModalLabel">Modal title</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <BookReader />
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