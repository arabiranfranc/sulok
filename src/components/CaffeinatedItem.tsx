import React from "react";

interface CaffeinatedProps {
  name: string;
  imgUrl: string;
  smallPrice: number;
  largePrice: number;
  hotPrice: number;
}

const CaffeinatedItems: React.FC<CaffeinatedProps> = ({
  name,
  imgUrl,
  smallPrice,
  largePrice,
  hotPrice,
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
              <span className="text-md text-gray-600">Tall:</span>
              <span className="text-lg font-semibold text-black">
                {smallPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md text-gray-600">Grande:</span>
              <span className="text-lg font-semibold text-black">
                {largePrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-md text-gray-600">Hot:</span>
              <span className="text-lg font-semibold text-black">
                {hotPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaffeinatedItems;
