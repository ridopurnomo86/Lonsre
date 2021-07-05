import Image from 'next/image'

export default function Newarrival(){
  return (
    <>
    {/* Title Content */}
    <div className="container mx-auto bg-primary h-auto rounded-lg mb-28 font-display">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="antialiased font-base text-base mt-5">New Arrival</h1>
        <h1 className="antialiased font-bold text-2xl">Closure Collection</h1>
        <p className="antialiased text-base lg:w-4/12 md:w-6/12 sm:w-6/12 text-center mt-2 text-current">Just-in the brand new collection of your favorite minimal notebook.
        Now available in more than 16 references between new colours and grids.</p>
        <a href="#" className="inline-block font-bold text-primary py-2 bg-black bg-opacity-80 rounded-lg mb-10 mt-5 md:px-10 sm:px-4">Learn More</a>
      </div>
      {/* Image Content */}
      <div className="object-contain relative">
        <Image
          src="/assets/katie-harp.svg"
          width={1245}
          height={585}
          layout="responsive"
          alt="katie-harp"
          priority
         />
         {/* Details Content */}
         <div className="flex flex-row absolute bottom-1 p-10 lg:right-20 lg:bottom-10 md:right-0 md:p-0 md:bottom-10 sm:p-0 sm:right-0 xl:bottom-10 xl:right-36">
           <div className="flex flex-col w-4/12 md:pb-2 lg:p-5">
             <h1 className="antialiased font-bold mb-2 lg:text-lg sm:text-base">Paper</h1>
             <p className="antialiased font-normal text-gray-800 lg:text-base sm:text-sm">All-white paper 90 grams.</p>
           </div>
           <div className="flex flex-col w-4/12 md:pb-2 lg:p-5">
             <h1 className="antialiased font-bold mb-2 lg:text-lg sm:text-base">Inside & Another</h1>
             <p className="antialiased font-normal text-gray-800 lg:text-base sm:text-sm">80 pages, pen, other stationery equipment.</p>
           </div>
         </div>
      </div>

    </div>
    </>
  )
}
