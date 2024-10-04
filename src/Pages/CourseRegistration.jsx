import { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseRegistration = () => {
    const [submitted, setSubmitted] = useState(false);
    const courses = useLoaderData();

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const courseRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        nameRef.current.value = '';
        emailRef.current.value = '';
        courseRef.current.value = '';
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="p-8 rounded-lg shadow-lg w-full max-w-lg border border-[#07B0CE]">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Enroll in Courses
                </h2>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#07B0CE] font-semibold">Name</label>
                            <input
                                type="text"
                                ref={nameRef}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg" required
                            />
                        </div>

                        <div>
                            <label className="block text-[#07B0CE] font-semibold">Email</label>
                            <input
                                type="email"
                                ref={emailRef}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg" required
                            />
                        </div>

                        <div>
                            <label className="block text-[#07B0CE] font-semibold">Course</label>
                            <select
                                ref={courseRef}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07B0CE] focus:border-transparent" required
                            >
                                <option value="" className="text-gray-500">Select a course</option>
                                {courses.map((course) => (
                                    <option key={course} value={course.name} className="text-[#286570]">
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-[#07B0CE] text-white rounded-lg hover:bg-[#07B0CE] transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-6 p-4 bg-[#07B0CE] text-white rounded-lg animate-pulse">
                        <p>Success! You have been enrolled in the course.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourseRegistration;
