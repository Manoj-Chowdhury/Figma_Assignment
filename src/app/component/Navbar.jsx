import Image from "next/image"
import Cinematography from "../assests/navbar/Cinematography.png"
import Home from "../assests/navbar/Frame 14231.png"
import Window from "../assests/navbar/Vector (1).png"
import Video from "../assests/navbar/Vector (2).png"
import NavImage from "../assests/navbar/Vector.png"
import VideoLibrary from "../assests/navbar/video_library.png"
import Hambergermenu from "../assests/navbar/hambergermenu.png"


export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-[100vw] px-6 py-2">
        <div className="flex items-center gap-2 uppercase font-bold">
            <Image 
                src={Cinematography}
                width={40}
                height={40}
                alt="logo image"
            />
            <span>luminary captures</span>
        </div>
        <div>
            <ul className="md:flex items-center gap-10 -translate-x-1/4 hidden">
                <li>
                    <Image
                        src={Home}
                        width={30}
                        height={30}
                        alt="home logo"
                    />
                </li>
                <li>
                    <Image
                        src={NavImage}
                        width={15}
                        height={15}
                        alt="home logo"
                    />
                </li>
                <li>
                    <Image
                        src={Window}
                        width={15}
                        height={15}
                        alt="home logo"
                    />
                </li>
                <li>
                    <Image
                        src={Video}
                        width={15}
                        height={15}
                        alt="home logo"
                    />
                </li>
                <li>
                    <Image
                        src={VideoLibrary}
                        width={15}
                        height={15}
                        alt="home logo"
                    />
                </li>
            </ul>
        </div>
        <div>
        <Image
            src={Hambergermenu}
            width={25}
            height={25}
            alt="home logo"
        />
        </div>
    </div>
  )
}
