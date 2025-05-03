import React from "react";
import { comment } from "../assets/icons";

interface SingleCommentProps {
  reviewer: string;
  review: string;
}

const SingleComment: React.FC<SingleCommentProps> = ({ reviewer, review }) => {
  return (
    <div className=" flex w-[100%]">
      <p className="font-extralight text-md mt-4 text-right">
        {review}
        <br />
        <span className="font-bold">- {reviewer}</span>
      </p>
      <img className="size-10 ml-3" src={comment} alt="" />
    </div>
  );
};

export default SingleComment;
