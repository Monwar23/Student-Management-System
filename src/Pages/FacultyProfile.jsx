import { useLoaderData, useParams } from "react-router-dom";

const FacultyProfile = () => {
    const faculties = useLoaderData()
    const { id } = useParams()
    const faculty = faculties.find((faculty) => faculty.id === Number(id));

    console.log(faculty);
    const {name,profileImage,bio,courses,officeHours,contact}=faculty
    return (
        <div className="p-4 border border-[#07B0CE] text-white m-8 text-center">
            <img src={profileImage} alt={faculty.name} className="rounded-full w-32 h-32" />
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-4"><strong>Bio :</strong> {bio}</p>
            <p className="mt-4"><strong>Courses :</strong> {courses.join(", ")}</p>
            <p className="mt-4"><strong>Office Hours :</strong> {officeHours}</p>
            <p className="mt-4"><strong>Contact :</strong> <a href={`mailto:${contact}`}>{contact}</a></p>
           
        </div>
    );
};

export default FacultyProfile;