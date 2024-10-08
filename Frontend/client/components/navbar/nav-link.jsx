import Link from 'next/link';

import classes from '@/components/navbar/nav-link.module.css';
import Image from 'next/image';

export default function NavLink({ href, children }) {
    return (
        <Link href={href} className={classes['link']}>
            {children}
        </Link>
    );
}
