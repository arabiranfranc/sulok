import React from "react";
import { specials } from "../data/caffeinated";
import Title from "./Title";
import SpecialsItem from "./SpecialsItem";

const Specials: React.FC = () => {
  return (
    <div>
      <Title>Specials</Title>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-14 mt-10">
        {specials.map((item, index) => (
          <SpecialsItem
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

export default Specials;
