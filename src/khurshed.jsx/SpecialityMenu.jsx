import React from "react";

const SpecialityMenu = ({ items }) => {
  const handleAddToCart = (itemName) => {
    alert(`${itemName} has been added to the cart!`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", textAlign: "center" }}>
          <img
            src={item.image.replace("%s", "400")}
            alt={item.name}
            style={{ width: "200px", height: "150px", objectFit: "cover" }}
          />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p style={{ fontWeight: "bold" }}>{item.price}</p>
          <button
            onClick={() => handleAddToCart(item.name)}
            style={{
              backgroundColor: "#d32f2f",
              color: "#fff",
              padding: "10px 10px",
              border: "none",
              borderRadius: "500px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default SpecialityMenu;

