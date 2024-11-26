import React from "react";
import { useNavigate } from "react-router-dom";
 
const Cards = ({ item }) => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/manual-buy", { state: { item } });
  };

// function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline mt-4 py-4 px-4">৳ {item.price}</div>
              <div onClick={handleBuy} className="ring-2 ring-red-500 hover:ring-0 cursor-pointer px-6 py-2 rounded-full  hover:bg-red-500 mt-2 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;