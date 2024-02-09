import { useState } from "react";



const SecureInput = () => {

    const [inputWidth, setInputWidth] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showEye, setShowEye] = useState(false);

    // const handleInputChange = (event) => {
    //     setIsPassword(event.target.value)
    // };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };

    // const clearInput = () => {
    //     setIsPassword('')
    //     setIsShowBtn(false) 
    // };

    const toggleInputWidth = () => {
        const newWidth = inputWidth === 0 ? 100 : 0;
        setInputWidth(newWidth)
        setShowEye(!showEye)
    };

    // onSubmit={handleSecureFormSubmit}

    return (
        <form>
            <div className="d-flex align-items-end w-100 pb-2 pe-3 hiddenBox">
                <span className="mx-3" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                        <i className={showEye ? 'bi bi-eye text-white' : ''}></i>
                    ) : (
                        <i className={showEye ? 'bi bi-eye-slash text-white' : ''}></i>
                    )}
                </span>

                <input
                    className="form-control form-control-sm activeInput"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    aria-label=".form-control-sm example"
                    style={{ width: `${inputWidth}%` }}
                    // value={ isPassword }
                    // onChange={handleInputChange}
                />
                <i
                    className="bi bi-pen fs-5 mt-2 activeNote"
                    title="Open / Close input"
                    onClick={() => {
                        toggleInputWidth();
                        // clearInput();
                    }}
                />
            </div>
        </form>
    )
};

export default SecureInput;