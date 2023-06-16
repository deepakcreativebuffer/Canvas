import * as React from "react";
import Button from "@mui/material/Button";
import { ZooomButtonWrapper } from "./styles";
const ZoomButton = ({ zoomIn, zoomOut }) => {
  return (
    <ZooomButtonWrapper sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="outlined" size="small" onClick={zoomIn}>
          +
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" onClick={zoomOut}>
          -
        </Button>
      </div>
    </ZooomButtonWrapper>
  );
};
export default ZoomButton;
