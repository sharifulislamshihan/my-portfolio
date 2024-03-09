
const Services = () => {
    return (
        <div>
            <h3 className="text-white text-5xl font-paragraph font-bold text-center">Service Provide For My Clients.</h3>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-16 xl:mx-40 my-40">

                <div className="card shadow-xl bg-[#222222]">
                    <img className="w-20 h-20" src="https://i.ibb.co/QvCnnv7/mern.png" alt="MERN STACK" />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                       
                    </div>
                </div>


                <div className="card shadow-xl bg-[#222222]">
                    <img className="w-20 h-20" src="https://i.ibb.co/QvCnnv7/mern.png" alt="Frontend" />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


                <div className="card shadow-xl bg-[#222222]">
                    <img className="w-20 h-20" src="https://i.ibb.co/QvCnnv7/mern.png" alt="React" />
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;