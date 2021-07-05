import Image from 'next/image'

export default function Footer(){
  return (
    <>
    <footer className="flex flex-col font-display bg-gradient-to-t from-primary to-white">
      <div className="content-Subscribe flex flex-col">
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="font-bold text-4xl antialiased">Subscribe Us!</h1>
          <p className="font-semibold text-base text-gray-600 antialiased">Get special offers, exclusive product news, and event info straight to your inbox.</p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <input type="textbox" placeholder="E-mail" className="block border-2 rounded-lg border-black border-opacity-50 bg-none py-2 px-5 w-3/12" />
          <a href="#" className="inline-block px-10 py-2 bg-black bg-opacity-90 font-bold text-xl text-primary rounded-lg ml-2 antialiashed md:px-2">Subscribe</a>
        </div>
      </div>

      <div className="container mx-auto flex flex-row p-8 mt-5">
        <div className="flex flex-col mr-10">
          <h1 className="font-bold antialiased text-lg mb-5">Navigate</h1>
          <p className="font-light antialiased opacity-90">Home</p>
          <p className="font-light antialiased opacity-90">Product</p>
          <p className="font-light antialiased opacity-90">Contact</p>
        </div>
        <div className="flex flex-col mr-10">
          <h1 className="font-bold antialiased text-lg mb-5">Order</h1>
          <p className="font-light antialiased opacity-90">Closure Collection</p>
          <p className="font-light antialiased opacity-90">Best Collection</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold antialiased text-lg mb-5">Social</h1>
          <p className="font-light antialiased opacity-90">Twitter</p>
          <p className="font-light antialiased opacity-90">Facebook</p>
          <p className="font-light antialiased opacity-90">Instagram</p>
        </div>
      </div>

      <div className="container mx-auto flex flex-row items-center justify-between border-t-2 border-black border-opacity-50 p-3">
        <Image
          src="/assets/Logo.svg"
          width="114"
          height="54"
          alt="Logo"
        >
        </Image>
        <p>Lonsre @Copyright 2021</p>
      </div>

    </footer>
    </>
  )
}
