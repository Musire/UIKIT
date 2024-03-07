import { LinkCard } from "@/components"
import { allClothing } from "@/constants";
import { useConvertDataStructure } from "@/hooks";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const { objToArray } = useConvertDataStructure()
    const clothingArray = objToArray(allClothing)
    const cards = clothingArray?.map(item => <LinkCard key={uuidv4()} to={item.path} label={item.label} />)

    return ( 
        <section id="home-page" className="flex flex-col w-screen h-screen p-8 overflow-hidden bg-neutral-900 gap-y-4">
            <h2 className="flex items-center h-16 ml-4 text-xl ">Home Page</h2>
            <div id="card-container-home" className="card-container">
                {cards}
            </div>
        </section>
     );
}
 
export default Home;