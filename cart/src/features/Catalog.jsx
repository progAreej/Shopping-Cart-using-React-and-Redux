import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Fetch product data from JSON file
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <button
              className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
