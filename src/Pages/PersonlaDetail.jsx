import React, { useContext, useRef, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../Context/FormContext'

const PersonlaDetail = () => {

    const { formdata, setformdata } = useContext(FormContext);
    const Navigate = useNavigate()




    const HandleNextforPers = (e) => {
        e.preventDefault();
        console.log("next btn m click hua hai")
        // Destructure the personal details
        const { firstName, lastName, phonenumber } = formdata.personalDetails;

        // Check if mandatory fields are filled
        if (!firstName || !lastName || !phonenumber) {
            alert("Please fill in all mandatory fields: First Name, Last Name, and Phone Number.");
            return;
        }
        console.log(formdata.personalDetails)
        Navigate("/edu")

    }

    const HandleBackforPers = () => {
        Navigate("/")
    }




    const HandleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
                [name]: value,
            },
        }));
        console.log(name, value); // Debugging individual inputs


    }


    return (
        <div className='flex-col justify-center items-center'>
            <Navbar></Navbar>
            <h1 className='text-[6vh]  text-center'>Enter Personal Details:</h1>
            <div className=' flex justify-center items-center p-8 mt-[4vh] gap-[16vw] bg-gray-100'>
                <div className='flex-col flex gap-[3vh] justify-center items-center'>
                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.firstName} name='firstName' className='border-2 p-2 w-[24vw]' type="text" placeholder='First Name*' required />

                    </div>

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.email} name='email' className='border-2 p-2 w-[24vw]' type="email" placeholder=' Email*' required />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.website} name='website' className='border-2 p-2 w-[24vw]' type="text" placeholder='Website' />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.linkedin} name='linkedin' className='border-2 p-2 w-[24vw]' type="text" placeholder='Linked in' />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                    </div>
                    <button onClick={HandleBackforPers} className='bg-[#FAFFC5] self-end px-3 py-1 rounded-md'>BACK</button>
                </div>


                <div className='flex-col flex gap-[3vh] justify-center items-center'>

                    <input onChange={HandleInputChange} value={formdata.personalDetails.lastName} name='lastName' className='border-2 p-2 w-[24vw]' type="text" placeholder='Last Name*' required />

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange}  //value dena jruri hai , nhi to next krne pr show nhi krega
                            // If you haven't assigned values to all the inputs, React will not be able to sync the form with the context data, and that's likely why the form is going blank when you navigate away and back.
                            value={formdata.personalDetails.phonenumber} name='phonenumber' className='border-2 p-2 w-[24vw]' type="text" placeholder=' Phone number*' required />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.github} name='github' className='border-2 p-2 w-[24vw]' type="text" placeholder='Github' />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                    </div>

                    <div className='each-input flex '>
                        <input onChange={HandleInputChange} value={formdata.personalDetails.twitter} name='twitter' className='border-2 p-2 w-[24vw]' type="text" placeholder='Twitter' />
                        <svg className='absolute self-center ml-[22vw] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path></svg>
                    </div>
                    <button onClick={HandleNextforPers} className='bg-[#3A3960] self-start  px-3 py-1 rounded-md'>Save & Next</button>
                </div>

            </div>


        </div>
    )
}

export default PersonlaDetail