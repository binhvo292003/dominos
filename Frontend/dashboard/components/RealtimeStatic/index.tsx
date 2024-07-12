import React from 'react';
import BarChart from './BarChart';
import RecentOrder from './RecentOrder';

const Index = () => {
    return (
        <div className="flex flex-col md:grid grid-cols-3 gap-10 w-full">
            <BarChart />
            <RecentOrder />
        </div>
    );
};

export default Index;
