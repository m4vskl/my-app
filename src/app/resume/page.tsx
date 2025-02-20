export default function Resume() {
    return (
        <div className="w-full h-screen scrollbar-custom overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-gray-100 ">
            <div className="flex flex-col items-center w-full p-6">
                <span className="text-4xl">Celil Akdemir</span>
                <span className="text-xl text-[#ECECEC]">Backend Developer</span>
            </div>
            <div className="flex flex-col md:flex-row w-full h-auto md:h-screen animate-fadeIn">
                <div className="w-full md:w-1/12 h-full border-gray-600"></div>

                <div className="w-full md:w-2/12 h-full border-gray-100 p-2">
                    <div className="my-5">
                        <h2 className="text-3xl">Contact</h2>
                        <hr className="my-2" />
                        <div className="flex items-center space-x-2 my-1">
                            <p className="text-l">Mobile:</p>
                            <p className="text-[#A9A9A9] text-xl">+905333485276</p>
                        </div>
                        <div className="flex items-center space-x-2 my-1">
                            <p className="text-l">Email:</p>
                            <p className="text-[#A9A9A9] text-xl">dev@celilakdemir.com</p>
                        </div>
                    </div>

                    <div className="my-10">
                        <h2 className="text-3xl">Skills</h2>
                        <hr className="my-2" />
                        <div className="space-y-4">
                            <p className="text-[#A9A9A9] text-l">API/Web Services Development & Integrations</p>
                            <p className="text-[#A9A9A9] text-xl">End-to-end Project Delivery</p>
                            <p className="text-[#A9A9A9] text-xl">Database Management</p>
                            <p className="text-[#A9A9A9] text-xl">DevOps Practices</p>
                            <p className="text-[#A9A9A9] text-xl">Agile Methods</p>
                            <p className="text-[#A9A9A9] text-xl">Version Control Systems</p>
                        </div>
                    </div>

                    <div className="my-5">
                        <h2 className="text-3xl">Education</h2>
                        <hr className="my-2" />
                        <p className="text-[#A9A9A9] text-xl">Balıkesir University Electrical and Electronics Engineering</p>
                    </div>
                </div>

                <div className="relative w-full md:w-10/12 h-full border-gray-700 flex flex-col md:flex-row p-4">
                    <div className="absolute left-[15px] top-0 h-full w-[1px] bg-gray-200"></div>
                    <div className="w-full md:w-5/6 mx-6">
                        <span className="text-5xl">Work Experience</span>
                        <div className="my-12 flex flex-col">
                            <span className="text-2xl">Trair Technology Investments</span>
                            <span className="text-[#A9A9A9]">10.2023-09.2024</span>
                            <span className="my-4 text-xl">Earned 1 years of experience specializing in web application development. Worked for building an e-commerce platform using Django, leveraging PostgreSQL and ORM for efficient data management. Also developed side projects using Express.js, Laravel and CodeIgniter, gaining hands-on experience in various frameworks.</span>
                        </div>
                        <div className="my-12 flex flex-col">
                            <span className="text-2xl">Ebabil Technology and Science Association</span>
                            <span className="text-[#A9A9A9]">10.2022-PRESENT</span>
                            <span className="my-4 text-xl">Experienced in image processing, IoT, and web development using Python and C#. Skilled in building scalable applications and creating simulation environments with Gazebo and ArduPilot. Familiar with hardware integration using RaspberryPi and Arduino for efficient solutions.</span>
                        </div>
                        <div className="my-12 flex flex-col">
                            <span className="text-2xl">As a Freelancer</span>
                            <span className="text-[#A9A9A9]">10.2022-PRESENT</span>
                            <span className="my-4 text-xl">I began my development career with a C#-based inventory management application and recently delivered a menu management platform for the client berticoffee.com. Additionally, I have developed 2D isometric games on the Unity Engine as part of my hobby projects. Experienced in building efficient, scalable, and client-focused software solutions.</span>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/2 h-full border-blue-400 ml-auto flex p-6">
                        <div className="absolute left-[15px] top-0 h-full w-[1px] bg-gray-200"></div>
                        <div className="px-4 w-full">
                            <div className="border rounded-xl p-4 h-auto md:h-1/2">
                                <span className="text-4xl">What am I doing now?</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/12 h-full border-gray-600"></div>
            </div>
        </div>
    );
}
