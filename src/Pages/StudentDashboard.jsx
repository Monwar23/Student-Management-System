import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const StudentDashboard = () => {
  const courses = useLoaderData();
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Student Portal</h1>
    

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-lg hover:shadow-xl transition relative border border-[#07B0CE] cursor-pointer"
            onMouseEnter={() => setHoveredCourse(index)}
            onMouseLeave={() => setHoveredCourse(null)}
          >
            <h2 className="text-2xl font-semibold text-[#07B0CE]">{course.name}</h2>
            <p className="text-white mt-2">Grade : <span className="font-bold">{course.grade}</span></p>
            <p className="text-white">Professor : {course.professor}</p>

            {hoveredCourse === index && (
              <div className="absolute top-0 right-0 p-4 border-2 border-[#07B0CE] rounded-lg shadow-lg z-10">
                <p className="text-white"><span className="text-[#07B0CE]">Contact</span> : <a href={`mailto:${course.contact}`} className="text-white">{course.contact}</a></p>
              </div>
            )}

   
            <button
              className="mt-4 btn bg-transparent border border-[#07B0CE] text-white hover:bg-[#07B0CE] hover:border-none"
              onClick={() => setSelectedCourse(course)}
            >
              Details Course
            </button>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="p-8 rounded-lg text-white shadow-2xl max-w-lg border-4 border-[#07B0CE] bg-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-[#07B0CE]">{selectedCourse.name}</h2>
            
            <div className="space-y-4">
              <p>
                <strong className="text-[#07B0CE]">Course Description : </strong> {selectedCourse.description}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Course Syllabus : </strong> {selectedCourse.syllabus}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Prerequisites : </strong> {selectedCourse.prerequisites}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Credits : </strong> {selectedCourse.credits}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Professor : </strong> {selectedCourse.professor}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Schedule : </strong> {selectedCourse.schedule}
              </p>
              <p>
                <strong className="text-[#07B0CE]">Enrollment : </strong> {selectedCourse.enrollmentDetails}
              </p>
            </div>

            <button
              className="mt-6 border-2 border-[#07B0CE] text-[#07B0CE] px-6 py-3 rounded-lg hover:bg-[#07B0CE] hover:text-white transition duration-300"
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-[#07B0CE]">Upcoming Events</h3>
        <ul className="list-disc list-inside text-white">
          <li>Final Exams - December 20, 2024</li>
          <li>Project Submission Deadline - December 15, 2024</li>
          <li>University Sports Meet - January 10, 2025</li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
