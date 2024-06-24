import Link from 'next/link';

import classes from '@/components/navbar/navbar-header.module.css';
import NavLink from './nav-link';

export default function NavbarHeader() {
    return (
        <header className={classes['menu-header']}>
            <div className={classes['menu-navigation']}>
                <div className={classes['menu-logo']}>
                    <NavLink href="/" imgSrc={"/image/logo.png"}>Dominos</NavLink>
                </div>
                <nav className={classes['nav']}>
                    <ul>
                        <li>
                            <NavLink href="/menu">Menu</NavLink>
                        </li>
                        <li>
                            <NavLink href="/promotion">Promotion</NavLink>
                        </li>
                        <li>
                            <NavLink href="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink href="/store">Store</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes['menu-personal']}>
                <nav className={classes['nav']}>
                    <ul>
                        <li>
                            <NavLink href="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink href="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
