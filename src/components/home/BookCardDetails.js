import SecureInput from '../secure-input/SecureInput';
import BookEditDeleteBtn from './BookEditDeleteBtn';
import BookTextContent from './BookTextContent';
import ReadBookBtn from "./ReadBookBtn";


const BookCardDetails = ({ text, modalTargetId, updatingInInput, deleteBook }) => {

    return (
        <div className="details">
            <BookTextContent text = { text } />
            <div className="tags">
                <ReadBookBtn modalTargetId = { modalTargetId } />
            </div>
            <div className="cast">
                <SecureInput />
                <BookEditDeleteBtn 
                    updatingInInput = { updatingInInput } 
                    deleteBook = { deleteBook } 
                />
            </div>
        </div>
    )
};

export default BookCardDetails;