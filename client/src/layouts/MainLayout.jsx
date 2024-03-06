import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return ( 
        <section className="h-screen w-screen grid md:grid-cols-[10rem_1fr] overflow-hidden mobile:grid-rows-[1fr_5rem] md:grid-rows-1">
            {/* <div className="w-full h-full bg-neutral-600 centered text-whitesmoke mobile:row-start-2 md:row-start-1 ">sidebar</div> */}
            <Sidebar />
            <Outlet />
        </section>
     );
}
 
export default MainLayout;