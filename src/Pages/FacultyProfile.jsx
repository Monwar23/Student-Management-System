import { useLoaderData, useParams } from "react-router-dom";

const FacultyProfile = () => {
    const faculties = useLoaderData();
    const { id } = useParams();
    const faculty = faculties.find((faculty) => faculty.id === Number(id));

    console.log(faculty);
    const { facultyName, deanName, facultyDetails, departments } = faculty;

    return (
        <div className="p-4 border border-[#07B0CE] text-white m-8 text-center rounded-xl">
            <h1 className="text-3xl font-bold text-[#07B0CE]">{facultyName}</h1>
            <h2 className="mt-2 text-xl">Dean: {deanName}</h2>

            <div className="mt-4">
                <p><strong className="text-[#07B0CE]">Contact:</strong> {facultyDetails.contact}</p>
                <p><strong className="text-[#07B0CE]">Office Hours:</strong> {facultyDetails.officeHours}</p>
                <p><strong className="text-[#07B0CE]">Location:</strong> {facultyDetails.location}</p>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#07B0CE]">Departments</h3>
            <div className="flex flex-wrap justify-center mt-4">
                {departments.map(department => (
                    <div key={department.id} className="border border-[#07B0CE] rounded-lg p-4 m-2 flex flex-col text-left bg-gray-800">
                        <h4 className="text-lg font-semibold text-[#07B0CE]">{department.name}</h4>
                        <p><strong className="text-[#07B0CE]">Head:</strong> {department.head}</p>
                        <p><strong className="text-[#07B0CE]">Contact:</strong> <a href={`mailto:${department.contact}`}>{department.contact}</a></p>
                        <p><strong className="text-[#07B0CE]">Office Hours:</strong> {department.officeHours}</p>
                        <p><strong className="text-[#07B0CE]">Courses:</strong> {department.courses.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyProfile;
