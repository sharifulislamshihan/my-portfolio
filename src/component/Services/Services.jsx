import { BiBug, BiCodeAlt, BiCodeCurly, BiCog } from "react-icons/bi";
const Services = () => {
    return (
        <div>
            <h3 className="text-white text-5xl font-paragraph font-bold text-center">Service Provide For My Clients.</h3>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-10 mx-12 lg:mx-20 xl:mx-32 my-40">

                <div className="card shadow-xl bg-[#222222]">
                    <BiCodeAlt className="text-white text-6xl mx-auto mt-12 mb-5 font-semibold" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-[#e6e3dc] font-paragraph font-medium mt-3 mb-10 ">WEB DEVELOPMENT</h2>
                        <div className="text-md font-heading">
                            <ul className="list-none text-white opacity-50 space-y-2">
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> HTML / CSS
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> TAILWIND / BOOTSTRAP
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> JAVASCRIPT
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> RESPONSIVE DESIGN
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> REACT JS
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> NODE JS
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> EXPRESS JS
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> MONGODB
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card shadow-xl bg-[#222222]">
                    <BiCog className="text-white text-6xl mx-auto mt-12 mb-5 font-semibold" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-[#e6e3dc] font-paragraph font-medium mt-3 mb-10 ">CUSTOM APPLICATION</h2>
                        <div className="text-md font-heading">
                            <ul className="list-none text-white opacity-50 space-y-2">
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> CLIENT DEMAND WEBSITE
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> REDESIGN WEBSITE
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> API DEVELOPMENT and INTEGRATION
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> RESPONSIVE DESIGN
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card shadow-xl bg-[#222222]">
                    <BiCodeCurly className="text-white text-6xl mx-auto mt-12 mb-5 font-semibold" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-[#e6e3dc] font-paragraph font-medium mt-3 mb-10 ">FRONTEND DEVELOPMENT</h2>
                        <div className="text-md font-heading">
                            <ul className="list-none text-white opacity-50 space-y-2">
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> FIGMA TO HTML
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> FIGMA TO REACT
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> RESPONSIVE DESIGN
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> REACT JS
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> ANIMATION
                                </li>
                                <li className="flex items-center">
                                    <span className="mx-5">»</span> PIXEL PERFECT DESIGN
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card shadow-xl bg-[#222222]">
                    <BiBug className="text-white text-6xl mx-auto mt-12 mb-5 font-semibold" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-[#e6e3dc] font-paragraph font-medium mt-3 mb-10 ">TESTING & DEBUGGING</h2>
                        <div className="text-md font-heading">
                            <ul className="list-none text-white opacity-50 space-y-2">
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> WEB TESTING
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> BUG FIXING
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> FUNCTIONAL TESTING
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> ERROR HANDLING
                                </li>
                                <li className="flex items-center pb-3">
                                    <span className="mx-5">»</span> IMPROVEMENT
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;