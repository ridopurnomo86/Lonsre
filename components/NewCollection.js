import Image from 'next/image'

export default function NewCollection(){
  return (
    <>
    <div className="container mx-auto rounded-lg bg-third mb-28 font-display">
      <div className="flex flex-col items-center">
        <h1 className="antialiased font-bold text-2xl mt-5">New Collection</h1>
        <p className="antialiased text-base text-center text-current mt-5">A brand of best collection notebook.</p>
        <p className="antialiased text-base text-center text-current">Our most popular products based on sales.</p>
        <a href="#" className="inline-block font-bold text-third py-2 bg-black bg-opacity-80 rounded-lg mb-10 mt-2 md:px-10 sm:px-4">Learn More</a>
      </div>
      <div className="object-contain flex items-center justify-center">
        <Image
          src="/assets/best-collection.svg"
          width={734}
          height={418}
          alt="best-collection"
          priority
        />
      </div>
      <div className="flex flex-row items-center justify-center mt-10">
        <div className="flex flex-col md:w-2/12 sm:w-4/12 sm:p-4 md:p-5">
          <h1 className="antialiased font-bold mb-2 lg:text-lg sm:text-base">Paper</h1>
          <p className="antialiased font-normal text-gray-800 text-left lg:text-base sm:text-sm">All-white paper 90 grams with the highest quality.</p>
        </div>
        <div className="flex flex-col md:w-2/12 sm:w-4/12 sm:p-4 md:p-5">
          <h1 className="antialiased font-bold mb-2 lg:text-lg sm:text-base">Inside & Another</h1>
          <p className="antialiased font-normal text-gray-800 text-left lg:text-base sm:text-sm">120 pages with bold pen , other stationery equipment.</p>
        </div>
        <div className="flex flex-col md:w-2/12 sm:w-4/12 sm:p-4 md:p-5">
          <h1 className="antialiased font-bold mb-2 lg:text-lg sm:text-base">Stays Flat</h1>
          <p className="antialiased font-normal text-gray-800 text-left lg:text-base sm:text-sm">Bound design is notebook will open flat from any page.</p>
        </div>
      </div>
    </div>
    </>
  )
}
