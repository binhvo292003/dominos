'use client';

import {
    BiHomeAlt,
    BiSolidUser,
    BiCategory,
    BiSolidCoupon,
    BiBox,
    BiLogOut,
    BiCart,
    BiMenu,
} from 'react-icons/bi';
import SlidebarContainer from './SlidebarContainer';
import SlidebarItem from './SlidebarItem';
import { useState } from 'react';
import { createContext } from 'vm';

const defaultIconSize = '1.875rem';

const items = [
    {
        name: 'Dashboard',
        icon: <BiHomeAlt size={defaultIconSize} />,
        path: '/dashboard',
    },
    { name: 'Products', icon: <BiBox size={defaultIconSize} />, path: '/dashboard/products' },
    {
        name: 'Categories',
        icon: <BiCategory size={defaultIconSize} />,
        path: '/dashboard/categories',
    },
    { name: 'Users', icon: <BiSolidUser size={defaultIconSize} />, path: '/dashboard/users' },
    { name: 'Orders', icon: <BiCart size={defaultIconSize} />, path: '/dashboard/orders' },
    {
        name: 'Coupouns',
        icon: <BiSolidCoupon size={defaultIconSize} />,
        path: '/dashboard/coupouns',
    },
];

const SlidebarContext = createContext();


const Index = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <>
            <div className={`block flex-col p-4 ${isMenuOpen ? 'w-72' : 'w-24'}`}>
                <div className="flex flex-row justify-between items-center p-4">
                    <div className={`text-3xl font-bold ${isMenuOpen ? 'block' : 'hidden'}`}>
                        Title
                    </div>
                    <BiMenu
                        className="flex p-2 items-center cursor-pointer rounded-lg  hover:bg-gray-100"
                        size='3rem'
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    />
                </div>
                <SlidebarContainer items={items} isMenuOpen={isMenuOpen} />
                <div className="border-b border-black" />
                <SlidebarItem
                    item={{
                        name: 'Logout',
                        icon: <BiLogOut size={defaultIconSize} />,
                        path: '/',
                    }}
                    isMenuOpen={isMenuOpen}
                />
            </div>
        </>
    );
};

export default Index;
