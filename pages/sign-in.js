import Image from 'next/image'
import Head from 'next/head'

export default function Signin(){




    return (
    <>
    <div className="container mx-auto flex items-center justify-center mb-28">
    <Head>
      <title>Sign In</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="flex flex-col h-80 border-2 w-96 rounded-xl">
    <h1 className="antialiased font-semibold text-2xl text-center mt-5 mb-5">Log in to Lonsre</h1>
    <div className="flex flex-col items-center mb-5">
        <div className="input relative ">
            <span className="absolute inset-y-5 left-0 flex items-center pl-1">
                <button type="submit"  name="email" id="email" className="p-1 opacity-50" disabled>
                    <Image
                     src="/assets/personal_icon.svg"
                     width="24"
                     height="24"
                     alt="personal_icon"
                    />
                </button>
            </span>
            <input type="text" name="email" id="email" className="block border-2 rounded-md w-72 py-1 px-10 text-base" placeholder="Username or Email" />
        </div>
        <button className="block shadow-sm bg-primary py-1 px-5 text-base font-medium rounded-lg text-gray-900 mt-5 w-72 hover:bg-opacity-40 hover:border-2 transition delay-150 duration-300 ease-in-out">Continue With Email</button>
    </div>
    <div className="flex flex-row items-center">
        <span className="border w-48 ml-10 mr-5"></span>
        <p className="mr-5">Or</p>
        <span className="border w-48 mr-10"></span>
    </div>
    <div className="flex flex-row items-center justify-center">
        <button className="block shadow-sm py-1 px-5 mt-5 text-lg font-semibold rounded-lg w-72 bg-secondary hover:bg-opacity-40 hover:border-2 transition delay-150 duration-300 ease-in-out">Sign Up</button>
    </div>
</div>


    </div>

    </>
    )
}




{/* <div className="sign-in container mx-auto font-display flex items-center justify-center mb-28">
<div className="flex flex-col h-80 border-2 w-96 rounded-xl">
    <h1 className="antialiased font-semibold text-2xl text-center mt-5 mb-5">Log in to Lonsre</h1>
    <div className="flex flex-col items-center mb-5">
        <div className="input relative ">
            <span className="absolute inset-y-5 left-0 flex items-center pl-1">
                <button type="submit"  name="email" id="email" className="p-1 opacity-50" disabled>
                    <Image
                     src="/assets/personal_icon.svg"
                     width="24"
                     height="24"
                     alt="personal_icon"
                    />
                </button>
            </span>
            <input type="text" name="email" id="email" className="block border-2 rounded-md w-72 py-1 px-10 text-base" placeholder="Username or Email" />
        </div>
        <button className="block shadow-sm bg-primary py-1 px-5 text-base font-medium rounded-lg text-gray-900 mt-5 w-72 hover:bg-opacity-40 hover:border-2 transition delay-150 duration-300 ease-in-out">Continue With Email</button>
    </div>
    <div className="flex flex-row items-center">
        <span className="border w-48 ml-10 mr-5"></span>
        <p className="mr-5">Or</p>
        <span className="border w-48 mr-10"></span>
    </div>
    <div className="flex flex-row items-center justify-center">
        <button className="block shadow-sm py-1 px-5 mt-5 text-lg font-semibold rounded-lg w-72 bg-secondary hover:bg-opacity-40 hover:border-2 transition delay-150 duration-300 ease-in-out">Sign Up</button>
    </div>
</div>
</div> */}