import React from "react";
import Caffeinated from "./components/Caffeinated";
import NonCaffeinated from "./components/NonCaffeinated";
import Specials from "./components/Specials";
import ButtonPopOver from "./components/ButtonPopOver";
import Footer from "./components/Footer";
import Staff from "./components/Staff";

const App: React.FC = () => {
  return (
    <>
      <div
        style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 2 }}
      >
        <ButtonPopOver />
      </div>
      <div className="bg-[#e5dfcc] text-white min-h-screen font-inter p-10">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Caffeinated />
        </div>
        <div className="max-w-5xl w-11/12 mx-auto mt-[100px]">
          <NonCaffeinated />
        </div>
        <div className="max-w-5xl w-11/12 mx-auto mt-[100px]">
          <Specials />
        </div>
        {/* <Staff /> */}
      </div>

      <Footer />
    </>
  );
};

export default App;
