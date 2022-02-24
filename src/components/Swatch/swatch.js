import React, { useState } from 'react';
import style from './swatch.module.css';
import {
    Line,
    Move,
    Polygon,
    Rectangle,
    Ellipse,
    Paint,
    Pencil,
    History,
    Eraser
} from '../../assets/svgIcons';
import ColourPicker from '../ColorPicker/ColourPicker';


const Swatch = (
    {
        toolType,
        setToolType,
        width,
        setWidth,
        setElements,
        setColorWidth,
        setPath,
        colorWidth,
        setShapeWidth,
    }) => {
    const [displaySroke, setDisplayStroke] = useState(false);

    const handleClickStroke = () => {
        setDisplayStroke(!dispatchEvent)
        setColorWidth(colorWidth);
    };

    const increaseWidth = () => {
        if (toolType === 'paint' || toolType === 'eraser') {
            if (width < 30) setWidth(prev => prev + 5);
        }
        if (toolType === 'pencil') {
            if (width < 15) setWidth(prev => prev + 3);
        }
        if (toolType === ('polygon' || 'rectangle' || 'ellipse')) {
            if (width < 15) setShapeWidth(prev => prev + 3);
        }
    };

    const decreaseWidth = () => {
        if (toolType === 'paint' || toolType === 'eraser') {
            if (width > 1) setWidth(prev => prev - 5);
        }
        if (toolType === 'pencil') {
            if (width > 1) setWidth(prev => prev - 3);
        }
        if (toolType === ('polygon' || 'rectangle' || 'circle')) {
            if (width > 1) setShapeWidth(prev => prev - 3);
        }
    };

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