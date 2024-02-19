import { useState } from 'react';
import Swal from 'sweetalert2';
import SecureInput from '../secure-input/SecureInput';
import BookEditDeleteBtn from './BookEditDeleteBtn';
import BookTextContent from './BookTextContent';
import ReadBookBtn from "./ReadBookBtn";
import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSlice';


const BookCardDetails = ({ text, modalTargetId, updatingInInput, deleteBook }) => {

    const [isPassword, setIsPassword] = useState('');
    const [isShowBtn, setIsShowBtn] = useState(false);
    const isAdmin = useSelector(getAdmin);
    const myPassword = "K@ch@pon20111";

    console.log(isAdmin)
    

    const handleSecureFormSubmit = (e) => {
        e.preventDefault();
        if(isPassword === myPassword) {
            setIsShowBtn(true);
            setTimeout(() => {
                Swal.fire({
                    title: "Now, you can edit or delete the book!",
                    text: "Click edit or delete buttons on the book",
                    color: "#65B741",
                    icon: "success",
                    iconColor: "#65B741",
                });
            }, 1500);
        } else if(isPassword === '') {
            setIsShowBtn(false)
            Swal.fire({
                title: "The password field is empty!",
                text: "Enter your admin password",
                color: "#EC8F5E",
                icon: "warning",
                iconColor: "#D24545",
            })
        }else if(isPassword !== myPassword) {
            setIsShowBtn(false)
            Swal.fire({
                title: "Incorrect password!",
                text: "Enter your admin password",
                color: "#D24545",
                icon: "error",
                iconColor: "#D24545",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Close"
            }).then(() => {
                setIsPassword('')
            });
        }
    }

    return (
        <div className="details">
            <BookTextContent text = { text } />
            <div className="tags">
                <ReadBookBtn modalTargetId = { modalTargetId } />
            </div>
            <div className="cast">
                <SecureInput 
                    handleSecureFormSubmit = { handleSecureFormSubmit }
                    isPassword = { isPassword }
                    setIsPassword = { setIsPassword }
                    setIsShowBtn = { setIsShowBtn } 
                />

                { isShowBtn && (
                    <BookEditDeleteBtn 
                    updatingInInput = { updatingInInput } 
                    deleteBook = { deleteBook } 
                    />
                )}
                
            </div>
        </div>
    )
};

export default BookCardDetails;