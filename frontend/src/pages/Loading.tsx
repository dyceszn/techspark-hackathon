import React from "react";
import { loading } from "../assets/icons";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img className="size-16 rounded-full animate-spin" src={loading} alt="" />
    </div>
  );
};

export default Loading;
