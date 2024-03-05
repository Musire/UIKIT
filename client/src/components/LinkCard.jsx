import { Link } from "react-router-dom";

const LinkCard = (props) => {
    return ( 
        <Link {...props} className="w-48 h-56 capitalize bg-neutral-600 text-whitesmoke centered rounded-xl">{props.label}</Link>
     );
}
 
export default LinkCard;