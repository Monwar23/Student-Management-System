import { useState } from "react";

const StudentDashboard = () => {
  const courses = [
    { name: "Web Development", grade: "A", professor: "John Doe", contact: "john@example.com" },
    { name: "Data Structures", grade: "B+", professor: "Jane Smith", contact: "jane@example.com" },
    { name: "Algorithms", grade: "A-", professor: "Emily Davis", contact: "emily@example.com" },
    { name: "Database Systems", grade: "B", professor: "Michael Brown", contact: "michael@example.com" },
    { name: "Operating Systems", grade: "A", professor: "Anna Taylor", contact: "anna@example.com" },
    { name: "Computer Networks", grade: "B+", professor: "Chris Green", contact: "chris@example.com" },
    { name: "Software Engineering", grade: "A-", professor: "David White", contact: "david@example.com" },
    { name: "Artificial Intelligence", grade: "A", professor: "Sarah Johnson", contact: "sarah@example.com" }
];


  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#07B0CE]">Student Portal</h1>
      
      <p className="mb-8 text-lg text-center text-white">
        Welcome to your dashboard. Here you can view your current courses, grades, and additional information.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course, index) => (
          <div
            key={index}
            className=" p-6 shadow-lg rounded-lg hover:shadow-xl transition relative border border-[#07B0CE]"
            onMouseEnter={() => setHoveredCourse(index)}
            onMouseLeave={() => setHoveredCourse(null)}
          >
            <h2 className="text-2xl font-semibold text-[#07B0CE]">{course.name}</h2>
            <p className="text-white mt-2">Grade: <span className="font-bold">{course.grade}</span></p>
            <p className="text-white">Professor: {course.professor}</p>

            {hoveredCourse === index && (
              <div className="absolute top-0 right-0 p-4 border-2 border-[#07B0CE] rounded-lg shadow-lg z-10">
                <p className="text-white">Contact: <a href={`mailto:${course.contact}`} className="text-white">{course.contact}</a></p>
              </div>
            )}
          </div>
        ))}
      </div>

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
