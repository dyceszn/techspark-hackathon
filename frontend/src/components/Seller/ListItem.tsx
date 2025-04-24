import React from "react";

interface ListItemProps {
  items: string[];
}

const ListItem: React.FC<ListItemProps> = ({ items }) => {
  return (
    <tr className="text-center cursor-pointer hover:bg-[var(--tertiary-color)] rounded-2xl">
      {items.map((item, index) => (
        <td key={index} className="py-6">
          {item}
        </td>
      ))}
    </tr>
  );
};

export default ListItem;
