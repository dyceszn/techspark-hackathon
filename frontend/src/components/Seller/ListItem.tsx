import React from "react";

interface ListItemProps {
  items: Record<string, string>;
  onClick: () => void;
  cursorType?: "pointer" | "default";
}

const ListItem: React.FC<ListItemProps> = ({
  items,
  onClick,
  cursorType = "pointer",
}) => {
  return (
    <tr
      className={`text-center ${
        cursorType === "pointer" ? "cursor-pointer" : "cursor-default"
      } hover:bg-[var(--tertiary-color)] rounded-2xl`}
      onClick={onClick}
    >
      {Object.values(items).map((value, index) => (
        <td key={index} className="py-6">
          {value}
        </td>
      ))}
    </tr>
  );
};

export default ListItem;
