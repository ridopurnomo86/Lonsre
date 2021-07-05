
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){

  const [NavClick, setNavClick] = useState(false);


  const NavbarOnClick = (e) => {
    e.preventDefault();
    setNavClick(!NavClick);
  }


    return (
        <>
        <div className="navbar container mx-auto mt-10 mb-10 font-display">
          <nav className="flex justify-between">
            {/* Left Navbar */}
            <div className="flex items-center">
              <Link href="/">
              <a>
              <Image
                src="/assets/Logo.svg"
                width="114"
                height="54"
                alt="Logo"
              />
              </a>
              </Link>
              <Link href="/product">
                <a className="font-bold not-italic antialiased text-lg ml-4">Product</a>
              </Link>
            </div>

            {/* Right Navbar */}
            <div className="flex items-center">
              <div className="items-center sm:hidden lg:flex">
              <Image
                src="/assets/personal_icon.svg"
                width="24"
                height="24"
                alt="personal_icon"
              >
              </Image>
              </div>

              <Link href="/sign-in">
               <a className="font-bold not-italic antialiased text-lg ml-4 sm:hidden lg:flex">Sign In</a>
              </Link>

                {/* Toggle */}
                <motion.div className="menu-bars-icon flex items-center ml-4 lg:hidden" 
                onClick={NavbarOnClick}>
                  { NavClick ? 
                    <Image
                      src="/assets/times-solid.svg"
                      width="24"
                      height="24"
                      alt="times-solid"
                    /> : 
                    <Image
                      src="/assets/bars-solid.svg"
                      width="24"
                      height="24"
                      alt="bars-solid"
                    />  
                  }
                </motion.div>
            </div>
          </nav>
          
          { NavClick ?
            (
              <motion.div className="container mx-auto absolute -right-0 w-0 h-full overflow-hidden bg-white rounded-lg z-40" 
              animate={{width: 160, opacity: 1}} initial={{x: 0}} transition={{duration: 1}}>
                <div className="flex flex-col items-center justify-start py-5 divide-y divide-black">
                  <div className="icon p-2">                                                                                                        
                    <Image
                      src="/assets/personal_icon.svg"
                      width="24"
                      height="24"
                      alt="personal_icon"
                    />
                  </div>
                  <div className="link-sign-in p-2 text-center flex">
                    <Link href="/sign-in">
                      <a className="font-bold text-black not-italic z-50 antialiased text-lg">Sign In</a>
                    </Link>
                  </div>
                </div>
              </motion.div>
          ) :             (
              <motion.div className="container mx-auto absolute -right-0 w-0 h-full overflow-hidden bg-white rounded-lg z-40" 
              animate={{width: 0, opacity: 0}} initial={{x: 0}} transition={{duration: 1}}>
                <div className="flex flex-col items-center justify-start py-5 divide-y divide-black">
                  <div className="icon p-2">                                                                                                        
                    <Image
                      src="/assets/personal_icon.svg"
                      width="24"
                      height="24"
                      alt="personal_icon"
                    />
                  </div>
                  <div className="link-sign-in p-2 text-center flex">
                    <Link href="/sign-in">
                      <a className="font-bold text-black not-italic z-50 antialiased text-lg">Sign In</a>
                    </Link>
                  </div>
                </div>
              </motion.div>
        ) 
        } 
        </div>
        </>
    )
}
