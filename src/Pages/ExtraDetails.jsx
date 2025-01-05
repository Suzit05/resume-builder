import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context/FormContext'

const ExtraDetails = () => {
    const { formdata, setformdata } = useContext(FormContext)
    const Navigate = useNavigate()

    const HandleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            extraDetails: {
                ...prevData.extraDetails,
                [name]: value,
            },
        }));
        console.log(name, value); // Debugging individual inputs
    }
    const HandleBackForExtra = () => {
        Navigate("/exp")
    }

    const HandleSubmit = () => {
        Navigate("/resume")
        console.log(formdata)
    }
    return (
        <div className=' flex-col justify-center items-center'>
            <Navbar></Navbar>
            <h1 className='text-[6vh]  text-center'>Add Extra Details</h1>
            <div className="flex flex-col space-y-8 w-full py-4  justify-center items-center">
                {/* Skills/Language Section */}
                <div className="bg-white p-6 rounded-md shadow-md space-y-4">
                    <h2 className="text-xl font-semibold">Skills/Language</h2>
                    <input
                        onChange={HandleInputChange}
                        name='skills1'
                        value={formdata.extraDetails.skills1}
                        type="text"
                        placeholder="Skill/Language 1"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='skills2'
                        value={formdata.extraDetails.skills2}
                        type="text"
                        placeholder="Skill/Language 2"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='skills3'
                        value={formdata.extraDetails.skills3}
                        type="text"
                        placeholder="Skill/Language 3"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='skills4'
                        value={formdata.extraDetails.skills4}
                        type="text"
                        placeholder="Skill/Language 4"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='skills5'
                        value={formdata.extraDetails.skills5}
                        type="text"
                        placeholder="Skill/Language 5"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Interests Section */}
                <div className="bg-white p-6 rounded-md shadow-md space-y-4">
                    <h2 className="text-xl font-semibold">Interests</h2>
                    <input
                        onChange={HandleInputChange}
                        name='interest1'
                        value={formdata.extraDetails.interest1}
                        type="text"
                        placeholder="Interest 1"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='interest2'
                        value={formdata.extraDetails.interest2}
                        type="text"
                        placeholder="Interest 2"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='interest3'
                        value={formdata.extraDetails.interest3}
                        type="text"
                        placeholder="Interest 3"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='interest4'
                        value={formdata.extraDetails.interest4}
                        type="text"
                        placeholder="Interest 4"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        onChange={HandleInputChange}
                        name='interest5'
                        value={formdata.extraDetails.interest5}
                        type="text"
                        placeholder="Interest 5"
                        className="w-full p-2 border rounded"
                    />
                </div>

                {/* Submit Button */}
                <div className='flex gap-[12vw] items-center'>
                    <button onClick={HandleBackForExtra} className='bg-[#FAFFC5]  px-3 py-1 rounded-md'>BACK</button>
                    <button onClick={HandleSubmit} className='bg-[#3A3960] text-white  px-3 py-1 rounded-md'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default ExtraDetails