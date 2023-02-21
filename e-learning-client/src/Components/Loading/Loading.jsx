import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center my-3">
      <Spinner animation="grow" />
    </div>
  );
};

export default Loading;
