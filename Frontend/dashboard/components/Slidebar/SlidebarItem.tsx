'use client';

import { useContext } from 'react';

export interface Item {
    name: string;
    icon: JSX.Element;
    path: string;
    isOpen?: boolean;
    active?: boolean;
}

interface SlidebarItemProps {
    item: Item;
    isMenuOpen: boolean;
}

const SlidebarItem = ({item, isMenuOpen}: SlidebarItemProps) => {
    const { name, icon, path, active } = item;

    return (
        <li
            className={`flex p-2 justify-start items-center cursor-pointer rounded-lg m-1 min-w-16 ${
                active ? ' bg-white text-black' : 'hover:bg-gray-100'
            }`}
        >
            <a href={path} className="flex p-2 items-center text  h-full w-full">
                <div className="flex items-center">{icon}</div>
                <div className={`${isMenuOpen ? 'block  ml-2' : 'hidden '}`}>{name}</div>
            </a>
        </li>
    );
};

export default SlidebarItem;
