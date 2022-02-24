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
            <button>
                <Move />
            </button>

            <button>
                <Line />
            </button>

            <button>
                <Pencil />
            </button>

            <button>
                <Paint />
            </button>

            <button>
                <Rectangle />
            </button>

            <button>
                <Ellipse />
            </button>

            <button>
                <Polygon />
            </button>

            <button>
                <Eraser />
            </button>

            <button>
                <History />
            </button>
        </div>
    )
}

export default Swatch;