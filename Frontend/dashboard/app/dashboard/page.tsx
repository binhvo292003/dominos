import RealtimeStatic from '@/components/RealtimeStatic';
import RecentOrder from '@/components/RealtimeStatic/RecentOrder';
import TotalStatic from '@/components/TotalStatic';

const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-400 flex flex-col items-start p-10 pt-5 gap-3">
                <div className="text-3xl font-bold">Overall</div>
                <TotalStatic />
                <div className="flex flex-col md:grid grid-cols-3 gap-10 w-full">
                    <div className="col-span-2 ">
                        <div className="text-3xl font-bold">Static</div>
                        <RealtimeStatic />
                    </div>
                    <div>
                        <div className="text-3xl font-bold">Recent Order</div>
                        <RecentOrder />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
