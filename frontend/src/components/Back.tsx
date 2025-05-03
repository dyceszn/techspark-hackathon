// src/components/Back.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { back } from "../assets/icons";

const Back: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one page in history
  };

  return (
    <button onClick={handleGoBack}className="ml-24 mt-5">
      <img src={back} alt="" />
    </button>
  );
};

export default Back;
