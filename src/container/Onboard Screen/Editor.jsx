import React, { useState } from "react";
import useEditorContext from "../../hooks/useEditorContext";
import Canvas from "./Canvas";
// import { CURSOR_TYPE } from "../../constant";
const Editor = () => {
  const { data } = useEditorContext();
  // const [viewModeEnabled, setViewModeEnabled] = useState(true);

  // const canvasScale = window.devicePixelRatio;
  // const {
  //   width: canvasDOMWidth,
  //   height: canvasDOMHeight,
  //   // viewModeEnabled,
  // } = this.state;
  // const canvasWidth = canvasDOMWidth * canvasScale;
  // const canvasHeight = canvasDOMHeight * canvasScale;

  return (
    <>
      {data}
      <Canvas
      // className="draw__canvas"
      // style={{
      //   width: canvasDOMWidth,
      //   height: canvasDOMHeight,
      //   cursor: CURSOR_TYPE.GRAB,
      // }}
      // width={canvasWidth}
      // height={canvasHeight}
      // ref={this.handleCanvasRef}
      // onContextMenu={this.handleCanvasContextMenu}
      // onPointerMove={this.handleCanvasPointerMove}
      // onPointerUp={this.handleCanvasPointerUp}
      // onPointerCancel={this.removePointer}
      // onTouchMove={this.handleTouchMove}
      // onPointerDown={this.handleCanvasPointerDown}
      />
    </>
  );
};

export default Editor;
