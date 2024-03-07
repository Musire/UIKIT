import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

const MainLayout = () => {
    
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/home')
    }, [navigate])

    return ( 
        <section className="w-screen h-screen overflow-hidden ">
            <Outlet />
        </section>
     );
}
 
export default MainLayout;