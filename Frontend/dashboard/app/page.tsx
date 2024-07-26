import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <div className='m-4 bg-red-300 rounded-lg'>
                <a href="/dashboard" className='flex p-4'>Dashboard</a>
            </div>
        </main>
    );
}
