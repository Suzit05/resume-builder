import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context/FormContext'

const EducationalDetails = () => {
    const { formdata, setformdata } = useContext(FormContext)
    const Navigate = useNavigate()

    const HandleInputChange = (e) => {
        const { name, value } = e.target
        setformdata((prevData) => (
            { ...prevData, educationalDetails: { ...prevData.educationalDetails, [name]: value } }
        )

        )
        console.log(name, value)
    }

    const HandleBackForEdu = () => {
        Navigate("/details")
    }

    const HandleNextForEdu = () => {
        console.log(formdata)
        Navigate("/projects")
    }
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
                            value={formdata.educationalDetails.collegeName}
                            onChange={HandleInputChange}
                            name='collegeName'
                            type="text"
                            placeholder="College/University Name*"
                            className="w-[25vw] p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.clgQualification}
                            onChange={HandleInputChange}
                            name='clgQualification'
                            type="text"
                            placeholder="Qualification"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.startYear}
                            onChange={HandleInputChange}
                            name='startYear'
                            type="text"
                            placeholder="Starting Year"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.endYear}
                            onChange={HandleInputChange}
                            name='endYear'
                            type="text"
                            placeholder="Ending Year"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.clgCgpa}
                            onChange={HandleInputChange}
                            name='clgCgpa'
                            placeholder="CGPA"
                            className="w-full p-2 border rounded"

                        ></input>
                        <button onClick={HandleBackForEdu} className='bg-[#FAFFC5] self-end px-3 py-1 rounded-md'>BACK</button>
                    </div>
                </div>

                {/* School Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">School</h2>
                    <div className="space-y-4 flex flex-col justify-center">
                        <input
                            value={formdata.educationalDetails.schoolName}
                            onChange={HandleInputChange}
                            name='schoolName'
                            type="text"
                            placeholder="School Name*"
                            className="w-[25vw] p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.schoolQualification}
                            onChange={HandleInputChange}
                            name='schoolQualification'
                            type="text"
                            placeholder="Qualification"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            value={formdata.educationalDetails.schoolPassYear}
                            onChange={HandleInputChange}
                            name='schoolPassYear'
                            type="text"
                            placeholder="Passing Year"
                            className="w-full p-2 border rounded"
                        />

                        <input
                            value={formdata.educationalDetails.schoolCgpa}
                            onChange={HandleInputChange}
                            name='schoolCgpa'
                            placeholder="CGPA/Percentage"
                            className="w-full p-2 border rounded"

                        ></input>
                        <button onClick={HandleNextForEdu} className='bg-[#3A3960] self-start  px-3 py-1 rounded-md'>Save & Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EducationalDetails