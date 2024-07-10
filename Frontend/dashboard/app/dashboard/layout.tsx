import Slidebar from '@/components/Slidebar';
import Navbar from '../../components/Navbar';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="grid grid-cols-6">
            <div className="bg-blue-100 h-screen col-span-1">
                <Slidebar />
            </div>
            <div className="col-span-5">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
