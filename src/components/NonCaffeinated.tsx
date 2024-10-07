import React from "react";
import { nonCaffeinated } from "../data/caffeinated";
import Title from "./Title";
import NonCaffeinatedItems from "./NonCaffeinatedItem";

const NonCaffeinated: React.FC = () => {
  return (
    <div id="Non Caffeinated">
      <Title>Non Caffeinated</Title>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10">
        {nonCaffeinated.map((item, index) => (
          <NonCaffeinatedItems
            key={index}
            name={item.name}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NonCaffeinated;
