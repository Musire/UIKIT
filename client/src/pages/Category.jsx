import { useParams } from "react-router-dom";
import { Breadcrumbs, LinkCard } from "@/components"
import { topBrands } from "@/constants"
import { v4 as uuidv4 } from 'uuid';


const Category = () => {

    const { categoryName } = useParams()
    const catalog = topBrands[categoryName]
    const cards = catalog?.map(item => <LinkCard key={uuidv4()} replace to={`../${item.path}`} label={item.label} />)

    return ( 
        <section className="flex flex-col w-full h-full p-8 bg-neutral-900 gap-y-4">
            <Breadcrumbs />
            <div id="card-container-category" className="card-container">
                {cards}
            </div>
        </section>
     );
}
 
export default Category;