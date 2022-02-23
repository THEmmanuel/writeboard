import React, {useEffect} from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

const ColourPicker = ({setColorWidth}) => {
    const [color, setColor] = useColor('hex', '#121212');
    useEffect(() => {
        setColorWidth(color);
    }, [color]);
}