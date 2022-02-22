import React, { useState } from 'react';
import style from './swatch.module.css';

import pencil from '../../assets/pencil.png';
import line from '../../assets/line.png';
import rectangle from '../../assets/rectangle.png';
import ellipse from '../../assets/ellipse.png';
import polygon from '../../assets/polygon.png';
import paint from '../../assets/paint.png';
import history from '../../assets/history.png';
import eraser from '../../assets/eraser.png';


const Swatch = props => {
    const [displaySroke, setDisplayStroke] = useState(false)
    const handleClickStroke = () => {
        setDisplayStroke(!dispatchEvent)
    }
    return (
        <div className={style.swatch}>
            <img src={pencil} alt="pencil" className={style.icon} />
            <img src={line} alt="line" className={style.icon} />
            <img src={rectangle} alt="rectangle" className={style.icon} />
            <img src={ellipse} alt="ellipse" className={style.icon} />
            <img src={polygon} alt="polygon" className={style.icon} />
            <img src={paint} alt="paint" className={style.icon} />
            <img src={history} alt="history" className={style.icon} />
            <img src={eraser} alt="eraser" className={style.icon} />
        </div>
    )
}

export default Swatch;