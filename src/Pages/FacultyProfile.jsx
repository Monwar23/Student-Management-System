import { useLoaderData, useParams } from "react-router-dom";

const FacultyProfile = () => {
    const faculties = useLoaderData()
    const { id } = useParams()
    const faculty = faculties.find((faculty) => faculty.id === Number(id));

    console.log(faculty);
    const {name,profileImage,bio,courses,officeHours,contact}=faculty
    return (
        <div className="p-4 border border-[#07B0CE] text-white m-8 text-center rounded-xl">
            <div className="flex justify-center ">
            <img src={profileImage} alt={faculty.name} className="rounded-full w-44 h-44" />
            </div>
            <h1 className="text-3xl font-bold text-[#07B0CE]">{name}</h1>
            <p className="mt-4"><strong className="text-[#07B0CE]">Bio :</strong> {bio}</p>
            <p className="mt-4"><strong className="text-[#07B0CE]">Courses :</strong> {courses.join(", ")}</p>
            <p className="mt-4"><strong className="text-[#07B0CE]">Office Hours :</strong> {officeHours}</p>
            <p className="mt-4"><strong className="text-[#07B0CE]">Contact :</strong> <a href={`mailto:${contact}`}>{contact}</a></p>
           
        </div>
    );
};

export default FacultyProfile;