import SecureInput from '../secure-input/SecureInput';
import BookEditDeleteBtn from './BookEditDeleteBtn';
import BookTextContent from './BookTextContent';
import ReadBookBtn from "./ReadBookBtn";


const BookCardDetails = () => {

    return (
        <div className="details">
            <BookTextContent />
            <div className="tags">
                <ReadBookBtn />
            </div>
            <div className="cast">
                <SecureInput />
                <BookEditDeleteBtn />
            </div>
        </div>
    )
};

export default BookCardDetails;