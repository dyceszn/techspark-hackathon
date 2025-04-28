import React from "react";

interface StatusBoxProps {
  status: string;
  statusValue: number | string;
}

const StatusBox: React.FC<StatusBoxProps> = ({ status, statusValue }) => {
  return (
    <div className="bg-[var(--tertiary-color)] h-24 w-64 rounded-2xl flex flex-col p-4">
      <p className="">{status}</p>
      <div className="h-full flex items-center justify-end">
        <p className=" text-xl">{statusValue}</p>
      </div>
    </div>
  );
};

export default StatusBox;
