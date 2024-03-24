
import { useForm } from "react-hook-form"
import { Element } from "react-scroll";
import Swal from "sweetalert2";




const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        // Sending data for email
        console.log(data);
        fetch('https://my-portfolio-server-eta-eight.vercel.app/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(), reset())
        Swal.fire({
            title: "So Sweet of you. I will get back to you at my earliest convenience",
            text: "Peace",
            imageUrl: "https://i.ibb.co/TtLHmgD/happy-cat-jamart-photography.jpg",
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: "Happy image"
        });

    };


    // Submit the form to send data to an API server.
    return (
        <Element name="contact">
            <div>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-paragraph font-bold text-center mx-3">I WANT TO HEAR FROM YOU</h3>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5 lg:my-32'>
                    <div className="mx-auto">
                        <img src="https://i.ibb.co/Lx99S0n/contact-removebg-preview.png" alt="" />
                        <h3 className="text-2xl md:text-4xl font-paragraph font-semibold text-center text-white mx-2 md:mx-0">Would you care to join me for a <br />delightful coffee and conversation?</h3>
                    </div>
                    <div className="mx-10 lg:mx-20 mt-20">
                        <form className="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-6">
                                <div className="flex flex-col lg:flex-row gap-10 mb-10">
                                    <label className="input input-bordered flex items-center gap-2 w-full">
                                        Name
                                        <input
                                            className="w-full"
                                            type="text"
                                            placeholder="Your Name"
                                            {...register("Name", { required: true })} />
                                    </label>

                                    <label className="input input-bordered flex items-center gap-2 w-full">
                                        Email
                                        <input
                                            type="text"
                                            className="w-full"
                                            placeholder="example@mail.com"
                                            {...register("Email", { required: true })} />
                                    </label>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-10">
                                    <label className="input input-bordered flex items-center gap-2 w-full">
                                        Phone Number
                                        <input
                                            className="w-full"
                                            type="tel"
                                            placeholder="Phone Number"
                                            {...register("Phone", { required: true })} />
                                    </label>


                                    <label className="input input-bordered flex items-center gap-2 w-full">
                                        Address
                                        <input
                                            className="w-full"
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
        </Element>
    );
};

export default Contact;