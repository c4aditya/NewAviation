import React from 'react';

const TableData = () => {
    const jobs = [
        { id: 1, role: "Airport Ground Staff", location: "Pan India", type: "Full Time", experience: "0-1 Years" },
        { id: 2, role: "Cabin Crew", location: "Pan India", type: "Full Time", experience: "0-2 Years" },
        { id: 3, role: "Flight Attendant", location: "Pan India", type: "Full Time", experience: "1-3 Years" },
        { id: 4, role: "Ticketing Agent", location: "Pan India", type: "Full Time", experience: "Fresher" },
        { id: 5, role: "Airline Supervisor", location: "Pan India", type: "Full Time", experience: "2+ Years" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Current Openings Overview</h2>
            <div className="overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Job Role</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Type</th>
                            <th scope="col" className="px-6 py-3">Experience</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <tr key={job.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{job.role}</td>
                                <td className="px-6 py-4">{job.location}</td>
                                <td className="px-6 py-4">{job.type}</td>
                                <td className="px-6 py-4">{job.experience}</td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:text-blue-900 font-semibold">
                                        Apply Now
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableData;
