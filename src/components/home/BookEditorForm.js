import { useState } from "react";


const BookEditorForm = ({
        handleSubmit, imgUrl, setImgUrl, pdfUrl, setPdfUrl, 
        category, setCategory, title, setTitle, text, setText, editingBook
    }) => {

    const [isCoverImgFocused, setIsCoverImgFocused] = useState(false);
    const [isPdfFileUrlFocused, setIsPdfFileUrlFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    const [isCategoryFocused, setIsCategoryFocused] = useState(false);
    const [isTitleFocused, setIsTitleFocused] = useState(false);

    const btnText = editingBook ? "Save Your changes" : "Add New Book";
    return (
        <form id="book-editor-form" onSubmit = { handleSubmit }>

            <div className="mb-3">
                <label 
                    htmlFor="book-cover-img" 
                    className={ `col-form-label ${ isCoverImgFocused ? "active fw-bold" : "" }` }
                >
                    Book cover image url:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="book-cover-img" 
                    required
                    onFocus={() => setIsCoverImgFocused(true)}
                    onBlur={() => setIsCoverImgFocused(false)}
                    value = { imgUrl }
                    onChange = { (e) => setImgUrl(e.target.value) } 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-pdf-file-url" 
                    className={ `col-form-label ${ isPdfFileUrlFocused ? "active fw-bold" : "" }` }
                >
                    Book pdf file url:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="book-pdf-file-url" 
                    required 
                    onFocus={() => setIsPdfFileUrlFocused(true)}
                    onBlur={() => setIsPdfFileUrlFocused(false)}
                    value = { pdfUrl }
                    onChange = { (e) => setPdfUrl(e.target.value) }  
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-category" 
                    className={ `col-form-label ${ isCategoryFocused ? "active fw-bold" : "" }` }
                >
                    Book category:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="book-category" 
                    required 
                    onFocus={() => setIsCategoryFocused(true)}
                    onBlur={() => setIsCategoryFocused(false)}
                    value = { category }
                    onChange = { (e) => setCategory(e.target.value) } 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-title" 
                    className={ `col-form-label ${ isTitleFocused ? "active fw-bold" : "" }` }
                >
                    Title of the book:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="book-title" 
                    required 
                    onFocus={() => setIsTitleFocused(true)}
                    onBlur={() => setIsTitleFocused(false)}
                    value = { title }
                    onChange = { (e) => setTitle(e.target.value) } 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-description" 
                    className={ `col-form-label ${ isDescriptionFocused ? "active fw-bold" : "" }` }
                >
                    Book description:
                </label>
                <textarea 
                    className="form-control" 
                    id="book-description" 
                    rows="3" 
                    required 
                    onFocus={() => setIsDescriptionFocused(true)}
                    onBlur={() => setIsDescriptionFocused(false)}
                    value = { text }
                    onChange = { (e) => setText(e.target.value) } 
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-primary editor_submit_btn"
            >
                { btnText }
            </button>

        </form>
    )
};;

export default BookEditorForm;