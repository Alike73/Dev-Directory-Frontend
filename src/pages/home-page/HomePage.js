import BannerContent from "../../components/home/BannerContent";
import dividerImg from "../../assets/images/divider-round-bottom.svg";
import BookShelf from "../../components/home/BookShelf";
import BookModalReader from "../../components/home/BookModalReader";



const HomePage = () => {

    return (
        <div className="home page">
            <BookModalReader />
            <div className="home_hero_wrapper">
                <BannerContent />
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
            <BookShelf />
        </div>
    )
};

export default HomePage;