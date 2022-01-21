import React from "react";

function CategoryFilter({categories, onChangeCategory, selectedCategory}) {

  const categoriesItem = categories.map((category, i) => {
    return <button
            key={i}
            onClick={() => onChangeCategory(category)}
            className={selectedCategory === category ? "selected" : null}>
            {category}
            </button>;
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesItem}
    </div>
  );
}

export default CategoryFilter;