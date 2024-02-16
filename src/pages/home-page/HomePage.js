import { useEffect, useState } from "react";
import { addBook, editBook, getAllBooks } from "../../api/FetchBooks";
import Swal from 'sweetalert2';
import BookModalReader from "../../components/home/BookModalReader";
import BannerContent from "../../components/home/BannerContent";
import dividerImg from "../../assets/images/divider-round-bottom.svg";
import BookShelf from "../../components/home/BookShelf";
import BookEditor from "../../components/home/BookEditor";


const HomePage = () => {

    const [myBooks, setMyBooks] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [pdfUrl, setPdfUrl] = useState("");
    const [category, setCategory] = useState("");
    const [bookTargetId, setBookTargetId] = useState("");
    const [text, setText] = useState("");
    const [bookId, setBookId] = useState("");
    const [editingBook, setEditingBook] = useState(false);

    useEffect(() => {
        getAllBooks(setMyBooks);
    }, []);

    const updatingInInput = (_id, imgUrl, pdfUrl, category, bookTargetId, text) => {
        setBookId(_id)
        setImgUrl(imgUrl)
        setPdfUrl(pdfUrl)
        setCategory(category)
        setBookTargetId(bookTargetId)
        setText(text)
        setEditingBook(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editingBook) {
                    editBook(bookId, imgUrl, setImgUrl, pdfUrl, setPdfUrl, category, setCategory, bookTargetId, setBookTargetId, text, setText, setMyBooks, setEditingBook)
                }
                else {
                    addBook(imgUrl, setImgUrl, pdfUrl, setPdfUrl, category, setCategory, bookTargetId, setBookTargetId,  text, setText,  setMyBooks)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    return (
        <div className="page">
            <BookEditor 
                handleSubmit = { handleSubmit } 
                imgUrl = { imgUrl }
                setImgUrl = { setImgUrl }
                pdfUrl = { pdfUrl }
                setPdfUrl = { setPdfUrl }
                category = { category }
                setCategory = { setCategory }
                bookTargetId = { bookTargetId }
                setBookTargetId = { setBookTargetId }
                text = { text }
                setText = { setText }
                editingBook = { editingBook }
            />

            { myBooks.map((item) => <BookModalReader 
                key = { item._id } 
                pdfUrl = { item.pdfUrl }
                modalTargetId = {"book" + item._id }
                bookTargetId = { item.bookTargetId } 
            />)}

            <div className="hero_wrapper">
                <BannerContent />
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>

            <BookShelf 
                myBooks = { myBooks }
                updatingInInput = { updatingInInput }
            />
        </div>
    )
};

export default HomePage;