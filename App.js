import React, { useState, useEffect } from "react";
import "./styles.css";
import laptopImage from "./laptop.jpeg";
import smartphoneImage from "./smartphone.jpg";
import headphonesImage from "./headphones.jpeg";

const productsData = [
  { id: 1, name: "Laptop", price: 999, image: laptopImage },
  { id: 2, name: "Smartphone", price: 699, image: smartphoneImage },
  { id: 3, name: "Headphones", price: 199, image: headphonesImage }
];

const ProductList = ({ products, addToWishlist }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? <p>No items in wishlist</p> : null}
      {wishlist.map((item) => (
        <div key={item.id} className="wishlist-item">
          <img src={item.image} alt={item.name} className="wishlist-image" />
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("App component mounted");
  }, []);

  useEffect(() => {
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className={darkMode ? "dark-mode ecommerce-container" : "ecommerce-container"}>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="title">E-Commerce Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ProductList products={filteredProducts} addToWishlist={addToWishlist} />
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  );
};

export default App;
