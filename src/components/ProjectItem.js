import React from 'react';

import styles from './projectItem.module.css';

const ProjectItem = ({ name, link, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="Learn More" />
            <div className={styles.description}>
                <h2>{name}</h2>
                <button><a href={link} target="_blank" rel="noreferrer">Learn More</a></button>
            </div>
        </div>
    )
}

export default ProjectItem;
