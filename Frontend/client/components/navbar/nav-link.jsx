import Link from 'next/link';

import classes from '@/components/navbar/nav-link.module.css';
import Image from 'next/image';

export default function NavLink({ href, children, imgSrc }) {
    return (
        <Link href={href} className={classes['link']}>
            {imgSrc && (
                <Image src={imgSrc} alt="" width={40} height={40} /> 
            )}
            {children}
        </Link>
    );
}
