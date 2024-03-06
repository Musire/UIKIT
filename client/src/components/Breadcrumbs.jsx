import { IoHomeOutline as HomeIcon, IoChevronForwardOutline as NextIcon } from "react-icons/io5";
import { useBreadcrumbs } from "@/hooks"
import { Link } from "react-router-dom";

const Crumb = ({ label, tail }) => {
    return ( 
        <>
            { (tail) ? <p className="px-2 text-xl lowercase text-silver w-fit">{ decodeURIComponent(label) }</p> : 
            (<span className="flex items-center gap-x-2">
                <p className="px-2 text-xl lowercase w-fit text-smoke">{ decodeURIComponent(label) }</p>
                <NextIcon size={30} />
            </span>)}
        </>
     );
}

const Breadcrumbs = () => {
    const { splitPathname } = useBreadcrumbs()
    const maxCountCrumbs = (splitPathname?.length - 1)

    const crumbs = splitPathname?.map((crumb, index) => {
        return (maxCountCrumbs == index) ? <Crumb key={crumb} label={crumb} tail /> : <Crumb key={crumb} label={crumb} />
    })

    return ( 
        <div className="w-full h-16 spaced">
            <ul className="flex items-center">
                <span className="flex items-center gap-x-2">
                    <Link to={'/home'} className="p-2 hover:bg-neutral-700 easy-transition rounded-xl text-smoke hover:text-silver" >
                        <HomeIcon size={30} />
                    </Link>
                    <NextIcon size={30} />
                </span>
                { crumbs }
            </ul>
        </div>
     );
}
 
export default Breadcrumbs;