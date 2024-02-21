
import axios from 'axios';

const myURL = 'http://localhost:4000';

// http://localhost:4000
// 

// GET:
const getAllBooks = (setMyBooks) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setMyBooks(data)
    })
}

// POST:
const addBook = (imgUrl, setImgUrl, pdfUrl, setPdfUrl, category, setCategory, title, setTitle, text, setText,  setMyBooks) => {
    axios.post(`${myURL}/saveBook`, { imgUrl, pdfUrl, category, title, text })
    .then((data) => {
        console.log(data)
        setImgUrl("")
        setPdfUrl("")
        setCategory("")
        setTitle("")
        setText("")
        getAllBooks(setMyBooks)
    })
};

// PUT:
const editBook = (bookId, imgUrl, setImgUrl, pdfUrl, setPdfUrl, category, setCategory, title, setTitle, text, setText, setMyBooks, setEditingBook) => {
    axios.post(`${myURL}/editBook`, { _id: bookId, imgUrl, pdfUrl, category, title, text })
    .then((data) => {
        console.log(data)
        setImgUrl("")
        setPdfUrl("")
        setCategory("")
        setTitle("")
        setText("")
        setEditingBook(false)
        getAllBooks(setMyBooks)
    })
};

const deleteBook = (_id, setMyBooks) => {
    axios.post(`${myURL}/deleteBook`, { _id })
    .then((data) => {
        console.log(data)
        getAllBooks(setMyBooks)
    })
};;

export { getAllBooks, addBook, editBook, deleteBook };