import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const ScrollProgress = () => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.to("progress", {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <progress className="scroll_progress" max="100" value="0"></progress>
    )
};

export default ScrollProgress;