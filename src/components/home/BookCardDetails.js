import SecureInput from '../secure-input/SecureInput';
import BookEditDeleteBtn from './BookEditDeleteBtn';
import BookTextContent from './BookTextContent';
import ReadBookBtn from "./ReadBookBtn";


const BookCardDetails = ({ text, bookTargetId, modalTargetId, updatingInInput }) => {

    return (
        <div className="details">
            <BookTextContent text = { text } />
            <div className="tags">
                <ReadBookBtn bookTargetId = { bookTargetId } modalTargetId = { modalTargetId } />
            </div>
            <div className="cast">
                <SecureInput />
                <BookEditDeleteBtn updatingInInput = { updatingInInput } />
            </div>
        </div>
    )
};

export default BookCardDetails;