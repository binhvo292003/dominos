import RealtimeStatic from '@/components/RealtimeStatic';
import TotalStatic from '@/components/TotalStatic';

const Dashboard = () => {
    return (
        <>
            <div className="bg-gray-400 flex flex-col items-start p-10 gap-3">
                <div className='text-4xl font-bold'>Overall</div>
                <TotalStatic />
                <div className='text-4xl font-bold'>Static</div>
                <RealtimeStatic />
            </div>
        </>
    );
};

export default Dashboard;
