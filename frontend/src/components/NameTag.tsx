import React from "react";

interface NameTagProps {
  text: string;
  className?: string;
}

const NameTag: React.FC<NameTagProps> = ({ text, className = "" }) => {
  return (
    <div
      className={`px-4 py-2 rounded-full bg-[var(--primary-color)] flex w-fit items-center gap-2 ${className}`}
    >
      <p className="text-[8px] font-light font-[Comfortaa]">{text}</p>
    </div>
  );
};

export default NameTag;