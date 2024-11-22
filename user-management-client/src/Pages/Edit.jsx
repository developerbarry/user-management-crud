import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
    const updatedUser = useLoaderData();
    console.log(updatedUser)

    const {
        _id,
        name,
        email,
        gender,
        status,
    } = updatedUser;

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const gender = form.get('gender');
        const status = form.get('status');

        const updateNewUser = { name, email, gender, status };

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateNewUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User successfully updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    navigate('/')
                }
            })

    }


    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="font-roboto md:px-36 md:py-10">
                    <div className="text-center my-8">
                        <h2 className="text-3xl font-medium text-[#2A2F43] mb-3">Update User</h2>
                        <p className="text-gray-400 text-lg">Use the below form to update your Account</p>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-lg font-normal text-gray-400">Name</label>
                            <input type="text" name="name" defaultValue={name} className="border rounded border-gray-300 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="Barry Allen" required="" />
                        </div>
                        <div className="mb-10">
                            <label htmlFor="email" className="block mb-2 text-lg font-normal text-gray-400">Email</label>
                            <input type="email" name="email" defaultValue={email} className="border border-gray-300  rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="example@gmail.com" required="" />
                        </div>
                        <div className="space-y-6 mb-9">
                            <div className="flex items-center space-x-6">
                                <span className="text-gray-400 text-lg font-normal">Gender</span>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="Male" defaultChecked={gender === "Male"} className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500" />
                                    <span className="text-[#2A2F43]">Male</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="Female" defaultChecked={gender === "Female"} className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                    <span className="text-[#2A2F43]">Female</span>
                                </label>
                            </div>


                            <div className="flex items-center space-x-6">
                                <span className="text-gray-400 text-lg font-normal">Status</span>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="status" value="Active" defaultChecked={status === "Active"} className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                    <span className="text-[#2A2F43]">Active</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="status" value="Inactive" defaultChecked={status === "Inactive"} className="w-4 h-4 text-gray-400 border-gray-300 focus:ring-gray-400" />
                                    <span className="text-[#2A2F43]">Inactive</span>
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="bg-[#59DB93] w-full py-4 cursor-pointer text-center rounded">Update</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Edit;