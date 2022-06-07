import React from "react";
import "./style.css";

const Seedcard = ({ product }) => {
  return (
    <div>
      <div className=" parent   shadow-xl w-[150px] h-[255px]">
        {/* ---image-- */}

        <div className="w-full h-[155px]">
          <img className="w-full h-full imgh   " src={product.image} alt="" />
        </div>

        {/* -price- */}

        <div className=" effect">
          <h1 className="translate-y-[-22px]  w-[35%] bg-white   ml-2   ">
            {product.price}
          </h1>
        </div>

        {/* -info- */}

        <div className=" ml-2   font-semibold">
          <h1>{product.category}</h1>
          <h2>{product.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Seedcard;
