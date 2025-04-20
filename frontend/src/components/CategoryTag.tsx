import React from "react";

interface CategoryTagProps {
  category: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category }) => {
  return (
    <div className="mr-2">
      <p className="px-6 py-2 rounded-full bg-[var(--tertiary-color)]">
        {category}
      </p>
    </div>
  );
};

export default CategoryTag;
