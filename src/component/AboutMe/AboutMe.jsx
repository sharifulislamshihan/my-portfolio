
const AboutMe = () => {
    return (
        <div className="my-40">
            <h3 className="text-white text-5xl font-paragraph font-semibold text-center mb-28">
                React-ive & Creative
            </h3>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:mx-10 xl:mx-40">
                <div>
                    <img src="" alt="" />
                </div>
                <div className="mx-10 text-center lg:text-left">
                    <h3 className=" text-[#ebe8e1] text-3xl font-semibold font-heading mb-10">Me, Myself, and I: The Coding Edition</h3>
                    <div className="flex justify-center lg:justify-start">
                        <hr className="w-1/4 h-10" />
                    </div>
                    <p className="text-slate-500 text-lg hover:text-slate-300 py-5">Greetings! I'm <span className="font-semibold">Shariful Islam Shihan</span> a dedicated MERN Stack Developer with a keen eye for FRONTEND development. Specializing in REACT, I thrive on translating concepts into seamless user interfaces. My journey is fueled by a passion for innovation and a commitment to creating engaging digital experiences. Beyond coding, I delve into the ever-evolving world of frontend trends, always seeking new inspiration.</p>

                    <p className="text-slate-500 hover:text-slate-300 py-5">When I'm not immersed in the virtual realm, you'll likely find me savoring a cup of coffee and contemplating the next big project. I believe in the power of collaboration and continuous learning, and I'm excited to connect with fellow developers, collaborators, or anyone interested in the dynamic world of MERN and frontend development. Let's embark on this coding adventure together – follow me on <a className="text-lg font-bold underline" href="www.linkedin.com/in/shariful-islam-shihan">LinkedIn</a> and let's make something extraordinary!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;