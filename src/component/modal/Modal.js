import React from "react";
import { products } from "../../data/products";
const Modal = ({ setIsModalOpen, itemId }) => {
  const selectedItem = products.find((item) => item.id === itemId);

  return (
    <div>
      <div
        onClick={() => setIsModalOpen(false)}
        className="flex justify-center items-center fixed inset-0 bg-gray-700 bg-opacity-60 z-50"
      >
        <div
          className="modalContent flex items-center justify-center flex-col bg-white w-96 h-a text-black z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            alt="product img"
            src={selectedItem.image}
            style={{ maxHeight: "calc(100vh - 50px)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
