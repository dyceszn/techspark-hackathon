import React from "react";
import ListItem from "./ListItem";

interface ListProps {
  headers: string[];
  data: Record<string, string>[];
  onItemClick?: (id: string) => void;
  itemType: "product" | "order" | "gig" | "transaction";
}

const List: React.FC<ListProps> = ({
  headers,
  data,
  onItemClick,
  itemType,
}) => {
  const colors: string[] = [
    "FF0000",
    "23FF75",
    "E963FD",
    "FFD43E",
    "D9D9D9",
    "EA767E",
  ];

  const handleClick = (itemID: string) => {
    if (itemType !== "transaction") {
      onItemClick?.(itemID);
    }
  };

  return (
    <div className="">
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((item, index) => (
              <th key={index} className=" py-8">
                <span
                  style={{ backgroundColor: `#${colors[index]}` }}
                  className="size-2 mr-2 inline-block rounded-full"
                ></span>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <ListItem
              key={index}
              items={item}
              onClick={() =>
                handleClick(item.ProductID || item.orderID || item.serviceID)
              }
              cursorType={itemType === "transaction" ? "default" : "pointer"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
