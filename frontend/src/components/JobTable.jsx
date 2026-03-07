import React from 'react';

const JobTable = () => {
    const jobs = [
        ["A-J325", "AIRPORT SERVICES DEPARTMENT", "AIRPORT SERVICES", "BHUBANESWAR"],
        ["SA-J389", "SECURITY SUPERVISOR", "AIRLINE SECURITY", "Across India"],
        ["SA-J463", "AIRPORT MANAGER", "AIRPORT SERVICES", "BHUBANESWAR"],
        ["SA-J497", "FLIGHT OPERATIONS MANAGER : NSOP", "OPERATIONS", "BANGALORE HO"],
        ["SA-J503", "JUNIOR EXECUTIVE - PARAMEDICS", "FLIGHT SAFETY", "BENGALURU, AHMEDABAD, HINDON NEW"],
        ["SA-J519", "SENIOR MANAGER/AGM - ROSTERING", "OPERATIONS", "BANGALORE HO"],
        ["SA-J520", "SENIOR MANAGER/AGM OPERATIONS - TRAINING", "OPERATIONS", "BANGALORE HO"],
        ["SA-J539", "JUNIOR STORES EXECUTIVE", "STORES & LOGISTICS", "BANGALORE HO, HYDERABAD, BELGAUM, NASHIK"],
        ["SA-J545", "SECURITY SUPERVISOR", "AIRLINE SECURITY", "Across India"],
        ["SA-J546", "SENIOR SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
        ["SA-J547", "TRAINEE SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
        ["SA-J549", "SECURITY AGENT", "AIRLINE SECURITY", "Across India"],
        ["SA-J560", "PILOTS - EMB 170/175/190/195", "OPERATIONS", "HYDERABAD, BENGALURU"],
        ["SA-J564", "DIRECTOR - CABIN SAFETY", "OPERATIONS", ""],
        ["SA-J565", "TRAINEE - LEGAL", "LEGAL", ""],
        ["SA-J566", "SENIOR MANAGER IT - BUSINESS TECHNOLOGY & SUPPORT", "INFORMATION TECHNOLOGY", "Across India"],
        ["SA-J567", "GENERAL MANAGER - FINANCE", "ACCOUNTS", "Across India"],
        ["SA-J568", "GENERAL MANAGER - FINANCE", "ACCOUNTS", "BANGALORE HO"],
        ["SA-J573", "ASSISTANT MANAGER - POWERPLANT", "CAMO", "BENGALURU, HYDERABAD, BELGAUM"],
        ["SA-J574", "ADMINSTRATIVE - EXECUTIVE (TRAVEL DESK)", "ADMINISTRATION", "BANGALORE HO"],
        ["SA-J575", "AIRCRAFT MAINTENANCE ENGINEERS (CAT A / B1 / B2) & TECHNICIAN", "ENGINEERING", "Across India"],
        ["SA-J576", "LEGAL EXECUTIVE", "LEGAL", "BANGALORE HO"],
        ["SA-J577", "SENIOR MANAGER OPERATIONS - TRAINING & LICENSING", "OPERATIONS", "BANGALORE HO"],
        ["SA-J578", "AREA MANAGER - SALES", "SALES", "BENGALURU, BIDAR, GOA, KALABURAGI, BELGAUM"],
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Current Openings Overview</h2>
            <div className="overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 min-w-[100px]">Job Code</th>
                            <th scope="col" className="px-6 py-3 min-w-[200px]">Job Role</th>
                            <th scope="col" className="px-6 py-3 min-w-[150px]">Department</th>
                            <th scope="col" className="px-6 py-3 min-w-[150px]">Location</th>
                            <th scope="col" className="px-6 py-3 min-w-[120px]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job[0] || index} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{job[0]}</td>
                                <td className="px-6 py-4 font-medium text-gray-800">{job[1]}</td>
                                <td className="px-6 py-4">{job[2]}</td>
                                <td className="px-6 py-4">{job[3]}</td>
                                <td className="px-6 py-4">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-blue-700 transition">
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

export default JobTable;
