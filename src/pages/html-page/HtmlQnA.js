import BannerContent from "../../components/html-page-components/BannerContent";
import dividerImg from "../../assets/images/divider-round-bottom.svg";
import HtmlCssAccordion from "../../components/html-page-components/HtmlCssAccordion";

const HtmlQnA = () => {

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

export default HtmlQnA;