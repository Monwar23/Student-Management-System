import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const FacultyManagement = () => {
  const [search, setSearch] = useState("");
  const facultyList = useLoaderData();

  // Filter faculty list based on search input
  const filteredFaculty = facultyList.filter((faculty) =>
    faculty.facultyName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Search term:", search);
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Faculty Overview</h1>

      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search Faculty by Name"
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
        {filteredFaculty.map((faculty) => (
          <div
            key={faculty.id}
            className="border border-[#07B0CE] p-6 shadow-lg rounded-lg transition"
          >
           <div className="flex justify-between">
           <div>
           <h2 className="text-2xl font-semibold text-[#07B0CE]">
              {faculty.facultyName}
            </h2>
            <p className="text-white">Dean: {faculty.deanName}</p>
           </div>
           <Link
              to={`/faculty/${faculty.id}`}
              className="mt-4 text-[#07B0CE] hover:underline"
            >
              Details
            </Link>
           
           </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyManagement;
