import React from 'react'
import step1 from "./images/step1.png"
import step2 from "./images/step2.png"
import step3 from "./images/step3.png"
import step4 from "./images/step4.png"
import { useNavigate } from 'react-router-dom'


const Steps = () => {
    const navigate = useNavigate()
    const HandleCreatebtn = () => {
        console.log("create btn m click hua hai")

        navigate("/details")
    }
    return (
        <div className=' flex flex-col justify-center py-4 items-center gap-[4vh] mt-[8vh]'> <h1 className='text-4xl font-semibold'>Simple four steps to create your resume:</h1>
            <div className='flex justify-center'>

                <div className='flex flex-col justify-center items-center border-r-2'>
                    <img src={step1} alt="" />
                    <h2 className='bg-[#FAFFC5] p-1'>Step1</h2>
                    <h4 className="font-mono">Pick a resume template</h4>
                </div>

                <div className='flex flex-col justify-center items-center border-r-2'>
                    <img src={step2} alt="" />
                    <h2 className='bg-[#FAFFC5] p-1'>Step2</h2>
                    <h4 className="font-mono">Enter Your Info</h4>
                </div>

                <div className='flex flex-col justify-center items-center border-r-2'>
                    <img src={step3} alt="" />
                    <h2 className='bg-[#FAFFC5] p-1'>Step3</h2>
                    <h4 className="font-mono">Personalize it</h4>
                </div>

                <div className='flex flex-col justify-center items-center border-r-2'>
                    <img src={step4} alt="" />
                    <h2 className='bg-[#FAFFC5] p-1'>Step4</h2>
                    <h4 className="font-mono">Download in Pdf or Doc </h4>
                </div>
            </div>
            <button onClick={HandleCreatebtn} className='Create-btn bg-[#d4bd67] px-[6vw] py-2 rounded-xl font-bold text-xl mt-4'  >Create Your Resume Now</button>
        </div>
    )
}

export default Steps