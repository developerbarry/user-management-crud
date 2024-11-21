
const Table = () => {
    return (
        <div className="bg-white py-8 overflow-auto mt-3 h-screen">
            <div className="relative overflow-auto">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white mb-20">
                        <thead>
                            <tr className="bg-[#2B2D42] text-center text-xs md:text-base font-thin text-white">
                                <th className="p-0">
                                    <span className="block py-2 px-3 border-r border-gray-300">ID</span>
                                </th>
                                <th className="p-0">
                                    <span className="block py-2 px-3 border-r border-gray-300">Name</span>
                                </th>
                                <th className="p-0">
                                    <span className="block py-2 px-3 border-r border-gray-300">@Email</span>
                                </th>
                                <th className="p-0">
                                    <span className="block py-2 px-3 border-r border-gray-300">Gender</span>
                                </th>
                                <th className="p-0">
                                    <span className="block py-2 px-3 border-r border-gray-300">Status</span>
                                </th>
                                <th className="p-4 text-xs md:text-base">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b text-xs md:text-base text-center text-[#2A2F43] font-medium">
                                <td className="p-2 md:p-4">01</td>
                                <td className="p-2 md:p-4">Maria Makye</td>
                                <td className="p-2 md:p-4">maria@gmail.com</td>
                                <td className="p-2 md:p-4">Female</td>
                                <td className="p-2 md:p-4">Active</td>
                                <td className="relative p-2 md:p-4 flex md:gap-2 justify-center space-x-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm transition hover:bg-[#1d488f]">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm transition hover:bg-[#d32323]">Delete</button>
                                </td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;