import React from 'react'

const AccordionImage = ({ image }) => {

    return (
        <div className='accord_img_wrapper my-3 col-lg-7'>
            <img className='d-block img-fluid' src={ image  } alt="code snippet" />
        </div>
    )
};

export default AccordionImage;