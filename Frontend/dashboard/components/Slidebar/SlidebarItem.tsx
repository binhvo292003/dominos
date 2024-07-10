export interface Item {
    name: string;
    icon: JSX.Element;
    path: string;
    active?: boolean;
}

const SlidebarItem = ({ item }: { item: Item }) => {
    const { name, icon, path, active } = item;

    return (
        <li
            className={`flex p-2 justify-start items-center cursor-pointer rounded-lg m-1 ${
                active ? ' bg-white text-black' : 'hover:bg-gray-100'
            }`}
        >
            {icon}
            <a href={path} className="text ml-2 h-full w-full">
                {name}
            </a>
        </li>
    );
};

export default SlidebarItem;
