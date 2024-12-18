import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const AddUser = () => {

    const navigate = useNavigate()

    const handleAddUser = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const gender = form.get('gender');
        const status = form.get('status');

        const newUser = { name, email, gender, status };

        fetch('https://user-crud-management-five.vercel.app/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User has been added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    const handleNavigate = () => {
        navigate('/')
    }


    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="py-10 md:pt-24">
                    <button
                    onClick={handleNavigate}
                    className="flex items-center gap-1 md:px-10 mb-5 text-lg text-[#551A8B] cursor-pointer font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#551A8B"><path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" /></svg>
                        <span>All Users</span>
                    </button>
                    <div className="font-roboto md:px-36 md:py-10">
                        <div className="text-center">
                            <h2 className="text-3xl font-medium text-[#2A2F43] mb-3">New User</h2>
                            <p className="text-gray-400 text-lg">Use the below form to create a new Account</p>
                        </div>
                        <form onSubmit={handleAddUser}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-lg font-normal text-gray-400">Name</label>
                                <input type="text" name="name" className="border rounded border-gray-300 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="Barry Allen" required="" />
                            </div>
                            <div className="mb-10">
                                <label htmlFor="email" className="block mb-2 text-lg font-normal text-gray-400">Email</label>
                                <input type="email" name="email" className="border border-gray-300  rounded focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:border-blue-500" placeholder="example@gmail.com" required="" />
                            </div>
                            <div className="space-y-6 mb-9">
                                <div className="flex items-center space-x-6">
                                    <span className="text-gray-400 text-lg font-normal">Gender</span>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" value="Male" className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500" />
                                        <span className="text-[#2A2F43]">Male</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" value="Female" className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                        <span className="text-[#2A2F43]">Female</span>
                                    </label>
                                </div>


                                <div className="flex items-center space-x-6">
                                    <span className="text-gray-400 text-lg font-normal">Status</span>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="status" value="Active" className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500" />
                                        <span className="text-[#2A2F43]">Active</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="status" value="Inactive" className="w-4 h-4 text-gray-400 border-gray-300 focus:ring-gray-400" />
                                        <span className="text-[#2A2F43]">Inactive</span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="bg-[#59DB93] w-full py-4 cursor-pointer text-center rounded">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddUser;