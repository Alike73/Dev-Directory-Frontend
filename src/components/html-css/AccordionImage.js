import code_snippet from '../../assets/images/carbon.svg';

import React from 'react'

const AccordionImage = () => {

    return (
        <div className='accord_img_wrapper my-3'>
            <img className='d-block img-fluid' src={ code_snippet  } alt="code snippet" />
        </div>
    )
};

export default AccordionImage;