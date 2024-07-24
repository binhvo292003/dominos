'use client';

import SlidebarItem, { Item } from './SlidebarItem';
import { usePathname } from 'next/navigation';

export interface SlidebarContainerProps {
    items: Array<Item>;
    isMenuOpen: boolean;
}

const SlidebarContainer = ({ items, isMenuOpen }: SlidebarContainerProps) => {
    const location = usePathname();

    return (
        <>
            {items.map((item, index) => (
                <SlidebarItem
                    key={index}
                    item={{ ...item, active: location === item.path }}
                    isMenuOpen={isMenuOpen}
                />
            ))}
        </>
    );
};

export default SlidebarContainer;
