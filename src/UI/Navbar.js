import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {
    let location = useLocation();

    const [isShow, setIsShow] = useState(false);
    
    const onToggle = ()=> {
        const toggle = document.querySelector('ul');
        if(!isShow) {
            toggle.style.display = 'flex';
            setIsShow(true);
        }
        else {
            toggle.style.display = 'none';
            setIsShow(false);
        }
    }

    return (
        <nav id={styles.navbar}>
            <div id={styles.logo}>
                <h2><Link to='/'>Tushar Ranjan Nayak</Link></h2>
                <div id={styles.toggle} onClick={onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul>
                <li><Link to='/projects' data-char="Projects" className={`${location.pathname === '/projects' ? styles.active : ""}`}>Projects</Link></li>
                <li><Link to='/about' data-char="About" className={`${location.pathname === '/about' ? styles.active : ""}`}>About</Link></li>
                <li><Link to='/contact' data-char="Contact" className={`${location.pathname === '/contact' ? styles.active : ""}`}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
