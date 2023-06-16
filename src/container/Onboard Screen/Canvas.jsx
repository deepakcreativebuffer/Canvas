import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { StrategicGoal, ButtonGroups, ZoomButton } from "../../utlis/Import";
import classes from "./Canvas.module.css";
import useEditorContext from "../../hooks/useEditorContext";

const Canvas = () => {
  const { data } = useEditorContext();
  const [components, setComponents] = useState([
    { id: 1, x: 50, y: 50, text: "" },
    // { id: 2, x: 250, y: 250, text: "" },
    // { id: 3, x: 450, y: 450, text: "" },
  ]);
  const [draggingComponentId, setDraggingComponentId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleMouseDown = (e, component) => {
    e.preventDefault();
    setDraggingComponentId(component.id);
    const rect = e.target.getBoundingClientRect();
    console.log("rect", rect);
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = debounce((e) => {
    e.preventDefault();
    if (draggingComponentId !== null) {
      const updatedComponents = components.map((component) => {
        if (component.id === draggingComponentId) {
          const newX = e.clientX - offset.x;
          const newY = e.clientY - offset.y;

          // Check for overlapping positions
          const isOverlapping = components.some(
            (c) =>
              c.id !== draggingComponentId &&
              Math.abs(newX - c.x) < 150 &&
              Math.abs(newY - c.y) < 150
          );

          if (!isOverlapping) {
            return { ...component, x: newX, y: newY };
          }
        }
        return component;
      });
      setComponents(updatedComponents);
    }
  }, 10);

  const handleDoubleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check for overlapping positions
    const isOverlapping = components.some(
      (component) =>
        Math.abs(clickX - component.x) < 150 &&
        Math.abs(clickY - component.y) < 150
    );

    if (!isOverlapping) {
      const newComponent = {
        id: Date.now(), // Generate unique ID for the new component
        x: clickX,
        y: clickY,
      };
      setComponents((prevComponents) => [...prevComponents, newComponent]);
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setDraggingComponentId(null);
  };

  const handleTextChange = (e, component) => {
    console.log(" e.target.value", e.target.value);
    const updatedComponents = components.map((c) => {
      if (c.id === component.id) {
        return { ...c, text: e.target.value };
      }
      return c;
    });
    setComponents(updatedComponents);
    console.log(updatedComponents);
  };

  const zoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const zoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };
  useEffect(() => {
    const updatedComponents = components.map((c) => {
      if (c.id === 1) {
        return { ...c, text: data };
      }
      return c;
    });
    setComponents(updatedComponents);
  }, []);

  return (
    <>
      <ButtonGroups style={{ position: "absolute", zIndex: 1000 }} />
      <div
        className={classes.zoom_container}
        style={{
          "--zoom-level": zoomLevel,
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDoubleClick={handleDoubleClick}
      >
        <div className={classes.component_container}>
          {components.map((component) => (
            <StrategicGoal
              key={component.id}
              component={component}
              handleMouseDown={handleMouseDown}
              handleTextChange={handleTextChange}
              draggingComponentId={draggingComponentId}
            />
          ))}
        </div>

        {/* <div
        className={classes.button_container}
        // style={{ "--zoom-level": zoomLevel }}
      >
       
      </div> */}
      </div>
      <ZoomButton zoomIn={zoomIn} zoomOut={zoomOut} />
    </>
  );
};

export default Canvas;
