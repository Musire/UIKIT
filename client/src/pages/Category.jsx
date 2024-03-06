import { useLocation, useParams, Outlet } from "react-router-dom";
import { Breadcrumbs, LinkCard } from "@/components"
import { topBrands } from "@/constants"
import { v4 as uuidv4 } from 'uuid';


const Category = () => {

    const { category } = useParams()
    const location = useLocation()
    const current = location.pathname.split("/").slice(-1)[0]
    
    const catalog = topBrands[category]
    const cards = catalog?.map(item => <LinkCard key={uuidv4()} replace to={`../${item.path}`} label={item.label} />)

    return ( 
        <section className="flex flex-col w-full h-full p-8 bg-neutral-900 gap-y-4">
            <Breadcrumbs />
            <div id="card-container-category" className="card-container">
                { (current === category) ? cards : <Outlet />  }
            </div>
        </section>
     );
}
 
export default Category;