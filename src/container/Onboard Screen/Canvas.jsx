import React, { useState } from "react";
import { debounce } from "lodash";
import StrategicGoal from "./StrategicGoal";

const Canvas = () => {
  const [components, setComponents] = useState([
    { id: 1, x: 50, y: 50, text: "" },
    { id: 2, x: 150, y: 150, text: "" },
    { id: 3, x: 250, y: 250, text: "" },
  ]);
  const [draggingComponentId, setDraggingComponentId] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, component) => {
    e.preventDefault();
    setDraggingComponentId(component.id);
    const rect = e.target.getBoundingClientRect();
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
          return { ...component, x: newX, y: newY };
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
        Math.abs(clickX - component.x) < 100 &&
        Math.abs(clickY - component.y) < 100
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

  return (
    <div
      style={{
        width: "2000px",
        height: "1000px",
        position: "relative",
        overflow: "scroll",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
    >
      <div
        style={{
          width: "1000px",
          height: "1000px",
          position: "relative",
          transform: "translateZ(0)",
        }}
      >
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
    </div>
  );
};

export default Canvas;
