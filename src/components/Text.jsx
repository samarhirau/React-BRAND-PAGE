// import React from "react";

// function Text() {
//   return (
//     <div >
//     <div className="md:w-1/2 w-screen  md:mx-36 mx-auto bg-white/30 backdrop-blur-xs rounded-2xl p-8  mt-20  ">
      
//       <h1 className="text-3xl md:text-5xl">Experience the comfort and quality of our handcrafted home goods.</h1>
//       <p className="text-lg mt-6">
//         Invest in pieces that will not only look great but also provide lasting
//         comfort and durability. Our products are made with the finest materials
//         and craftsmanship, ensuring years of enjoyment.
//       </p>
//       <button className="bg-[#2B400D] font-light text-white mt-6 py-2 px-4 rounded-lg">
//         SHOP NOW
//       </button>
//     </div>
//   </div>
//   );
// }

// export default Text;
import React from "react";

function Text() {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="md:w-1/2 w-[90%] bg-white/30 backdrop-blur-lg rounded-2xl p-8 ">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Experience the comfort and quality of our handcrafted home goods.
        </h1>
        <p className="text-lg mt-6 text-gray-700">
          Invest in pieces that not only look great but also provide lasting comfort and durability.
          Our products are made with the finest materials and craftsmanship, ensuring years of enjoyment.
        </p>
        <button className="bg-[#2B400D] font-light text-white mt-6 py-2 px-6 rounded-lg transition hover:bg-[#1D2B07]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Text;
