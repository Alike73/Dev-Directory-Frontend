import { BubblyLink } from "react-bubbly-transitions";

const FooterRoute = ({ routeTo, title }) => {

    return (
        <li className="nav-item mb-2">
            <BubblyLink to={ routeTo }>
                { title }
            </BubblyLink>
        </li>
    )
};

export default FooterRoute;