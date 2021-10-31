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
                <h2><Link to={process.env.PUBLIC_URL + '/'}>Tushar Ranjan Nayak</Link></h2>
                <div id={styles.toggle} onClick={onToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul>
                <li><Link to={process.env.PUBLIC_URL + '/projects'} data-char="Projects" className={`${location.pathname === process.env.PUBLIC_URL + '/projects' ? styles.active : ""}`}>Projects</Link></li>
                <li><Link to={process.env.PUBLIC_URL + '/about'} data-char="About" className={`${location.pathname === process.env.PUBLIC_URL + '/about' ? styles.active : ""}`}>About</Link></li>
                <li><Link to={process.env.PUBLIC_URL + '/contact'} data-char="Contact" className={`${location.pathname === process.env.PUBLIC_URL + '/contact' ? styles.active : ""}`}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
