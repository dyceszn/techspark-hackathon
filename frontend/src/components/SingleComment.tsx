import React from "react";
import { comment } from "../assets/icons";

const SingleComment = () => {
  return (
    <div className=" flex w-[100%]">
      <p className="font-extralight text-md mt-4 text-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend
        non ipsum vitae egestas. Suspendisse potenti.
        <br />
        <span className="font-bold">{"- by Jude Samuel"}</span>
      </p>
      <img className="size-10 ml-3" src={comment} alt="" />
    </div>
  );
};

export default SingleComment;
