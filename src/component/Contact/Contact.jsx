
import { useForm } from "react-hook-form"




const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    // Submit the form to send data to an API server.
    return (
        <div>
            <h3 className="text-white text-5xl font-paragraph font-bold text-center">I WANT TO HEAR FROM YOU</h3>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5 lg:my-32'>
                <div className="mx-auto">
                    <img src="https://i.ibb.co/Lx99S0n/contact-removebg-preview.png" alt="" />
                    <h3 className="text-2xl font-paragraph font-semibold text-center text-white">Would you care to join me for a delightful coffee and conversation?</h3>
                </div>
                <div className="mx-10 lg:mx-20 mt-20">
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-6">
                            <div className="flex flex-col lg:flex-row gap-10 mb-10">
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    Name
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        {...register("Name", { required: true })} />
                                </label>

                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    Email
                                    <input
                                        type="text"

                                        placeholder="example@mail.com"
                                        {...register("Email", { required: true })} />
                                </label>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-10">
                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    Phone Number
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        {...register("Phone")} />
                                </label>


                                <label className="input input-bordered flex items-center gap-2 w-full">
                                    Country
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        {...register("Country", { required: true })} />
                                </label>
                            </div>

                            <textarea 
                            placeholder="Message" 
                            className="textarea textarea-bordered textarea-lg w-full"
                            {...register("Message", { required: true })} 
                            rows={6}></textarea>
                        </div>

                        <input 
                        className="btn btn-block text-white font-heading font-semibold text-base xl:text-lg bg-[#222222] hover:bg-[#222222] my-6" 
                        type="submit"
                        value="Send Me Message"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;