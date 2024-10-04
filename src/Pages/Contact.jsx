
const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-5 text-[#07B0CE]">Contact Us</h1>
            <p className="text-lg text-center mb-10 text-white">We'd love to hear from you! Please fill out the form below.</p>
            
            <div className="flex justify-center">
                <form className="bg-[#07B0CE] p-8 rounded-lg shadow-md w-full max-w-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 rounded-lg border border-gray-300 w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 rounded-lg border border-gray-300 w-full"
                            required
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        className="p-3 w-full rounded-lg border border-gray-300 mb-4"
                        rows="5"
                        required
                    />
                    <button 
                        type="submit" 
                        className="bg-[#07B0CE] text-white px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-[#07B0CE] transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="mt-10 text-center">
                <h2 className="text-2xl text-white font-bold mb-4">Contact Information</h2>
                <p className="mb-2 text-white">📞 <span className=" text-[#07B0CE]">Phone</span> : (123) 456-7890</p>
                <p className="mb-2 text-white">✉️ <span className="text-[#07B0CE]"> Email</span> : info@oceancapp.edu</p>
                <p className="text-white">🌐 <span className="text-[#07B0CE]"> Website</span> : www.oceancapp.com</p>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center mb-4 text-white">Our Location</h2>
                <div className="flex justify-center">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.843271900476!2d90.39452361498164!3d23.75815398458014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79b9887f6a1%3A0x8e2c85b032e72d25!2sOceanCapp%20University!5e0!3m2!1sen!2sbd!4v1696437207312!5m2!1sen!2sbd"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
