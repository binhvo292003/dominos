import React from 'react';
import { BiSolidUser, BiCategory, BiBox, BiLogOut, BiCart } from 'react-icons/bi';
import TotalCard from './TotalCard';

const defaultIconSize = '1.875rem';

const items = [
    { name: 'Products', icon: <BiBox size={defaultIconSize} />, total: 100 },
    {
        name: 'Categories',
        icon: <BiCategory size={defaultIconSize} />,
        total: 100,
    },
    { name: 'Users', icon: <BiSolidUser size={defaultIconSize} />, total: 100 },
    { name: 'Orders', icon: <BiCart size={defaultIconSize} />, total: 100 },
];

const Index = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
            {items.map((item, index) => (
                <TotalCard key={index} item={item} />
            ))}
        </div>
    );
};

export default Index;
