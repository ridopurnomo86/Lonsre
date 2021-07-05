import Head from 'next/head'
import Image from 'next/image'

export default function Product() {
    return (
      <>


      {/* Head Html */}
      <Head>
      <title>Product</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>



      {/* Hero */}
        <div className="container mx-auto">
          <div className="images w-full h-full relative mb-28 font-display">
            <Image
              src="/assets/rupixen1.svg"
              width={1563}
              height={363}
              alt="responsive"
              alt="rupixen"
            />
            <div className="content flex flex-col w-3/12 absolute bottom-10 right-10 text-white md:bottom-5 md:right-3 md:w-4/12 sm:bottom-5 sm:right-0 sm:w-5/12">
              <h1 className="antialiased font-bold xl:text-4xl lg:text-2xl md:text-xl sm:text-base">Lonsre</h1>
              <h1 className="antialiased font-semibold xl:text-2xl lg:text-xl md:text-xl sm:text-base">Casual Black Notebook</h1>
              <p className="antialiased font-light md:text-base sm:text-xs">Environtment friendly white paper, cool style, simple and elegant.</p>
            </div>
          </div>


      {/* Product Section */}
          <div className="product-list mb-28">
            <div className="flex flex-col">
                <div className="title flex flex-col items-center justify-center mb-20">
                  <Image
                    src="/assets/Logo.svg"
                    width="114"
                    height="54"
                    alt="Logo"
                  />
                  <h1 className="antialiased font-bold text-xl">Our Product.</h1>
                </div>
            </div>

            {/* Card Product */}
            <div className="flex flex-row items-center justify-center p-15">
              <div className="card flex flex-col mr-10">
                <div className="images">
                  <Image
                    src="/assets/card-1.svg"
                    width={207}
                    height={191}
                    alt="card-1"
                  />
                </div>
                <div className="Content mb-5">
                  <h1 className="antialiased font-bold text-xl">Pink Notebook</h1>
                  <p className="antialiased font-normal text-lg">Whitepaper 90 Pages</p>
                  <p className="antialiased font-light text-md">From 20$</p>
                </div>
                <div className="button">
                  <a href="#" className="flex flex-row items-center font-bold text-secondary text-xl py-5 bg-black bg-opacity-80 w-full h-full justify-center">
                    <div className="flex items-center justify-center">
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


              <div className="card flex flex-col mr-10">
                <div className="images">
                  <Image
                    src="/assets/card-2.svg"
                    width={207}
                    height={191}
                    alt="card-2"
                    priority
                  />
                </div>
                <div className="Content mb-5">
                  <h1 className="antialiased font-bold text-xl">Pink Notebook</h1>
                  <p className="antialiased font-normal text-lg">Whitepaper 90 Pages</p>
                  <p className="antialiased font-light text-md">From 20$</p>
                </div>
                <div className="button">
                  <a href="#" className="flex flex-row items-center font-bold text-secondary text-xl py-5 bg-black bg-opacity-80 w-full h-full justify-center">
                    <div className="flex items-center justify-center">
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

              <div className="card flex flex-col mr-10">
                <div className="images">
                  <Image
                    src="/assets/card-4.svg"
                    width={207}
                    height={191}
                    alt="card-4"
                    priority
                  />
                </div>
                <div className="Content mb-5">
                  <h1 className="antialiased font-bold text-xl">Pink Notebook</h1>
                  <p className="antialiased font-normal text-lg">Whitepaper 90 Pages</p>
                  <p className="antialiased font-light text-md">From 20$</p>
                </div>
                <div className="button">
                  <a href="#" className="flex flex-row items-center font-bold text-secondary text-xl py-5 bg-black bg-opacity-80 w-full h-full justify-center">
                    <div className="flex items-center justify-center">
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

              <div className="card flex flex-col">
                <div className="images">
                  <Image
                    src="/assets/card-3.svg"
                    width={207}
                    height={191}
                    alt="card-3"
                  />
                </div>
                <div className="Content mb-5">
                  <h1 className="antialiased font-bold text-xl">Pink Notebook</h1>
                  <p className="antialiased font-normal text-lg">Whitepaper 90 Pages</p>
                  <p className="antialiased font-light text-md">From 20$</p>
                </div>
                <div className="button">
                  <a href="#" className="flex flex-row items-center font-bold text-secondary text-xl py-5 bg-black bg-opacity-80 w-full h-full justify-center">
                    <div className="flex items-center justify-center">
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
            </div>


          </div>

        </div>




      </>
    )
}
