import React from "react";

interface CategoryTagProps {
  category: string;
  color: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category,color }) => {
  return (
    <div className={`px-4 py-2 rounded-full bg-${color} flex w-fit items-center gap-2`}>
      <p className="text-xs lg:text-md">
        {category}
      </p>
    </div>
  );
};

export default CategoryTag;
