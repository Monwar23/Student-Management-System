import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const StudentDashboard = () => {
  const courses = useLoaderData();
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Student Portal</h1>


      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-lg hover:shadow-xl transition relative border border-[#07B0CE] cursor-pointer"
          >
            <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-[#07B0CE]">{course.student.name}</h2>
            
            <button
              className=" text-[#07B0CE] hover:underline"
              onClick={() => setSelectedCourse(course)}
            >
              Details Course
            </button>
            </div>
            <p className="text-white mt-2 font-bold">Grade : <span className="font-bold">{course.student.grade}</span></p>
            <p className="text-white mt-2 ">
              <span className="font-bold">Courses : </span>
              <ul className="list-disc list-inside">
                {course.student.courses.map((studentCourse, courseIndex) => (
                  <li key={courseIndex} className="">
                    {studentCourse.courseId} - {studentCourse.courseName}
                  </li>
                ))}
              </ul>
            </p>

            {course.student.upcomingEvents.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#07B0CE]">Upcoming Events:</h3>
                <ul className="list-disc list-inside mt-2">
                  {course.student.upcomingEvents.map((event, eventIndex) => (
                    <li key={eventIndex} className="text-white">
                      {event.eventId} - {event.eventName} (Date: {event.date})
                    </li>
                  ))}
                </ul>
              </div>
            )}

         

          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="p-8 rounded-lg text-white shadow-2xl max-w-lg border-4 border-[#07B0CE] bg-gray-800">
            <h2 className="text-4xl font-bold mb-6 text-[#07B0CE]">{selectedCourse.student.name} ({selectedCourse.student.grade})</h2>

            <div className="space-y-4">
        {/* Iterate over the courses */}
        {selectedCourse.student.courses.map((course) => (
          <div key={course.courseId} className="course-info">
            <p>
              <strong className="text-[#07B0CE]">Course ID: </strong> {course.courseId}
            </p>
            <p>
              <strong className="text-[#07B0CE]">Course Name: </strong> {course.courseName}
            </p>
            <p>
              <strong className="text-[#07B0CE]">Professor: </strong> {course.professor.name}
            </p>
            <p>
              <strong className="text-[#07B0CE]">Professor's Email: </strong> {course.professor.email}
            </p>
            <p>
              <strong className="text-[#07B0CE]">Grade: </strong> {course.grade}
            </p>
            <p>
              <strong className="text-[#07B0CE]">Course Info: </strong> {course.info}
            </p>
          </div>
        ))}
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

    </div>
  );
};

export default StudentDashboard;
