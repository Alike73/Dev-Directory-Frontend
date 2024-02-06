import bg_video from '../../assets/video/bg-login-video.mp4';

const BgVideo = () => {

    return (
        <video autoPlay = {true} muted = {true} loop = {true}>
            <source src={bg_video} type="video/mp4" />
        </video>
    )
};

export default BgVideo;