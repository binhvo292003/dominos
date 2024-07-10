'use client'; 

import SlidebarItem, { Item } from './SlidebarItem';
import { usePathname } from 'next/navigation';

const SlidebarContainer = ({items}:{items: Array<Item>}) => {
  const location = usePathname(); // Step 2

  return (
      <>
          {items.map((item, index) => (
              <SlidebarItem 
                key={index} 
                item={{...item, active: location === item.path}}
              />
          ))}
      </>
  );
}

export default SlidebarContainer;