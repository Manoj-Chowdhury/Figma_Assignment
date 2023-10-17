import React from 'react'

const OurWork = () => {
  return (
    <div className="md:my-24 ml-10 mr-10 md:mr-0">
            <div className="flex justify-between items-center md:mr-10 mb-8">
                <p className="font-bold text-2xl">Our work</p>
            </div>
            <div className="flex gap-14 justify-center md:flex-nowrap md:gap-0 ml-7 md:ml-0 my-8 md:my-0">
                <div className='mx-[-40px] my-[-40px] md:m-[-50px] md:ml-[-55px]'>
                    <img src="/images/our_work/Rectangle 953.png" alt="highlight-1" />
                </div>
                <div className="m-[-40px] md:m-[-50px]">
                <img src="/images/our_work/Rectangle 951.png" alt="highlight-1" />
                </div>
                <div className=" m-[-40px] md:m-[-50px]">
                <img src="/images/our_work/Rectangle 952.png" alt="highlight-1" className='m-0'/>
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <img src="/images/icons/Group 1244.png" alt="arrow1" className='h-14 md:h-auto'/>
                <img src="/images/icons/Group 1104.png" alt="arrow2" className='h-14 md:h-auto'/>
            </div>
        </div>
  )
}

export default OurWork