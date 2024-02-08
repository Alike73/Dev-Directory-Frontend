import home_illustration from '../../assets/images/books-illustration.svg';
import ringsPattern from '../../assets/images/rings.svg';

const BannerImage = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6 mt-0 banner_image_wrapper">
            <img className="rings_pattern img-fluid" src={ ringsPattern } alt="rings_pattern" />
            <img 
                src={ home_illustration } 
                className="d-block mx-lg-auto img-fluid home_hero_img" 
                alt="Bootstrap Themes" 
                width="700" 
                loading="lazy" 
            />
        </div>
    )
};

export default BannerImage;