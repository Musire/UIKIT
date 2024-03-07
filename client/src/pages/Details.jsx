import { useParams } from "react-router-dom";

const Details = () => {
    const { details } = useParams()

    return ( 
        <section className="flex flex-col w-full h-full p-8 bg-neutral-900 gap-y-4">
            <h2 className="">it be me</h2>
        </section>
     );
}
 
export default Details;