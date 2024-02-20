import AddNewBookBtn from "./AddNewBookBtn";
import BannerImage from "./BannerImage";
import BannerText from "./BannerText";
import BannerTitle from "./BannerTitle";





const BannerContent = ({ setEditingBook, setImgUrl, setPdfUrl, setCategory, setText}) => {
    
    return (
        <div className="container col-xxl-8 px-4 pt-5 content">
            <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 pt-5">
                <BannerTitle />
                <BannerImage />
                <BannerText />
                <AddNewBookBtn 
                    setEditingBook = { setEditingBook } 
                    setImgUrl = { setImgUrl } 
                    setPdfUrl = { setPdfUrl }
                    setCategory = { setCategory }
                    setText = { setText } 
                />
            </div>
        </div>
    )
};

export default BannerContent;