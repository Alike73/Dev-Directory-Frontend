import { FaHome } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const dataSidebar = [

    {
        id: 1,
        routeTo: "/",
        icon: <FaHome className="fs-5" />,
        title: "Home"
    },
    {
        id: 2,
        routeTo: "/html_css",
        icon: <PiCodeBold className="fs-5" />,
        title: "HTML&CSS"
    },
    {
        id: 3,
        routeTo: "/javascript",
        icon: <RiJavascriptFill className="fs-5" />,
        title: "JavaScript"
    },
    {
        id: 4,
        routeTo: "/react",
        icon: <SiReact className="fs-5" />,
        title: "React.js"
    },
    {
        id: 5,
        routeTo: "/nodejs",
        icon: <FaNodeJs className="fs-5" />,
        title: "NodeJS"
    },
    {
        id: 6,
        routeTo: "/mongodb",
        icon: <SiMongodb className="fs-5" />,
        title: "MongoDB"
    },
    {
        id: 7,
        routeTo: "/github",
        icon: <FaGithub className="fs-5" />,
        title: "GitHub"
    },
];

export default dataSidebar;