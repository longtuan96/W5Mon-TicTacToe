import { Button } from "react-bootstrap";
import React from "react";

const History = ({ handleClickHistory, index }) => {
  return (
    <div>
      <Button variant="secondary" onClick={() => handleClickHistory(index)}>
        {`history number ${index + 1}`}
      </Button>
    </div>
  );
};

export default History;
