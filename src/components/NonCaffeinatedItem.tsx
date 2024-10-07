import React from "react";

interface CaffeinatedProps {
  name: string;
  imgUrl: string;
  price: number;
}

const NonCaffeinatedItems: React.FC<CaffeinatedProps> = ({
  name,
  imgUrl,
  price,
}) => {
  return (
    <div className="w-72 bg-[#942b04] shadow-md rounded-xl duration-500  hover:scale-105 hover:shadow-xl">
      <img
        src={imgUrl}
        alt="Product"
        className="h-80 w-72 object-cover rounded-t-xl"
      />
      <div className="w-72 bg-orange-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div className="bg-orange-200 shadow-md rounded-lg p-6 border-2 border-orange-900 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize mb-4">
            {name}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-md text-gray-600">Price:</span>
              <span className="text-lg font-semibold text-black">
                {price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonCaffeinatedItems;
