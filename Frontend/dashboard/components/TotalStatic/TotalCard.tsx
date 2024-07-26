import React from 'react';

export interface TotalCard {
    name: string;
    icon: JSX.Element;
    total: number;
}

const TotalCard = ({ item }: { item: TotalCard }) => {
    return (
        <div className="bg-red-300 flex flex-row justify-between p-4 border-black border-2 rounded-lg">
            <div className="flex flex-col">
                <div className="text-lg text-white"> {item.name}</div>
                <div className="text-xl text-white font-bold">{item.total}</div>
            </div>
            <div> {item.icon}</div>
        </div>
    );
};

export default TotalCard;
