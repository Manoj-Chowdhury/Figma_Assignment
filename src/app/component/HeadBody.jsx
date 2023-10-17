import Image from "next/image"
// import HomeImage from '../../../public/images/BLOBS.png'

const HeadBody = () => {
    return (
        <div className="bg-[url('/images/BLOBS.png')] h-[80vh] w-[100vw] flex items-center justify-center">
            <div className="text-center flex-col items-center justify-center w-[80%] mx-auto text-white ">
                <p className="uppercase py-2">welcome to</p>
                <h1 className="text-4xl font-bold py-2">Ram weds Sita</h1>
                <p className="py-4 font-thin">Embrace the Unforgettable where Laughter and Cherished  Memories Coverage A timeless journey unfolds, a hardwhelming Tale of Love that captures the essence of their eternal bond.</p>
                <button className="flex items-center bg-black text-sm text-white px-7 py-2 mx-auto rounded-2xl gap-2">Hire Us <img src="/images/photography.png" alt="cam logo" height={20} width={20}/></button>
            </div>
        </div>
    )
}

export default HeadBody