import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const events = useLoaderData(); // Assuming events data is fetched using `useLoaderData`

    // Framer Motion variant for cards with additional animations
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        },
        hover: {
            scale: 1.05,
            rotate: 5,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <div>
            {/* Welcome Section */}
            <section className="text-white text-center pt-20 pb-5">
                <h1 className="text-4xl font-bold">Welcome to <span className="text-[#07B0CE]">OceanCapp</span> University</h1>
                <p className="mt-4 text-lg">Manage your courses, faculty, and more all in one place</p>

                <div className="mt-8">
                    <div className="flex justify-center space-x-10">
                        <div>
                            <h2 className="text-3xl font-bold">
                                <CountUp start={0} end={8} duration={5} />
                            </h2>
                            <p className="text-lg">Faculties</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                <CountUp start={0} end={21} duration={2} />
                            </h2>
                            <p className="text-lg">Academic Programs</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                <CountUp start={0} end={2021} duration={2} />
                            </h2>
                            <p className="text-lg">Total Graduates</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">
                                <CountUp start={0} end={12} duration={2} />
                            </h2>
                            <p className="text-lg">Convocations Held</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to='/contact'>
                        <button className="mt-8 ml-6 border-2 border-[#07B0CE] text-[#07B0CE] px-4 py-2 rounded-lg hover:bg-[#07B0CE] hover:text-white transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>

            {/* News and Events Section with Framer Motion */}
            <section className="py-16">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">News and Events</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <Link to={`/events/${event.id}`} key={event.id}> {/* Wrap with Link */}
                                <motion.div
                                    className="border border-[#07B0CE] p-8 shadow-lg rounded-lg cursor-pointer"
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="relative">
                                        <img src={event.image} alt={event.eventName} className="w-full h-40 object-cover rounded-lg mb-4" />
                                        <p className="absolute top-2 left-2 text-sm text-white bg-[#07B0CE] bg-opacity-80 px-3 py-1 rounded shadow-md">
                                            {event.date}
                                        </p>
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#07B0CE]">{event.eventName}</h3>
                                    <p className="text-lg">{event.shortDescription}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>



                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"The University has completely transformed how I manage my academic life. Its user-friendly design helps me stay organized with classes, assignments, and grades all in one place."</p>
                            <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Sarah Ali, Computer Science Student</h3>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"The updated dashboard is a lifesaver! It’s intuitive and allows me to efficiently track my academic progress, deadlines, and attendance without any hassle."</p>
                            <h3 className="mt-4 text-xl text-[#07B0CE] font-semibold">- James Anderson, Business Administration Student</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
