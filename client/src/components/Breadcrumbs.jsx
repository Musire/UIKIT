import { IoHomeOutline as HomeIcon, IoChevronForwardOutline as NextIcon } from "react-icons/io5";
import { useBreadcrumbs } from "@/hooks"
import { Link } from "react-router-dom";

const Crumb = ({ label, tail }) => {
    return ( 
        <>
            { (tail) ? <p className="text-xl w-fit px-2">{ label }</p> : 
            (<span className="flex gap-x-2  ">
                <p className="text-xl w-fit px-2">{ label }</p>
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
        <div className="h-20 w-full spaced">
            <ul className="flex">
                <span className="flex gap-x-2">
                    <Link to={'/home'} >
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