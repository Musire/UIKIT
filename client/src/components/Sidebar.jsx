import { Link } from "react-router-dom"

const SidebarButton = ({ path, label }) => {
    return ( 
        <Link className="px-3 py-2 hover:bg-neutral-900 easy-transition text-silver/70 hover:text-silver" to={ path }>{ label }</Link>
     )
}

const SidebarSection = ({ label, children }) => {
    return ( 
        <div className="flex w-full gap-2 text-center mobile:flex-row md:flex-col">
            <h4 className="text-lg font-semibold capitalize mobile:hidden md:block">{ label }</h4>
            <ul className="flex mobile:flex-row md:flex-col">{ children }</ul>
        </div>
     )
}

const Sidebar = () => {
    return ( 
        <nav className="flex w-full h-full px-4 mobile:py-2 md:py-8 mobile:flex-row md:flex-col bg-neutral-600 text-whitesmoke mobile:row-start-2 md:row-start-1 gap-y-16 gap-x-4">
            <p className="px-4 py-3 font-bold text-center rounded-xl bg-silver text-deep mobile:size-14 md:w-full centered">Logo</p>
            <SidebarSection label="clothing" >
                <SidebarButton path="/category/jackets" label="jackets" />
                <SidebarButton path="/category/shoes" label="shoes" />
                <SidebarButton path="/category/pants" label="pants" />
                <SidebarButton path="/category/socks" label="socks" />
                <SidebarButton path="/category/shirts" label="shirts" />
            </SidebarSection>
        </nav>
     );
}
 
export default Sidebar;