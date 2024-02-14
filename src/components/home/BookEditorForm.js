import { useState } from "react";


const BookEditorForm = () => {

    const [isCoverImgFocused, setIsCoverImgFocused] = useState(false);
    const [isPdfFileUrlFocused, setIsPdfFileUrlFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);

    return (
        <form id="book-editor-form">

            <div className="mb-3">
                <label 
                    htmlFor="book-cover-img" 
                    className={ `col-form-label ${ isCoverImgFocused ? "active" : "" }` }
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
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-pdf-file-url" 
                    className={ `col-form-label ${ isPdfFileUrlFocused ? "active" : "" }` }
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
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="book-description" 
                    className={ `col-form-label ${ isDescriptionFocused ? "active" : "" }` }
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
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-primary editor_submit_btn"
            >
                Submit
            </button>

        </form>
    )
};;

export default BookEditorForm;