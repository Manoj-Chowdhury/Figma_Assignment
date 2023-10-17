import React from 'react'

const ContactUs = () => {
  return (
    <div className='mx-10 my-6 md:my-20 flex flex-col md:flex-row md:gap-28'>
        <div className=''>
            <h1 className='font-bold text-xl my-5'>Contact us</h1>
            <p className='font-extralight text-base my-4'>Moments Captured, Memories Preserved  Reach Out and Let Your Story Unfold.</p>
            <div className='md:hidden block'>
            <img src="/images/Rectangle 22.png" alt="map" />
        </div>
            <form className='flex flex-col gap-6 my-8'>
                <input type="text" placeholder='Enter your name' className='h-12 p-4 rounded-xl focus:outline-none border-gray-500 border-[1px]'/>
                <input type="text" placeholder='Enter your contact number' className='h-12 p-4 rounded-xl focus:outline-none border-gray-500 border-[1px]'/>
                <input type="text" placeholder='Enter your email ID' className='h-12 p-4 rounded-xl focus:outline-none border-gray-500 border-[1px]'/>
                <textarea placeholder='Enter your message' className='h-24 p-4 rounded-xl focus:outline-none border-gray-500 border-[1px]'/>
                <div className='w-full flex justify-start'>
                <button className="flex items-center justify-center bg-black text-sm text-white px-7 py-2 rounded-2xl gap-2 mx-0">Contact Us <img src="/images/photography.png" alt="cam logo" height={20} width={20}/></button>
                </div>
            </form>
        </div>
        <div className='hidden md:block'>
            <img src="/images/Rectangle 22.png" alt="map" />
        </div>
    </div>
  )
}

export default ContactUs