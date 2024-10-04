import CountUp from "react-countup";
import { Link } from "react-router-dom";

const Home = () => {
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
            <Link to='/student'>
                <button className="mt-8 border-2 border-[#07B0CE] text-[#07B0CE] px-4 py-2 rounded-lg hover:bg-[#07B0CE] hover:text-white transition duration-300">
                    Get Started
                </button>
            </Link>
            <Link to='/contact'>
                <button className="mt-8 border-2 border-[#07B0CE] text-[#07B0CE] px-4 py-2 rounded-lg hover:bg-[#07B0CE] hover:text-white transition duration-300">
                    Contact Us
                </button>
            </Link>
            </div>
        </section>

            <section className="py-16 ">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link to='/student'>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl mb-2 font-semibold text-[#07B0CE]">Student Dashboard</h3>
                            <p>Access all your courses, grades, and upcoming events.</p>
                        </div>
                        </Link>
                        <Link to='/faculty'>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl mb-2 font-semibold text-[#07B0CE]">Faculty Overview</h3>
                            <p>Find information on faculty members and their subjects.</p>
                        </div>
                        </Link>
                       <Link to='/enroll'>
                       <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl mb-2 font-semibold text-[#07B0CE]">Course Registration</h3>
                            <p>Browse and enroll in courses with an easy-to-use form.</p>
                        </div>
                       </Link>
                    </div>
                </div>
            </section>

            <section className=" py-16">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#07B0CE]">Seminar on AI</h3>
                            <p>October 15, 2024</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#07B0CE]">Final Exams</h3>
                            <p>December 20, 2024</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold text-[#07B0CE]">Campus Fest</h3>
                            <p>December 25, 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"The University has completely transformed how I manage my academic life. Its user-friendly design helps me stay organized with classes, assignments, and grades all in one place."</p>
                            <h3 className="mt-4 text-xl font-semibold text-[#07B0CE]">- Sarah Ali, Computer Science Student</h3>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"he updated dashboard is a lifesaver! It’s intuitive and allows me to efficiently track my academic progress, deadlines, and attendance without any hassle."</p>
                            <h3 className="mt-4 text-xl text-[#07B0CE] font-semibold">- James Anderson, Business Administration Student</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
