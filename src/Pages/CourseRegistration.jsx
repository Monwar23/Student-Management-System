import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const courses=useLoaderData()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!formData.course) tempErrors.course = 'Please select a course';
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                course: ''
            });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  p-8">
            <div className=" p-8 rounded-lg shadow-lg w-full max-w-lg border border-[#07B0CE]">
                <h2 className="text-3xl font-bold text-[#07B0CE] mb-6 text-center">
                    Enroll in Courses
                </h2>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-white font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-[#07B0CE] font-semibold">Course</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 bg-transparent border border-[#07B0CE] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07B0CE] focus:border-transparent"
                            >
                                <option value="" className="text-gray-500">Select a course</option>
                                {courses.map((course) => (
                                    <option key={course} value={course.name} className="text-[#286570]">
                                        {course.name}
                                    </option>
                                ))}
                            </select>
                            {errors.course && <p className="text-red-500 text-sm mt-2">{errors.course}</p>}
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
