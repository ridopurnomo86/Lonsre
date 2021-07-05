import Image from 'next/image'

export default function firstHero(){
    return (
        <>
        <div className="firsthero container mx-auto bg-primary flex justify-between rounded-lg mb-28 font-display">

        {/* Left Side */}
          <div className="left-side content-start flex flex-col justify-between w-3/6 sm:justify-between sm:p-4 lg:p-10 md:p-10">
            <div className="Content-text">
              <h1 className="font-bold md:text-4xl antialiased sm:text-xl">Shop Everything.</h1>
              <p className="font-normal text-base antialiased">All you need is right here.</p>
            </div>
            <div className="learnMore-button sm:mt-4">
              <a href="#" className="inline-block font-bold text-primary py-2 px-10 bg-black bg-opacity-90 rounded-lg sm:px-4">Learn More</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="right-side object-contain overflow-hidden bg-contain bg-no-repeat bg-top flex flex-nowrap rounded-lg">
            <Image
              src="/assets/note1.svg"
              width={680}
              height={363}
              alt="note1"
              placeholder="blur"
              priority
            >
            </Image>
          </div>
        </div>
        </>
    )
}
