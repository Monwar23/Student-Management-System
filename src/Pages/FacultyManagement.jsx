import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const FacultyManagement = () => {
  const [search, setSearch] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const facultyList=useLoaderData()

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
           <div className="flex justify-between">
           <div className="cursor-pointer" onClick={() => toggleExpand(index)}>
              <h2 className="text-2xl font-semibold text-[#07B0CE]">{faculty.name}</h2>
              <p className="text-white mt-2">{faculty.designation}</p>
              <p className="text-white">Subject : {faculty.subject}</p>
            </div>
            <Link to={`/faculty/${faculty.id}`} className="btn bg-transparent border border-[#07B0CE] mt-4 text-white hover:bg-[#07B0CE] hover:border-none">View Details</Link>
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
