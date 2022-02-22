import React, { useEffect, useState } from 'react';
import './App.css';
import Swatch from './components/Swatch/swatch';
import rough from 'roughjs/bundled/rough.esm';

import {
  createElement,
  adjustElementCoordinates,
  cursorForPosition,
  resizedCoordinates,
  midPointBetween,
  getElementAtPosition,
} from './components/Element';

function App() {

  const [points, setPoints] = useState([]);
  const [path, setPath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [elements, setElements] = useState([]);
  const [action, setAction] = useState('none');
  const [toolType, setToolType] = useState('pencil');
  const [selectedElement, setSelectedElement] = useState(null);
  const [colorWidth, setColorWidth] = useState({
    hex: '#000',
    hsv: {},
    rgb: {},
  });
  const [width, setWidth] = useState(1);
  const [shapeWidth, setShapeWidth] = useState(1);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";

    context.save();

    const drawpath = () => {
      path.forEach((stroke, index) => {
        context.beginPath();

        stroke.forEach((point, i) => {
          context.strokeStyle = point.newColour;
          context.lineWidth = point.newLinewidth;

          let midPoint = midPointBetween(point.clientX, point.clientY);

          context.quadraticCurveTo(
            point.clientX,
            point.clientY,
            midPoint.x,
            midPoint.y
          );
          context.lineTo(point.clientX, point.clientY);
          context.stroke();
        });
        context.closePath();
        context.save();
      });
    };

    if (toolType === "eraser" && popped === true) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      setPopped(false);
    }

    const roughCanvas = rough.canvas(canvas);

    if (path !== undefined) drawpath();

    context.lineWidth = shapeWidth;

    elements.forEach(({ roughElement }) => {
      context.globalAlpha = "1";
      //console.log(roughElement);
      context.strokeStyle = roughElement.options.stroke;
      roughCanvas.draw(roughElement);
    });

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popped, elements, path, width]);

  const updateElement = (
    index,
    x1,
    y1,
    x2,
    y2,
    toolType,
    strokeWidth,
    strokeColor
  ) => {
    const updatedElement = createElement(
      index,
      x1,
      y1,
      x2,
      y2,
      toolType,
      strokeWidth,
      strokeColor
    );

    const elementsCopy = [...elements];
    elementsCopy[index] = updatedElement;
    setElements(elementsCopy);
  };

  const checkPresent = (clientX, clientY) => {
    if (path === undefined) return;
    let newPath = path;
    path.forEach((stroke, index) => {
      stroke.forEach((point, i) => {
        if (
          clientY < point.clientY + 10 &&
          clientY > point.clientY - 10 &&
          clientX < point.clientX + 10 &&
          clientX > point.clientX - 10
        ) {
          newPath.splice(index, 1);
          setPopped(true);
          setPath(newPath);
          return;
        }
      });
    });
    const newElements = elements;
    newElements.forEach((element, index) => {
      if (
        clientX >= element.x1 &&
        clientX <= element.x2 &&
        clientY >= element.y1 &&
        clientY <= element.y2
      ) {
        newElements.splice(index, 1);
        setPopped(true);
        setElements(newElements);
      }
    })
  };

  const handleMouseDown = e => {
    const { clientX, clientY } = e;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d')

    if (toolType === 'selection') {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        const offsetX = clientX - element.x1;
        const offsetY = clientY - element.y1;
        setSelectedElement({ ...element, offsetX, offsetY });
        if (element.position === 'inside') {
          setAction('moving');
        } else {
          setAction('resize')
        }
      }
    } else if (toolType === 'eraser') {
      setAction('erasing');
      checkPresent(clientX, clientY);
    }
    else {
      const id = elements.length;
      if (toolType === 'pencil' || toolType === 'brush') {
        setAction('sketching');
        setIsDrawing(true);

        const newColour = colorWidth.hex;
        const newLineWidth = width;
        const transparency = toolType === 'brush' ? '0.1' : '1.0';
        const newEle = {
          clientX,
          clientY,
          newColour,
          newLineWidth,
          transparency,
        };
        setPoints(state => [...state, newEle]);

        context.strokeStyle = newColour;
        context.lineWidth = newLineWidth;
        context.lineCap = 5;
        context.moveTo(clientX, clientY);
        context.beginPath();
      } else {
        setAction('drawing');
        const newColour = colorWidth.hex;
        const newWidth = shapeWidth;
        const element = createElement(
          id,
          clientX,
          clientY,
          clientX,
          clientY,
          toolType,
          newWidth,
          newColour
        );

        setElements((prevState) => [...prevState, element]);
        setSelectedElement(element);
      }
    }
  };

  const handleMouseMove = e => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const { clientX, clientY } = e;
    if (toolType === 'selection') {
      const element = getElementAtPosition(clientX, clientY, elements);
      e.target.style.cursor = element
        ? cursorForPosition(element.position)
        : 'default';
    }

    if (action === 'erasing') {
      checkPresent(clientX, clientY);
    }

    if (action === 'sketching') {
      if (!isDrawing) return
      const colour = points[points.length - 1].newColour;
      const lineWidth = points[points.length - 1].newLineWidth;
      const transparency = points[points.length - 1].transparency;
      const newEle = { clientX, clientY, colour, lineWidth, transparency };

      setPoints((state) => [...state, newEle]);
      let midPoint = midPointBetween(clientX, clientY);
      context.quadraticCurveTo(clientX, clientY, midPoint.x, midPoint.y);
      context.lineTo(clientX, clientY);
      context.stroke();
    } else if (action === 'drawing') {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      elements[index].strokeColor = colorWidth.hex;
      elements[index].strokeWidth = shapeWidth;
      updateElement(
        index,
        x1,
        y1,
        clientX,
        clientY,
        toolType,
        shapeWidth,
        colorWidth.hex
      );
    } else if (action === 'moving') {
      const {
        id,
        x1,
        x2,
        y1,
        y2,
        type,
        offsetX,
        offsetY,
        shapeWidth,
        strokeColor,
      } = selectedElement;
      const offsetWidth = x2 - x1;
      const offsetHeight = y2 - y1;
      const newX = clientX - offsetX;
      const newY = clientY - offsetY;
      updateElement(
        id,
        newX,
        newY,
        newX + offsetWidth,
        newY + offsetHeight,
        type,
        shapeWidth,
        strokeColor
      );
    } else if (action === 'resize') {
      const { id, type, position, ...coordinates } = selectedElement;
      const { x1, y1, x2, y2 } = resizedCoordinates(
        clientX,
        clientY,
        position,
        coordinates
      );
      updateElement(id, x1, y1, x2, y2, type, shapeWidth, colorWidth.hex)
    }
  };

  const handleMouseUp = () => {
    if (action === 'resize') {
      const index = selectedElement.id;
      const {id, type, strokeWidth, strokeColor} = elements[index];
      const {x1, y1, x2, y2} = adjustElementCoordinates(elements[index]);
      updateElement(id, x1, y1, x2, y2, type, strokeWidth, strokeColor);
    } else if (action === 'drawing') {
      const index = selectedElement.id;
      const {id, type, strokeWidth} = elements[index];
      const {x1, y1, x2, y2} = adjustElementCoordinates(elements[index]);
    } else if (action === 'sketching') {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      context.closePath();
      const element = points;
      setPoints([]);
      setPath(prevState => [...prevState, element]);
      setIsDrawing(false);
    }
    setAction('none');
  }

  return (
    <div className="App">
      <span>Writeboard</span>
      <Swatch />
    </div>
  );
}

export default App;