import React from 'react'
import Navbar from '../Components/Navbar'

const EducationalDetails = () => {
    return (
        <div className=' flex-col justify-center items-center'>
            <Navbar></Navbar>
            <h1 className="text-[6vh]  text-center">Educational Details</h1>
            <div className="flex  bg-gray-100  justify-center items-center gap-[12vw] space-y-8  px-[12vw] py-[5vh] rounded-md  ">
                {/* College/University Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">College/University</h2>
                    <div className="space-y-4 flex flex-col justify-center">
                        <input
                            type="text"
                            placeholder="College/University Name*"
                            className="w-[25vw] p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Starting Year"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Ending Year"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            placeholder="CGPA"
                            className="w-full p-2 border rounded"
                            rows="3"
                        ></input>
                        <button className='bg-[#FAFFC5] self-end px-3 py-1 rounded-md'>BACK</button>
                    </div>
                </div>

                {/* School Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">School</h2>
                    <div className="space-y-4 flex flex-col justify-center">
                        <input
                            type="text"
                            placeholder="School Name*"
                            className="w-[25vw] p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Qualification"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Passing Year"
                            className="w-full p-2 border rounded"
                        />

                        <input
                            placeholder="CGPA/Percentage"
                            className="w-full p-2 border rounded"

                        ></input>
                        <button className='bg-[#3A3960] self-start  px-3 py-1 rounded-md'>Save & Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EducationalDetails