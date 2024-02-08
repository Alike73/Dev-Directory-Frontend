import BannerImage from "./BannerImage";
import BannerText from "./BannerText";
import BannerTitle from "./BannerTitle";





const BannerContent = () => {
    
    return (
        <div className="container col-xxl-8 px-4 py-5 content">
            <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
                <BannerTitle />
                <BannerImage />
                <BannerText />
            </div>
        </div>
    )
};

export default BannerContent;