import Image from 'next/image'

export default function Discount() {
  return (
    <>
    <div className="container mx-auto flex justify-between rounded-lg mb-28 font-display bg-fourth">
      {/* Left Side */}
      <div className="left-side object-contain flex overflow-hidden w-6/12 lg:w-12/12">
        <Image
          src="/assets/tirico.svg"
          width={623}
          height={274}
          alt="tirico"
          priority
         />
      </div>
      {/* Right Side */}
      <div className="right-side w-6/12 xl:p-14 lg:px-10 lg:py-6 md:p-2 sm:px-3 sm:py-2">
        <h1 className="font-bold lg:text-2xl antialiased md:text-xl sm:text-lg">Get Free Discount 30%</h1>
        <p className="font-normal text-base antialiased">Receive 30% off after registered account.</p>
        <p className="font-normal text-base antialiased mb-10 sm:mb-5">It this simple.</p>
        <a href="#" className="inline-block text-fourth font-bold py-2 lg:px-10 bg-black bg-opacity-90 rounded-lg md:px-4 sm:px-4 sm:py-1">Create Account</a>
      </div>
    </div>
    </>
  )
}
