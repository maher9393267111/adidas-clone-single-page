import React from "react";
import Products from "../../components/products";
import Smallproducts from "../../components/seeproducts";
const Home = () => {
  return (
    <div className=" mt-20">
      <div className="   container mr-12">
        {/* -section1  products */}

        <div>
          <Products />
        </div>

        {/* --seen products */}

        <div>
          <Smallproducts />
        </div>
      </div>
    </div>
  );
};

export default Home;
