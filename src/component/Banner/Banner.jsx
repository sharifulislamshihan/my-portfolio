import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Marquee from "react-fast-marquee";

const Banner = () => {

    return (
        <div className="">
            <div className=" grid grid-cols-1 lg:grid-cols-2 z-50">
                <div className="flex flex-col justify-center items-center text-center pt-32 lg:text-left lg:ml-5">
                    <h3 className="text-white text-2xl md:text-4xl xl:text-5xl font-semibold font-heading">Hey There, I am Shihan</h3>
                    <div className="text-3xl md:text-6xl lg:text-4xl xl:text-6xl font-bold font-paragraph py-7 opacity-70 text-[#FEFBEA]">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Frontend Developer',
                                1000,
                                'React Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                            ]}
                            speed={40}
                            style={{

                            }}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="py-10">
                        <button className="btn btn-outline text-white text-center">Download Resume <FaDownload></FaDownload> </button>
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <img className="w-1/2" src="https://i.ibb.co/fx52Lx4/banner.png" alt="" />
                </div>
            </div>

            <div className=" z-0">
                <Marquee className="opacity-50 overflow-hidden">
                    <h3 className=" text-6xl xl:text-9xl font-paragraph"> Frontend Developer specializing in React and the MERN stack... </h3>
                </Marquee>
            </div>
        </div>
    );

};

export default Banner;