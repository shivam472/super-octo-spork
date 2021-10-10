import classes from './Project.module.css';
import { useState } from 'react';

const Project = (prjct) => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div className={classes.project}>
                <img src={prjct.prjct.image} alt={prjct.prjct.text} />
                <div className={classes['text-container']}>
                    {!prjct.prjct.YTlink && <p>{prjct.prjct.text}</p>}
                    {prjct.prjct.YTlink && <p style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer', fontSize: 'small', fontWeight: 'bolder' }} onClick={() => setShowVideo(true)}> {prjct.prjct.YTlink} </p>}
                </div>

            </div>
            <div>
                {showVideo && <div className={classes.video}><iframe width="560" height="315" src={prjct.prjct.YTlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>}
            </div>
        </>
    )
}

export default Project;