import React from 'react'
import Navbar from '../Components/Navbar'
import Steps from '../Components/Steps'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const HandleCreatebtn = () => {
        console.log("create btn m click hua hai")

        navigate("/details")
    }
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            <div className='flex  justify-center items-center px-[4vw] py-[20vh] gap-[12vw] bg-gray-100 '>
                <div className='  py-[4vh] '> <h1 className='font-bold text-[6vh]'>Online Resume Builder: <br /> Make Your Resume Fast <br /> without Log in.</h1>
                    <div className=' w-fit  '>   <h3 className='text-[3vh]'>Effortless to use. Crafted by industry experts.</h3>
                        <h4 className='text-[3vh]'> Trusted by professionals and recruiters alike. <br />
                            Create your standout resume in minutes.</h4></div>
                    <button onClick={HandleCreatebtn} className='Create-btn bg-[#d4bd67] px-[6vw] py-2 rounded-xl font-bold text-lg mt-4'  >Create Your Resume Now</button>
                </div>
                <div className='  w-[30vw] h-[30vh] '> <img src="https://cdn-images.zety.com/images/zety/landings/builder/hero-image-desktop@3x.webp" alt="resume image" /> </div>

            </div>
            <Steps></Steps>

        </div>
    )
}

export default Home