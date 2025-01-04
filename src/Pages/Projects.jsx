import React from 'react'
import Navbar from '../Components/Navbar'

export const Projects = () => {
    return (
        <div className='flex-col justify-center items-center '>

            <Navbar></Navbar>
            <h1 className="text-[6vh]  text-center">Add Your Projects</h1>
            <div className="flex flex-col justify-center items-center space-y-8 py-4  ">
                {/* Project 1 */}
                <div className="bg-white p-6 rounded-md shadow-md space-y-4 w-[50vw]">
                    <h2 className="text-xl font-semibold">Project 1*</h2>
                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Project Title"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 6V21H11V6H5V4H19V6H13Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input
                            type="url"
                            placeholder="Project Link"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path></svg>
                    </div>

                    <textarea
                        placeholder="Project Description"
                        rows="3"
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Project 2*/}
                <div className="bg-white p-6 rounded-md shadow-md space-y-4 w-[50vw]">
                    <h2 className="text-xl font-semibold">Project 2*</h2>
                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Project Title"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 6V21H11V6H5V4H19V6H13Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input
                            type="url"
                            placeholder="Project Link"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path></svg>
                    </div>

                    <textarea
                        placeholder="Project Description"
                        rows="3"
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Project 3 */}
                <div className="bg-white p-6 rounded-md shadow-md space-y-4 w-[50vw]">
                    <h2 className="text-xl font-semibold">Project 3</h2>
                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Project Title"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13 6V21H11V6H5V4H19V6H13Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input
                            type="url"
                            placeholder="Project Link"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[44vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path></svg>
                    </div>

                    <textarea
                        placeholder="Project Description"
                        rows="3"
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className='flex gap-[12vw] items-center'>
                    <button className='bg-[#FAFFC5]  px-3 py-1 rounded-md'>BACK</button>
                    <button className='bg-[#3A3960]   px-3 py-1 rounded-md'>Save & Next</button>
                </div>

            </div>

        </div>
    )
}
