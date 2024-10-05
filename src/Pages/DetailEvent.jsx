import { useLoaderData, useParams } from 'react-router-dom';

const DetailEvent = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const event = events.find((event) => event.id === Number(id));

    const { eventName, date, image, shortDescription, description } = event;

    return (
        <div className="container mx-auto p-8 text-gray-800">
            <div className="bg-gradient-to-r from-[#07B0CE] to-[#1c5f8c] text-center p-6 rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold text-white mb-4">{eventName}</h1>
                <img src={image} alt={eventName} className="w-full h-96 object-cover rounded-lg mb-4 shadow-md" />
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-lg mb-2 text-gray-700">
                        <strong className="text-[#07B0CE]"></strong> {date}
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        <strong className="text-[#07B0CE]"></strong> {shortDescription}
                    </p>
                    <p className="text-lg text-gray-700">
                        <strong className="text-[#07B0CE]"></strong> {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailEvent;
