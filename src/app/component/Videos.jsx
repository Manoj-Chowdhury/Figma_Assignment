
const Videos = () => {
    return (
        <div className="my-10 ml-10 mr-10 md:mr-0">
            <div className="flex justify-between items-center md:mr-10 mb-8">
                <p className="font-bold text-2xl">Videos</p>
                <p className="text-sm text-blue-600 hidden md:block">View all</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-center md:flex-nowrap md:gap-0 ">
                <div className="flex flex-col mr-3 ">
                    <img src="/images/videos/Rectangle 928.png" alt="highlight-1" />
                    <h3 className="font-bold">Wedding</h3>
                    <p className="text-sm font-extralight">Relive Your Special Motions in Timeless Motion</p>
                </div>
                <div className="flex flex-col mr-2 md:mx-3">
                    <img src="/images/videos/Rectangle 932.png" alt="highlight-1" />
                    <h3 className="font-bold">Sangeeth</h3>
                    <p className="text-sm font-extralight">Relive Your Special Motions in Timeless Motion</p>
                </div>
                <div className="flex flex-col mr-2 md:mx-3">
                    <img src="/images/videos/Rectangle 928.png" alt="highlight-1" />
                    <h3 className="font-bold">Mehendi</h3>
                    <p className="text-sm font-extralight">Relive Your Special Motions in Timeless Motion</p>
                </div>
            </div>
                <div className="flex justify-start items-center md:hidden mt-3">
                    <p className="text-sm text-blue-600">View all</p>
                </div>
            <div className="md:flex gap-2 justify-center hidden">
                <img src="/images/icons/Group 1244.png" alt="arrow1" />
                <img src="/images/icons/Group 1104.png" alt="arrow2" />
            </div>
        </div>
    )
}

export default Videos