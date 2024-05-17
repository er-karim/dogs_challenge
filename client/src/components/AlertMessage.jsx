import React from "react";
import { Alert } from "flowbite-react";
import { AiFillInfoCircle } from "react-icons/ai";

const AlertMessage = ({ color, message }) => {
  return (
    <Alert color={color} icon={AiFillInfoCircle}>
      <span className="font-medium">Info alert!</span> {message}
    </Alert>
  );
};

export default AlertMessage;
