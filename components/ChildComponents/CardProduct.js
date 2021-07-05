import Image from 'next/image'


export default function CardProduct({children}){

    return (
        <div className="card-product">
            <div className="images">
                <Image
                src='/assets/${children}'
                width={207}
                height={191}
                alt="Card-Product"
                />
            </div>
            <div className="content">
                <h1>{children}</h1>
                <p>{children}</p>
                <p>{children}</p>
            </div>
            <div className="button">
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
    )

}
