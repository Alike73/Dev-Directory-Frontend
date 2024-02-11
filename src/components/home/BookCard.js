import BookCardDetails from "./BookCardDetails";


const BookCard = () => {
    

    return (
        <div className="col d-flex justify-content-center align-items-center mb-5 pb-3">
            <div className="card">
                <div className="poster">
                    <img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown" />
                </div>
                <BookCardDetails />
            </div>
        </div>
    )
};

export default BookCard;