import React from 'react';
import { data } from '@/data/data';
import { FaShoppingBag } from 'react-icons/fa';

export interface DataItem {
    id: number;
    name: {
        first: string;
        last: string;
    };
    total: number;
    status: string;
    method: string;
    date: string;
}

const RecentOrder = () => {
    return (
        <div className="w-full col-span-1 relative lg:h-[60vh] h-[40vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">

            <ul>
                {data.map((item: DataItem, id) => (
                    <li
                        key={id}
                        className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
                    >
                        <div className="bg-green-100 rounded-lg p-3">
                            <FaShoppingBag className="text-green-800" />
                        </div>
                        <div className="pl-4">
                            <p className="text-gray-800 font-bold">${item.total}</p>
                            <p className="text-gray-400 text-sm">${item.name.first}</p>
                        </div>
                        <p className='lg:flex md:hidden absolute right-6 text-s,'>{item.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentOrder;
