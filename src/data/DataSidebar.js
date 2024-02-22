import { FaHome } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
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
        routeTo: "/html",
        icon: <FaHtml5 className="fs-5" />,
        title: "HTML"
    },
    {
        id: 3,
        routeTo: "/css",
        icon: <FaCss3Alt className="fs-5" />,
        title: "CSS"
    },
    {
        id: 4,
        routeTo: "/javascript",
        icon: <RiJavascriptFill className="fs-5" />,
        title: "JavaScript"
    },
    {
        id: 5,
        routeTo: "/react",
        icon: <SiReact className="fs-5" />,
        title: "React.js"
    },
    {
        id: 6,
        routeTo: "/nodejs",
        icon: <FaNodeJs className="fs-5" />,
        title: "NodeJS"
    },
    {
        id: 7,
        routeTo: "/mongodb",
        icon: <SiMongodb className="fs-5" />,
        title: "MongoDB"
    },
    {
        id: 8,
        routeTo: "/github",
        icon: <FaGithub className="fs-5" />,
        title: "GitHub"
    },
];

export default dataSidebar;