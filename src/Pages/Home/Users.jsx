
const Users = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-8">Our Users</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">

            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img src="https://i.ibb.co/mzCVPwq/man-4.jpg" alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        John Doe
                    </h4>
                    <h4 className="block mb-2 font-sans text-xl text-red antialiased font-semibold leading-snug tracking-normal text-red-600">
                    Software Developer
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    Horizon Technologies Inc.
                    </p>
                </div>
               
            </div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img src="https://i.ibb.co/x3LBpN7/woman-1.jpg" alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sophia Chang
                    </h4>
                    <h4 className="block mb-2 font-sans text-xl text-red antialiased font-semibold leading-snug tracking-normal text-red-600">
                    Graphic Designer
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    Creative Concepts Studio
                    </p>
                </div>
               
            </div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img src="https://i.ibb.co/MNJ31hx/man-5.jpg" alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Liam Patel
                    </h4>
                    <h4 className="block mb-2 font-sans text-xl text-red antialiased font-semibold leading-snug tracking-normal text-red-600">
                    Marketing Manager
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                    Visionary Marketing Solutions
                    </p>
                </div>
               
            </div>

            </div>
        </div>
    );
};

export default Users;