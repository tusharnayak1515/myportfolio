import React from 'react';
import ProjectItem from './ProjectItem';

import { projects } from '../Helper';

import styles from './projects.module.css';

const Projects = () => {
    return (
        <div id={styles.projects}>
            <h1>My Projects</h1>
            <div id={styles.project_container}>
                {projects && projects.map(pr => {
                    return <ProjectItem key={pr.link} name={pr.name} link={pr.link} image={pr.image} />
                })}
            </div>
        </div>
    )
}

export default Projects
