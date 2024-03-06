import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return ( 
        <section className="w-screen h-screen overflow-hidden ">
            <Outlet />
        </section>
     );
}
 
export default MainLayout;