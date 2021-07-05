import Image from 'next/image'

// setting MD
export default function Section(){
  return (
    <>
    <div className="container mx-auto bg-gradient-to-tl from-secondary to-white flex justify-between rounded-lg mb-28 font-display">
    {/* Left Side */}
      <div className="left-side w-6/12">
        <div className="Content-text xl:p-20 lg:p-10 md:p-5 sm:p-3">
          <h1 className="font-bold lg:text-4xl antialiased sm:text-2xl">A tribute to quality Everyday.</h1>
          <p className="font-normal text-base antialiased text-justify mt-4 leading-normal tracking-normal border-b-2 pb-10 sm:pb-4 border-black lg:pb-20 sm:leading-none md:leading-tight">We have gathered product from around the world that are significant in the way form, and style. Things that bring joy to our lives, and become an essential park of our living.</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side object-contain overflow-hidden bg-white">
        <Image
          src="/assets/yellow-cactus.svg"
          width={622}
          height={424}
          alt="yellow-cactus"
          priority
        >
        </Image>
      </div>
    </div>
    </>
  )
}
