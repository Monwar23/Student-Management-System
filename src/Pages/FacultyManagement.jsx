import { useState } from "react";

const facultyList = [
    { name: "John Doe", designation: "Professor", subject: "Computer Science", officeHours: "10 AM - 12 PM", contact: "john@university.edu" },
    { name: "Jane Smith", designation: "Associate Professor", subject: "Mathematics", officeHours: "1 PM - 3 PM", contact: "jane@university.edu" },
    { name: "Alice Johnson", designation: "Lecturer", subject: "Physics", officeHours: "11 AM - 1 PM", contact: "alice@university.edu" },
    { name: "Robert Brown", designation: "Assistant Professor", subject: "Chemistry", officeHours: "2 PM - 4 PM", contact: "robert@university.edu" },
    { name: "Emily Davis", designation: "Senior Lecturer", subject: "Biology", officeHours: "9 AM - 11 AM", contact: "emily@university.edu" },
    { name: "Michael Wilson", designation: "Professor", subject: "History", officeHours: "12 PM - 2 PM", contact: "michael@university.edu" },
    { name: "Laura Martinez", designation: "Associate Professor", subject: "English Literature", officeHours: "10 AM - 12 PM", contact: "laura@university.edu" },
    { name: "James Anderson", designation: "Lecturer", subject: "Political Science", officeHours: "3 PM - 5 PM", contact: "james@university.edu" },
    { name: "Sarah Lee", designation: "Assistant Professor", subject: "Economics", officeHours: "11 AM - 1 PM", contact: "sarah@university.edu" },
    { name: "David White", designation: "Professor", subject: "Philosophy", officeHours: "9 AM - 11 AM", contact: "david@university.edu" }
  ];
  

const FacultyManagement = () => {
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredFaculty = facultyList.filter((faculty) =>
    faculty.name.toLowerCase().includes(search.toLowerCase()) ||
    faculty.subject.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleSearch = () => {
    console.log("Search term:", search);
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#07B0CE]">Faculty Overview</h1>

      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search Faculty by Name or Subject"
          className="border border-[#07B0CE] focus:border-[#07B0CE] focus:outline-[#07B0CE] p-2 rounded-l-md w-1/2 md:w-1/2 bg-transparent text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-[#07B0CE] px-4 py-2 rounded-r-md border-2 border-[#07B0CE] hover:bg-[#07B0CE] hover:text-white hover:font-bold transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredFaculty.map((faculty, index) => (
          <div
            key={index}
            className="border border-[#07B0CE] p-6 shadow-lg rounded-lg hover:shadow-xl transition relative"
          >
            <div className="cursor-pointer" onClick={() => toggleExpand(index)}>
              <h2 className="text-2xl font-semibold text-[#07B0CE]">{faculty.name}</h2>
              <p className="text-white mt-2">{faculty.designation}</p>
              <p className="text-white">Subject : {faculty.subject}</p>
            </div>

            {expandedIndex === index && (
              <div className="mt-4 border border-[#07B0CE] p-4 rounded-lg shadow-lg">
                <p className="text-white"><strong>Office Hours : </strong> {faculty.officeHours}</p>
                <p className="text-white"><strong>Contact : </strong> <a href={`mailto:${faculty.contact}`} className="text-white">{faculty.contact}</a></p>
              </div>
            )}
          </div>
        ))}

        {filteredFaculty.length === 0 && (
          <p className="text-center text-white">No faculty members found.</p>
        )}
      </div>
    </div>
  );
};

export default FacultyManagement;
