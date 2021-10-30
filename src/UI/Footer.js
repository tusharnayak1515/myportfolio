import React from 'react';

import styles from './footer.module.css';

const Footer = () => {
    const facebook_url = process.env.REACT_APP_FACEBOOK_URL;
    const instagram_url = process.env.REACT_APP_INSTAGRAM_URL;
    const github_url = process.env.REACT_APP_GITHUB_URL;
    const linkedIn_url = process.env.REACT_APP_LINKEDIN_URL;
    return (
        <footer id={styles.footer}>
            <ul>
                <li><a href={linkedIn_url} rel="noreferrer" target="_blank">LinkedIn</a></li>
                <li><a href={github_url} rel="noreferrer" target="_blank">Github</a></li>
                <li><a href={facebook_url} rel="noreferrer" target="_blank">Facebook</a></li>
                <li><a href={instagram_url} rel="noreferrer" target="_blank">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer
