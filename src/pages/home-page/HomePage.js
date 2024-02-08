import BannerContent from "../../components/home-page-components/BannerContent";
import dividerImg from "../../assets/images/divider-round-bottom.svg";



const HomePage = () => {

    return (
        <div className="home page">
            <div className="home_hero_wrapper">
                <BannerContent />
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
        </div>
    )
};

export default HomePage;