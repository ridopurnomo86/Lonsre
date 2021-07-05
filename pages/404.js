import Link from 'next/link'


export default function NotFound() {
    return (
        <div className="not-found container mx-auto font-display mb-28 flex flex-col items-center justify-center">
            <h1 className="antialiased font-bold text-2xl">Sorry.....</h1>
            <p className="antialiased font-normal text-lg">That page cannot be found....</p>
            <p className="antialiased font-normal text-base">Go Back to <Link href="/"><a className="underline">Homepage</a></Link></p>
        </div>
    )
}