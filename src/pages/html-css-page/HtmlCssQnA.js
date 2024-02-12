import BannerContent from "../../components/html-css/BannerContent";
import dividerImg from "../../assets/images/divider-round-bottom.svg";
import HtmlCssAccordion from "../../components/html-css/HtmlCssAccordion";

const HtmlCssQnA = () => {

    return (
        <div className="page">
            <div className="hero_wrapper">
                <BannerContent />
                <img className="divider_bottom" src={ dividerImg } alt="divider-round-bottom" />
            </div>
            <HtmlCssAccordion />
        </div>
    )
};

export default HtmlCssQnA;