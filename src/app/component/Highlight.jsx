import Image from "next/image"
const Highlight = () => {
  return (
    <div className="my-10 ml-10 md:mx-0 md:ml-10">
      <div className="my-3">
      <div className="flex justify-between  md:ml-0 md:mr-10 mb-8">
        <p className="font-bold text-2xl">Highlights/Reels</p>
        <p className="text-sm text-blue-600 hidden md:block">View all</p>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="m-[-20px] md:m-[-50px] md:ml-[-55px]">
          <img src="/images/highlights/Group 1159.png" alt="highlight-1" />
        </div>
        <div className="m-[-20px] md:m-[-50px]">
          <img src="/images/highlights/Frame 1083 (1).png" alt="highlight-2" />
        </div>
        <div className="m-[-20px] md:m-[-50px]">
          <img src="/images/highlights/Frame 1083.png" alt="highlight-3" />
        </div>
        <div className="m-[-20px] md:m-[-50px]">
          <img src="/images/highlights/Group 1162.png" alt="highlight-4" />
        </div>
      </div>
      {/* <div className="flex justify-start items-center md:hidden mt-3">
          <p className="text-sm text-blue-600">View all</p>
        </div> */}
</div>
      <div className="flex gap-2 justify-center items-center">
        <img src="/images/icons/Group 1244.png" alt="arrow1" className='h-14 md:h-auto' />
        <img src="/images/icons/Group 1104.png" alt="arrow2" className='h-14 md:h-auto' />
      </div>
    </div>
  )
}

export default Highlight