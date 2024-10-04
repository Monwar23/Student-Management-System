
const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className=" text-white text-center py-20">
                <h1 className="text-4xl font-bold">Welcome to OceanCapp University</h1>
                <p className="mt-4 text-lg">Manage your courses, faculty, and more all in one place</p>
                <button className="mt-8 border-2 border-[#07B0CE] text-[#07B0CE] px-4 py-2 rounded-lg hover:bg-[#07B0CE] hover:text-white transition duration-300">
                    Get Started
                </button>
            </section>

            {/* Features Section */}
            <section className="py-16 ">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Student Dashboard</h3>
                            <p>Access all your courses, grades, and upcoming events.</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Faculty Overview</h3>
                            <p>Find information on faculty members and their subjects.</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Course Registration</h3>
                            <p>Browse and enroll in courses with an easy-to-use form.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className=" py-16">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Seminar on AI</h3>
                            <p>October 15, 2024</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Final Exams</h3>
                            <p>December 20, 2024</p>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <h3 className="text-xl font-semibold">Campus Fest</h3>
                            <p>December 25, 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 ">
                <div className="container mx-auto text-center text-white">
                    <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"The University Management System is a game-changer! It's streamlined and intuitive, making it easy to keep track of my academic journey."</p>
                            <h3 className="mt-4 text-xl font-semibold">- John Doe</h3>
                        </div>
                        <div className="border border-[#07B0CE] p-8 shadow-lg rounded-lg">
                            <p>"I love the new dashboard! It's clean, easy to use, and helps me stay on top of my grades and assignments."</p>
                            <h3 className="mt-4 text-xl font-semibold">- Jane Smith</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
