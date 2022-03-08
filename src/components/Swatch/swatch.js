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
        <div className={style.swatchContainer}>
            <div className={style.swatch}>
                <button
                    className={style.Move}
                    onClick={() => {
                        setToolType('move');
                        setShapeWidth(1);
                    }}>
                    <Move />
                </button>

                <button
                    className={style.Line}
                    onClick={() => {
                        setToolType('line');
                        setWidth(1);
                        setShapeWidth(1);
                    }}>
                    <Line />
                </button>

                <button
                    className={style.Pencil}
                    onClick={() => {
                        setToolType('pencil');
                        setWidth(1);
                        setShapeWidth(1);
                    }}>
                    <Pencil />
                </button>

                <button
                    className={style.Paint}
                    onClick={() => {
                        setToolType('paint');
                        setWidth(10);
                        setShapeWidth(1);
                    }}
                >
                    <Paint />
                </button>

                <button
                    className={style.Rectangle}
                    onClick={() => {
                        setToolType('rectangle');
                        setWidth(1);
                        setShapeWidth(1);
                    }}
                >
                    <Rectangle />
                </button>

                <button
                    className={style.Ellipse}
                    onClick={() => {
                        setToolType('ellipse');
                        setWidth(1);
                        setShapeWidth(1);
                    }}
                >
                    <Ellipse />
                </button>

                <button 
                className={style.Polygon}
                onClick = {() => {
                    setToolType('polygon')
                    setWidth(1);
                    setShapeWidth(1);
                }}
                >
                    <Polygon />
                </button>

                <button
                    onClick={() => {
                        setToolType('eraser');
                        setWidth(10);
                        setShapeWidth(1);
                    }}
                >
                    <Eraser />
                </button>

                <button>
                    <History />
                </button>
            </div>
        </div>
    )
}

export default Swatch;