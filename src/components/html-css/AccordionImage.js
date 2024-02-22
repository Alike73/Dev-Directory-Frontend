import React from 'react'

const AccordionImage = ({ image }) => {

    return (
        <div className='accord_img_wrapper my-3'>
            <img className='d-block img-fluid' src={ image  } alt="code snippet" width={'100%'} />
        </div>
    )
};

export default AccordionImage;