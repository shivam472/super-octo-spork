import { useState, useEffect, useCallback } from 'react';
import classes from './Projects.module.css';
import Project from './Project';
import { db } from '../firebase';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const getProjects = useCallback(() => {
        const prjctArr = [];
        db.collection('projects').onSnapshot(snapshot => {
            snapshot.docs.map(doc => prjctArr.push(doc.data()));
            setProjects(prjctArr);
        })

    }, [])

    useEffect(() => {
        getProjects();
    }, [getProjects]);


    return (
        <div className={classes['projects-container']}>
            <div className={classes.heading}>
                <img src='https://ide.tinkergen.com/static/assets/8ce90eaf7f9ec3e1b965556abd8054c6.png' alt='projects' />
                <h3>Projects</h3>
            </div>

            <div className={classes.projects}>
                {projects.map((project, index) => <Project key={index} prjct={project} />)}
            </div>
        </div>
    )
}

export default Projects;