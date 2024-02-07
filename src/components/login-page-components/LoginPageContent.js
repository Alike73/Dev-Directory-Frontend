import LoginBtn from "./LoginBtn";
import { gsap } from "gsap";
import { SteppedEase } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";


gsap.registerPlugin(TextPlugin);

const LoginPageContent = () => {

    useEffect(() => {
        gsap.fromTo('#cursor', {autoAlpha: 0, x: -5}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)})
        
        gsap.to("#text", {text: {value: `DevReads: Fueling your development odyssey with boundless inspiration, navigate through a treasure trove of digital wisdom and insights, explore a wealth of knowledge today! ☺️`}, duration: 7, delay: 2.5, ease: "none"})
    }, [])

    return (
        <div className="col-lg-6">
            <p className="mb-0 px-3 mb-3">
                <span id="text"></span>
                <span id="cursor" className="fw-bold fs-3 text-info">|</span>
            </p>
            <LoginBtn />
        </div>
    )
};

export default LoginPageContent;