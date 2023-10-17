

const AboutUs = () => {
    return (
        <div className="my-10 mx-10">
            <div className="mr-10 mb-8">
                <p className="font-bold text-2xl">About Us</p>
            </div>
            <div className="flex justify-between my-8 flex-col md:flex-row">
                <div className="md:w-2/5">
                    <p className="w-11/12">Welcome to Luminary Captures, your trusted studio platform for capturing and preserving precious moments. We are a team of passionate photographers dedicated to delivering exceptional photography experiences. With our user-friendly app, you can effortlessly showcase your unique style and creativity, while we ensure your memories are beautifully preserved. </p>
                    <div className="flex flex-col md:flex-row md:justify-between my-8">
                        <div className="flex flex-grow items-center">
                            <img src="/images/social_icons/phone.png"  alt="phone logo" />
                            <p>+91 987 654 3210</p>
                        </div>
                        <div className="flex flex-grow items-center">
                            <img src="/images/social_icons/mail.png" alt="mail logo" className="-ml-1"/>
                            <p>info@luminarycaptures.com</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-4/5 my-8">
                        <img src="/images/social_icons/Instagram.png" alt="Instagram logo" />
                        <img src="/images/social_icons/Facebook.png" alt="Facebook logo" />
                        <img src="/images/social_icons/YouTube.png" alt="YouTube logo" />
                        <img src="/images/social_icons/LinkedIn.png" alt="LinkedIn logo" />
                        <img src="/images/social_icons/Twitter.png" alt="Twitter logo" />
                    </div>
                </div>
                <div className="md:w-2/6  flex flex-row justify-between md:flex-col">
                    <div>
                        <img src="/images/social_icons/AboutLogo.png" alt="About Logo" className="h-auto -mt-8 -ml-6"/>
                    </div>
                    <div className="flex flex-col md:flex-row items-center m-0 p-0"> 
                        <img src="/images/Cinematography.png" alt="logo" className="-mt-6 h-20"/>
                        <p className="font-bold md:text-lg text-sm flex-grow md:mx-4">LUMINARY CAPTURES</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs