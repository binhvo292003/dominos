import Slidebar from '@/components/Slidebar';
import Navbar from '../../components/Navbar';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-blue-100 flex flex-row">
            <Slidebar />
            <div className="w-full  bg-red-100 flex flex-col  min-h-screen justify-start">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
