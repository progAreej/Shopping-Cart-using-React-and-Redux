import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = ['Food & Beverages', 'Kitchenware', 'Accessories', 'Home Decor'];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className="block p-4 bg-gray-200 hover:bg-gray-300 text-center"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
