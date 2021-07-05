import Image from 'next/image'

export default function Infotransaction(){
  return (
    <>
    <div className="container mx-auto h-72 flex flex-row align-center justify-center font-display">
        {/* First Section */}
        <div className="flex flex-col w-3/12 mr-32 text-justify md:mr-20 sm:mr-10">
          <div className="images w-full sm:w-4/12">
            <Image
              src="/assets/truck.svg"
              width="50"
              height="50"
              alt="truck"
            />
          </div>
          <div className="content-text w-5/6">
            <h1 className="antialiased text-2xl font-semibold md:text-xl sm:text-lg">Free Delivery</h1>
            <p className="antialiased font-normal text-base mt-3">Free delivery on all orders over $10 for Indonesian.</p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col w-3/12 mr-32 text-justify md:mr-20 sm:mr-10">
          <div className="images w-full sm:w-4/12">
            <Image
              src="/assets/credit.svg"
              width="50"
              height="50"
              alt="truck"
            />
          </div>
          <div className="content-text w-5/6">
            <h1 className="antialiased text-2xl font-semibold md:text-xl sm:text-lg">Easy Payments</h1>
            <p className="antialiased font-normal text-base mt-3">We have a trust partners and data protection for the best experience.</p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col w-3/12 text-justify">
          <div className="images w-full sm:w-4/12">
            <Image
              src="/assets/contact.svg"
              width="50"
              height="50"
              alt="truck"
            />
          </div>
          <div className="content-text w-5/6">
            <h1 className="antialiased text-2xl font-semibold md:text-xl sm:text-lg">Any Question?</h1>
            <p className="antialiased font-normal text-base mt-3">Any more questions? Head over to our support or customer service. We can help you.</p>
          </div>
        </div>
    </div>
    </>
  )
}
