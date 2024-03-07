import { Link } from "react-router-dom";

const LinkCard = (props) => {
    return ( 
        <Link {...props} className="capitalize mobile:w-44 mobile:h-48 md:w-48 md:h-56 bg-gradient-to-br from-neutral-600 to-neutral-900 text-whitesmoke centered rounded-xl mobile:hover:scale-105 md:hover:scale-110 easy-transition xs:w-full xs:h-56">{props.label}</Link>
     );
}
 
export default LinkCard;