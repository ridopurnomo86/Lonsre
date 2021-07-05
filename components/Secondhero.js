import Image from 'next/image'

export default function Secondhero(){
  return (
    <>

    <div className="container mx-auto grid xl:grid-cols-5 grid-flow-rows gap-4 sm:grid-rows-none lg:grid-cols-3 mb-28 font-display">
      <div className="col-span-3 bg-primary rounded-lg">
        <div className="flex justify-between relative overflow-hidden">
          <div className="content w-6/12 px-5 py-2">
            <h1 className="antialiased font-bold md:text-4xl sm:text-2xl">Our Creation.</h1>
            <p className="antialiased font-normal text-sm text-justify mt-2">We believe we have one of the most flexible retail business models –
            from our franchise operation structure to our world-class supply chain sourcing materials and manufacturing.</p>
          </div>
          <div className="object-contain relative w-6/12">
            <Image
              src="/assets/flowers.svg"
              width={406}
              height={183}
              layout="responsive"
              alt="flower1"
              priority
            />
          </div>
        </div>
      </div>

      <div className="row-span-2 bg-secondary rounded-lg flex flex-row justify-between sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2">
        <div className="flex flex-col justify-between md:w-3/12 lg:w-3/12 xl:w-5/12 overflow-hidden">
          <div className="flex flex-col p-5">
            <h1 className="antialiased font-bold md:text-4xl sm:text-2xl">Wood Pencing</h1>
            <p className="antialiased font-normal text-base text-justify mt-2">Price : 10$</p>
          </div>
          <div className="p-5">
            <a href="#" className="flex flex-row items-center font-bold text-secondary py-2 bg-black bg-opacity-80 rounded-lg mb-5 md:px-6 sm:px-4">
              <div className="mr-2 flex items-center justify-center">
              <Image
                src="/assets/cart.svg"
                width="25"
                height="25"
                alt="cart"
              />
              </div>
              Buy Now
            </a>
          </div>
        </div>
        <div className="object-contain relative sm:w-4/12 md:w-4/12 lg:w-7/12">
          <Image
            src="/assets/wood-spiske.svg"
            width={271}
            height={333}
            layout="responsive"
            alt="wood-spiske"
            priority
          />
        </div>
      </div>

      <div className="col-span-3 bg-secondary rounded-lg">
        <div className="flex justify-between relative overflow-hidden">
          <div className="content w-6/12 px-5 py-2">
            <h1 className="antialiased font-bold md:text-4xl sm:text-2xl">Stylite-Yu.</h1>
            <p className="antialiased font-normal text-sm text-justify mt-2 sm:mt-0">Custom made from Giovanni, Italy. Take chinese culture for a more natural style.</p>
            <a href="#" className="inline-block font-bold mt-4 py-2 px-10 bg-black bg-opacity-80 text-secondary rounded-lg sm:px-6 sm:py-2">Learn More</a>
          </div>
          <div className="object-contain relative w-6/12">
            <Image
              src="/assets/Stylite-yu.svg"
              width={406}
              height={183}
              layout="responsive"
              alt="Stylite-yu"
              priority
              />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
