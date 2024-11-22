import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Table = ({ allUsers }) => {

    const [users, setUsers] = useState(allUsers)
    const count = 0;

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://user-management-server-ruddy-seven.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            const exsit = users.filter(elementUser => elementUser._id !== id);
                            setUsers(exsit)

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

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
                            {
                                users.map(user => (
                                    <tr key={user._id} className="border-b text-xs md:text-base text-center text-[#2A2F43] font-medium">
                                        <td className="p-2 md:p-4">{count + 1}</td>
                                        <td className="p-2 md:p-4">{user.name}</td>
                                        <td className="p-2 md:p-4">{user.email}</td>
                                        <td className="p-2 md:p-4">{user.gender}</td>
                                        <td className="p-2 md:p-4">{user.status}</td>
                                        <td className="relative p-2 md:p-4 flex md:gap-2 justify-center space-x-2">
                                            <Link to={`/user/${user._id}`} className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm transition hover:bg-[#1d488f]">Edit</Link>
                                            <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm transition hover:bg-[#d32323]">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    allUsers: PropTypes.array
}

export default Table;