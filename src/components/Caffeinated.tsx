import React from "react";
import { caffeinated } from "../data/caffeinated";
import CaffeinatedItems from "./CaffeinatedItem";
import Title from "./Title";

const Caffeinated: React.FC = () => {
  return (
    <div>
      <Title>Caffeinated</Title>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10">
        {caffeinated.map((item, index) => (
          <CaffeinatedItems
            key={index}
            name={item.name}
            imgUrl={item.imgUrl}
            smallPrice={item.smallPrice}
            largePrice={item.largePrice}
            hotPrice={item.hotPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Caffeinated;
