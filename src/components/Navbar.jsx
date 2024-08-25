import React, {useState} from 'react'
import {menuItems} from "../assets/constants"
import {logo} from "../assets"

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
        }else{
            setMenuOpen(true)
        }
    }

  return (

    <div className=' border border-red-500 relative top-10 py-3 mb-20 bg-bgblack z-10'>
        <nav className={`
        border
        px-8
        flex justify-between items-center`}
        >
            
            {/* logo */}
            <div className='w-[80px] h-[80px]'>
                <a className="text-3xl font-bold leading-none" href="#">
                    <img src={logo} className="h-full" alt="logo" />
                </a>
            </div>
            
            {/* hamburger icon and sidebar menu */}
            <div className={`${menuOpen ? 'hidden' : 'visible'} lg:hidden`}>
                <button className="navbar-burger flex items-center text-white p-3" onClick={toggleMenu}>
                    <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>

            {/* main large screen navbar*/}
            <ul className="
            hidden 
            lg:flex lg:items-center lg:w-auto lg:space-x-10"
            >
                
                {menuItems.map((item, index) => (
                    <li key={"nav-item-" + index} className='mb-1'>
                        <a className="
                        transition-all cursor-pointer 
                        text-md 
                        text-white hover:text-gray-500"
                        
                        href={item.toUrl}
                        >{item.name}</a>
                    </li>
                ))}
                
            </ul>
           
        </nav>

        {/* this is the weird opacity thing that we can enable later */}
        <div className={`${menuOpen ? "visible" : "hidden"} fixed inset-0 bg-white/20 opacity-25`}></div>
		
        <nav className={` 
            ${menuOpen ? "flex" : "hidden"}
            fixed top-0 left-0 bottom-0 
            flex flex-col 
            w-5/6 max-w-sm py-6 px-6 
            bg-bgwhite border-r 
            overflow-y-auto`}>
			
            {/* logo and close icon on sidebar */}
            <div className="flex items-center justify-end mb-8">
                    
                {/* close icon */}
				<button className="navbar-close" onClick={toggleMenu}>
					<svg className="h-6 w-6 text-accentGray cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
                    {menuItems.map((item, index) => (
                        <li key={"nav-item-mobile-" + index} className='mb-6'>
                            <a href={item.toUrl} className="cursor-pointer block p-4 text-lg text-gray-500 hover:text-accentGray transition-colors" onClick={toggleMenu}>
                                {item.name}
                            </a>
                        </li>
                    ))}
					
				</ul>
			</div>
        </nav>
    
    </div>

  )
}

export default Navbar