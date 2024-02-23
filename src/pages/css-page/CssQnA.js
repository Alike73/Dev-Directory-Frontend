import dividerImg from "../../assets/images/divider-round-bottom.svg";
import BannerContent from "../../components/css-page-components/BannerContent";
import CssQnASection from "../../components/css-page-components/CssQnASection";

const CssQnA = () => {

    return (
        <div className="page">
            <div className="hero_wrapper">
                <BannerContent />
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
            <CssQnASection />
        </div>
    )
}

export default CssQnA