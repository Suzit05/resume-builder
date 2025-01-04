import React from 'react'
import Navbar from '../Components/Navbar'

const Experience = () => {    //back and save next button add kro
    return (
        <div className=' flex-col justify-center items-center'>
            <Navbar></Navbar>
            <h1 className="text-2xl font-bold mb-6">Add Your Experience</h1>
            <div className="flex flex-col space-y-8 justify-center items-center w-full py-4">
                {/* Experience 1 */}
                <div className="bg-white p-6 rounded-md shadow-md  space-y-4">
                    <h2 className="text-xl font-semibold">Experience 1</h2>
                    <div className='each-input flex w-[40vw] '>
                        <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Position"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>

                    </div>

                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z"></path></svg>
                    </div>

                    <textarea
                        placeholder="Description"
                        rows="3"
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Experience 2 */}
                <div className="bg-white p-6 rounded-md shadow-md  space-y-4">
                    <h2 className="text-xl font-semibold">Experience 2</h2>
                    <div className='each-input flex w-[40vw] '>
                        <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM8 11V13H11V11H8ZM8 7V9H11V7H8ZM8 15V17H11V15H8ZM13 15V17H16V15H13ZM13 11V13H16V11H13ZM13 7V9H16V7H13Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Position"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>

                    </div>

                    <div className='each-input flex '>
                        <input
                            type="text"
                            placeholder="Duration (e.g., Jan 2020 - Dec 2022)"
                            className="w-full p-2 border rounded"
                        />
                        <svg className='absolute self-center ml-[38vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z"></path></svg>
                    </div>

                    <textarea
                        placeholder="Description"
                        rows="3"
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Save Experience
                </button>
            </div>

        </div>
    )
}

export default Experience