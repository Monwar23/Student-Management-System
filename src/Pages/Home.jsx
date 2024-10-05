import { motion } from "framer-motion";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const events = useLoaderData();

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

            <section className="py-16">
    <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
        <Marquee pauseOnHover={true} speed={50}>
            <div className="flex">
                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The University has completely transformed how I manage my academic life. Its user-friendly design helps me stay organized with classes, assignments, and grades all in one place."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co/YZQNFjG/Whats-App-Image-2024-10-04-at-22-39-27-e359895b.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Sarah Ali, Computer Science Student</h3>
                </div>
                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The updated dashboard is a lifesaver! It’s intuitive and allows me to efficiently track my academic progress, deadlines, and attendance without any hassle."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co/m8Bjk74/pexels-italo-melo-881954-2379004.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl text-[#07B0CE] font-semibold">- James Anderson, Business Administration Student</h3>
                </div>

                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The study resources available through the platform have significantly improved my learning experience. I can easily access all materials needed for my courses."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co.com/BCBqm14/Whats-App-Image-2024-10-04-at-22-39-26-116b6f9a.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Emily Clark, Psychology Major</h3>
                </div>

                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The ability to communicate with my professors and peers directly through the platform has made collaboration and feedback much easier."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co.com/P6jRCVR/Whats-App-Image-2024-10-04-at-22-39-30-103912f2.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Michael Brown, Engineering Student</h3>
                </div>

                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"I love how I can customize my dashboard to fit my personal needs and study habits. It makes a big difference in my academic journey."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co.com/sbHX87w/Whats-App-Image-2024-10-04-at-22-39-32-fb73657b.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Jessica Taylor, History Student</h3>
                </div>

                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The platform's mobile app is fantastic! I can keep up with my coursework and deadlines on the go, which has been a game changer for me."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co.com/Ks6LPWq/Whats-App-Image-2024-10-04-at-22-39-33-6fa97259.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- David Lee, Marketing Student</h3>
                </div>

                <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg mr-8 w-80">
                    <p>"The feedback I receive from my assignments is prompt and constructive, helping me improve continuously in my studies."</p>
                    <div className="flex justify-center mt-4">
                        <img src="https://i.ibb.co.com/0GtkGV6/pexels-madvortex-16887219.jpg" alt="" className="rounded-full h-32 w-32" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Laura Kim, Biology Major</h3>
                </div>
            </div>
        </Marquee>
    </div>
</section>

        </div>
    );
};

export default Home;
