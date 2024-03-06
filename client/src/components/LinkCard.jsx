import { Link } from "react-router-dom";

const LinkCard = (props) => {
    return ( 
        <Link {...props} className="w-48 h-56 capitalize bg-gradient-to-br from-neutral-600 to-neutral-900 text-whitesmoke centered rounded-xl mobile:hover:scale-105 md:hover:scale-110 easy-transition">{props.label}</Link>
     );
}
 
export default LinkCard;