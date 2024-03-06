import { useParams } from "react-router-dom";
import { Breadcrumbs } from "@/components"

const Details = () => {
    const { elementId } = useParams()

    return ( 
        <section className="flex flex-col w-full h-full p-8 bg-neutral-900 gap-y-4">
            <Breadcrumbs />
        </section>
     );
}
 
export default Details;