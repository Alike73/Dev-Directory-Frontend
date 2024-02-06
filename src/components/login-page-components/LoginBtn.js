
import { useEffect } from "react";
import gsap from 'gsap';

const LoginBtn = () => {

    let hoverTL = gsap.timeline();
    hoverTL.pause();
    
    useEffect(() => {
        hoverTL.clear(); // Clear existing tweens
        hoverTL.to('.pink', {width: "calc(100% + 1.3em)", ease: "Elastic.easeOut(0.25)", duration: 0.4})
        hoverTL.to('.pink', {width: "2em", left: "calc(100% - 1.45em)", ease: "Elastic.easeOut(0.4)", duration: 0.6})
    }, [hoverTL])

    const handleMouseEnter = () => {
        hoverTL.play();
    };
    
    const handleMouseLeave = () => {
        hoverTL.reverse();
    };

    return (
        <button 
                type="button" 
                className="btn login_link ms-2 mt-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            <div className="pink" />
            <span>LOG IN / SIGN UP</span>
            <i className="bi bi-arrow-right ms-3" />
        </button>
    )
};

export default LoginBtn;