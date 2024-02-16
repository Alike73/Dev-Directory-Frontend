import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { getMyFormActive, setIsMyFormActive } from '../../redux/FormSlice';
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import invalidIcon from '../../assets/images/icon-invalid.svg';


const FooterForm = () => {

    const [state, handleSubmit] = useForm("xkndjlpw");
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage ] = useState('');
    const isMyFormActive = useSelector(getMyFormActive);
    const dispatch = useDispatch();
    

    const handleMyFormSubmit = (e) => {
        handleSubmit(e); 
        e.preventDefault(); 
        dispatch(setIsMyFormActive(!isMyFormActive));
        if (state.succeeded) {
            setTimeout(() => {
                Swal.fire({
                    allowOutsideClick: false,
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Your message has been received!',
                    footer: 'We will answer you soon.',
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(setIsMyFormActive(false));
                    }
                });
            }, 1000);
        } 
        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    useEffect(() => {
        if (state.succeeded) {
            setTimeout(() => {
                Swal.fire({
                    allowOutsideClick: false,
                    icon: 'success',
                    title: 'Thank you!',
                    text: 'Your message has been received!',
                    footer: 'We will answer you soon.',
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(setIsMyFormActive(false));
                    }
                });
            }, 1000)
        }
        
    }, [state.succeeded, dispatch]);

    const formBtnText = isMyFormActive ? 'Message is sent!' : 'Send Message';

    return (
        <div className="col-md-5 offset-md-1 mb-3 footer_form">
            <h5>Tell us what books you would like to see here.</h5>
            <p>And we will try to add them to the list.</p>
                <form className="myForm" onSubmit={handleMyFormSubmit}>
                <div className="form_control_wrapper">
                    <input
                        id='name'
                        value = { userName }
                        onChange={ (e) => setUserName(e.target.value) }
                        type="text" 
                        className="mb-3 myFormInput" 
                        placeholder="Your name..." 
                        name="name"
                        required 
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                    <img className='invalid_icon' src={ invalidIcon } alt="exclamation mark" />
                </div>

                <div className="form_control_wrapper">
                    <input
                        id='email'
                        value = { userEmail }
                        onChange={ (e) => setUserEmail(e.target.value) }
                        type="email" 
                        className="mb-3 myFormInput" 
                        placeholder="Your email..." 
                        name="email"
                        required 
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    <img className='invalid_icon' src={ invalidIcon } alt="exclamation mark" />
                </div>

                <div className="form_control_wrapper">
                    <textarea
                        id='message'
                        value = { userMessage }
                        onChange={ (e) => setUserMessage(e.target.value)} 
                        className=" mb-4 myFormTextarea" 
                        rows="3" 
                        placeholder="Message..." 
                        name="message"
                        required
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    <img className='invalid_icon' src={ invalidIcon } alt="exclamation mark" />
                </div>
                <div className="contact_control align-right">
                    <button 
                        className='my_submit_btn' 
                        type="submit"
                        disabled={state.submitting}
                        >
                            { isMyFormActive 
                                ? (<FaRegPaperPlane className={ `fs-1 me-2 plane_ico ${ isMyFormActive ? "active" : "" }` } />) 
                                : (<BsEnvelopeArrowUp className="fs-2 me-2 envelope_ico" />)
                            }
                        { formBtnText }
                    </button>
                </div>
            </form>
        </div>
    )
};

export default FooterForm;