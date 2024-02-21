import React from 'react'

const BookSearchWarning = () => {

    return (
        <div className="two mt-2 w-100">
            <h2>
                There is no such a 
                <span className='text-warning fw-bold ms-3'>BOOK</span>
                <span className="text-danger fw-bold ms-1">!</span>
            </h2>
        </div>
    )
};

export default BookSearchWarning;