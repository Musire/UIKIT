import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
    const location = useLocation()
    const { pathname } = location
    const splitPathname = pathname.split("/").slice(1)
    
    return { pathname, splitPathname }
}
 
export default useBreadcrumbs;