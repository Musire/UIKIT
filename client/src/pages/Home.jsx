import { LinkCard } from "@/components"
import { allClothing } from "@/constants";
import { useConvertDataStructure } from "@/hooks";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const { objToArray } = useConvertDataStructure()
    const clothingArray = objToArray(allClothing)
    const cards = clothingArray?.map(item => <LinkCard key={uuidv4()} to={item.path} label={item.label} />)

    return ( 
        <section id="home-page" className=" mobile:row-start-1 md:col-start-2 mobile:row-span-1 bg-neutral-900 text-whitesmoke h-full w-full grid grid-cols-1 grid-rows-[3rem_1fr] text-center p-8 gap-y-4">
            <h2 className="text-3xl">Home Page</h2>
            <div id="card-container" className="w-full max-h-[83%] md:max-h-full  grid grid-cols-2 gap-3 px-4 overflow-y-scroll scrollbar-none md:grid-cols-6 place-items-center">
                {cards}
            </div>
        </section>
     );
}
 
export default Home;