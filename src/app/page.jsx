import Image from 'next/image'
import Navbar from './component/Navbar'
import HeadBody from './component/HeadBody'
import Highlight from './component/Highlight'
import Videos from './component/Videos'
import Photos from './component/Photos'
import Haldi from './component/Haldi'
import AboutUs from './component/AboutUs'
import OurWork from './component/OurWork'
import ContactUs from './component/ContactUs'
import Sangeeth from './component/Sangeeth'
import Wedding from './component/Wedding'
import Dinner from './component/Dinner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-betweenw overflow-hidden">
      <div>
        <Navbar />
        <HeadBody />
        <Highlight />
        <Videos />
        <Photos />
        <Haldi />
        <Sangeeth />
        <Wedding />
        <Dinner />
        <AboutUs />
        <OurWork />
        <ContactUs />
      </div>
    </main>
  )
}
