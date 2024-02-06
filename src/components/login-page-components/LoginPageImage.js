import loginIllustration from '../../assets/images/login-illustration.svg';


const LoginPageImage = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={ loginIllustration } className="d-block mx-lg-auto img-fluid" alt="Dev seating on a table" width="700" loading="lazy" />
        </div>
    )
};;

export default LoginPageImage;