import { Element } from "react-scroll";
const Projects = () => {
    return (
        <Element name="projects">
            <div>
                <h3 className="text-white text-xl lg:text-5xl font-paragraph font-bold text-center mx-3 ">VISIT MY PROJECTS</h3>
                <p className="text-white text-md lg:text-xl font-paragraph text-center my-5">A glimpse into my world of projects</p>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32 mb-20 justify-items-center mx-10 xl:mx-60">

                    {/* project 1 */}
                    <div className="card bg-[#222222] text-white shadow-xl">
                        <figure><img src="https://i.ibb.co/SwZQCF6/Home-Shop.png" alt="Home Shop" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph text-3xl font-bold">
                                Home Shop
                            </h2>
                            <p className="text-lg font-paragraph">A dynamic e-commerce platform crafted with the power of MERN stack, <span className="font-bold">constantly evolving</span></p>
                            <div className="card-actions font-paragraph justify-end gap-10 mt-5">
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>View Code</button>
                                    </a>
                                </div>
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>Live Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* project 2 */}

                    <div className="card bg-[#222222] text-white shadow-xl">
                        <figure><img src="https://i.ibb.co/f40gJrm/Tks-Bistro.png" alt="Tks Bistro" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph text-3xl font-bold">
                                TKS Bistro
                            </h2>
                            <p className="text-lg font-paragraph"> A dynamic MERN stack project redefining restaurant management.</p>
                            <div className="card-actions font-paragraph justify-end gap-10 mt-5">
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>View Code</button>
                                    </a>
                                </div>
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>Live Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* project 3 */}
                    <div className="card bg-[#222222] text-white shadow-xl">
                        <figure><img src="https://i.ibb.co/PjpjgrM/Wedding-Planner.png" alt="wedding planner" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-paragraph text-3xl font-bold">
                                Wedding Planner
                            </h2>
                            <p className="text-lg font-paragraph">Meticulously crafted with React</p>
                            <div className="card-actions font-paragraph justify-end gap-10 mt-5">
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>View Code</button>
                                    </a>
                                </div>
                                <div className="opacity-50 hover:opacity-100 hover:font-semibold">
                                    <a href="">
                                        <button>Live Demo</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-20">
                    <button className="btn btn-square">View More</button>
                </div>
            </div>
        </Element>
    );
};

export default Projects;