import { BubblyLink } from "react-bubbly-transitions";
import { GiBurningBook } from "react-icons/gi";

const GoHome = () => {

    return (
        <div className="go_home">
            <BubblyLink to="/">
                <GiBurningBook className="go_home_icon" />
            </BubblyLink>
        </div>
    )
};

export default GoHome;