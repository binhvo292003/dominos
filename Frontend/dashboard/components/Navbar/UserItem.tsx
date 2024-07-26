'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const userInfo = {
    name: 'John Doe',
    role: 'Admin',
    email: 'johndoe@example.com', // Additional detail for demonstration
    phone: '+1234567890', // Additional detail for demonstration
};

const UserItem = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div className="flex flex-col items-start">
            <div className="flex flex-row gap-2 cursor-pointer" onClick={toggleDropdown}>
                <Image src="/test.jpg" width={50} height={50} alt="user" className="rounded-full" />
                <div className="flex flex-col">
                    <div className="text-base">{userInfo.name}</div>
                    <div className="text-sm">{userInfo.role}</div>
                </div>
            </div>
            {isDropdownOpen && (
                <ul className="absolute top-16 right-2 mt-2 p-4 border rounded-lg shadow-lg bg-white w-auto min-w-max">
                    <li className="flex flex-col items-start border-b-2 border-black py-2">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/test.jpg"
                                width={50}
                                height={50}
                                alt="user"
                                className="rounded-full"
                            />
                            <div className="flex flex-col">
                                <div className="text-base">{userInfo.name}</div>
                                <div className="text-sm">{userInfo.role}</div>
                            </div>
                        </div>
                    </li>
                    <li className="py-2 border-b-1 border-black">Edit Profile</li>
                    <li className="py-2 border-b-1 border-black">Settings</li>
                    <li className="py-2 border-b-1 border-black">Logout</li>
                </ul>
            )}
        </div>
    );
};

export default UserItem;
