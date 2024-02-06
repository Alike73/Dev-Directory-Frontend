import BgVideo from '../../components/login-page-components/BgVideo';
import LoginPageContent from '../../components/login-page-components/LoginPageContent';
import LoginPageImage from '../../components/login-page-components/LoginPageImage';
import Overlay from '../../components/login-page-components/Overlay';

const LoginPage = () => {

    return (
        <div className="login page">
            <Overlay />
            <BgVideo />
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <LoginPageImage />
                    <LoginPageContent />
                </div>
            </div>
        </div>
    )
};

export default LoginPage;