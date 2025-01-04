import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
            <div className="text-2xl font-bold"> 📑ZITSU RESUME</div>
            <ul className="flex space-x-6 text-xl">
                <li className="hover:underline cursor-pointer">Tools</li>
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Login</li>
            </ul>
        </nav>
    )
}

export default Navbar