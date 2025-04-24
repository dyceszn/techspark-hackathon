import React from "react";
import ListItem from "./ListItem";

interface ListProps {
  headers: string[];
  data: string[];
}

const List: React.FC<ListProps> = ({ headers, data }) => {
  const colors: string[] = [
    "FF0000",
    "23FF75",
    "E963FD",
    "FFD43E",
    "D9D9D9",
    "EA767E",
  ];

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
          {[...Array(9)].map((_, i) => (
            <ListItem items={data} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
