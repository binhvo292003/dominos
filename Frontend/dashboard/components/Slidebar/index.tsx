import { BiHomeAlt, BiSolidUser, BiCategory, BiSolidCoupon, BiBox, BiLogOut, BiCart } from 'react-icons/bi';
import SlidebarContainer from './SlidebarContainer';
import SlidebarItem from './SlidebarItem';

const defaultIconSize = '1.875rem';

const items = [
    {
        name: 'Dashboard',
        icon: <BiHomeAlt size={defaultIconSize} />,
        path: '/dashboard',
    },
    { name: 'Products', icon: <BiBox size={defaultIconSize} />, path: '/dashboard/products' },
    {
        name: 'Categories',
        icon: <BiCategory size={defaultIconSize} />,
        path: '/dashboard/categories',
    },
    { name: 'Users', icon: <BiSolidUser size={defaultIconSize} />, path: '/dashboard/users' },
    { name: 'Orders', icon: <BiCart size={defaultIconSize} />, path: '/dashboard/orders' },
    {
        name: 'Coupouns',
        icon: <BiSolidCoupon size={defaultIconSize} />,
        path: '/dashboard/coupouns',
    },
];

const Index = () => {
    return (
        <>
            <div className="p-4 flex flex-col ">
                <div className="text-3xl font-bold flex justify-center my-7">Title</div>
                <SlidebarContainer items={items} />
                <div className="border-b border-black" />
                <SlidebarItem
                    item={{
                        name: 'Logout',
                        icon: <BiLogOut size={defaultIconSize} />,
                        path: '/',
                    }}
                />
            </div>
        </>
    );
};

export default Index;
