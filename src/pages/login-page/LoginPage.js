import { useEffect, useState } from 'react';
import BgVideo from '../../components/login-page-components/BgVideo';
import LoginPageContent from '../../components/login-page-components/LoginPageContent';
import LoginPageImage from '../../components/login-page-components/LoginPageImage';
import LoginPageTitle from '../../components/login-page-components/LoginPageTitle';
import OverlayOne from '../../components/login-page-components/OverlayOne';
import OverlayTwo from '../../components/login-page-components/OverlayTwo';


const LoginPage = () => {

    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        // Set showOverlay to true immediately
        setShowOverlay(true);

        // Set a timeout to set showOverlay back to false after 0.5 seconds
        const timeoutId = setTimeout(() => {
            setShowOverlay(false);
        }, 200); // 0.2 seconds = 200 milliseconds

        // Clean up the timeout when component unmounts or when the effect re-runs
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="login page">
            <BgVideo />
            { showOverlay && <OverlayOne />}
            { !showOverlay && <OverlayTwo />}
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5">
                    <LoginPageTitle />
                    <LoginPageImage />
                    <LoginPageContent />
                </div>
            </div>
        </div>
    )
};

export default LoginPage;