import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FirstHero from '../components/Firsthero'
import Secondhero from '../components/Secondhero'
import Section from '../components/Section'
import Infotransaction from '../components/Infotransaction'
import Discount from '../components/Discount'
import Quotes from '../components/Quotes'
import Newarrival from '../components/Newarrival'
import NewCollection from '../components/NewCollection'



import { useEffect, useState } from 'react'



export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  // Action to the Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Condition toggle
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500){
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    // Add Action Window Scrolling
    window.addEventListener("scroll", toggleVisibility);
    // Remove Action Windows Scrolling
    return () => window.removeEventListener("scroll", toggleVisibility);

  },[])



  return (
    <>
    <Head>
      <title>Lonsre</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {/* Button to The Top */}
    { isVisible ? (
      <motion.div 
        className="p-2 fixed bottom-10 cursor-pointer right-10 shadow-lg bg-white flex items-center fill-current text-red-900 rounded-lg z-40"
         animate={{
           scale: [0, 1]
          }}
         transition={{ duration: 0.5 }}
         onClick={scrollToTop}>
          <Image 
            src="/assets/arrow-up.svg"
            width="25"
            height="25"
            alt="arrow-up"
          />
      </motion.div>
    ) : (      
      <motion.div 
        className="p-2 fixed bottom-10 cursor-pointer right-10 shadow-lg bg-white flex items-center fill-current text-red-900 rounded-lg z-40"
         animate={{
           scale: [1, 0]
          }}
         transition={{ duration: 0.5 }}
         onClick={scrollToTop}>
          <Image 
            src="/assets/arrow-up.svg"
            width="25"
            height="25"
            alt="arrow-up"
          />
      </motion.div>
  ) }

    <FirstHero />
    <Secondhero />
    <Section />
    <Newarrival />
    <NewCollection />
    <Infotransaction />
    <Discount />
    <Quotes />
    </>
  )
}
