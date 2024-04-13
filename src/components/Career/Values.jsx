import React from "react";

const Values = () => {
  return (
    <div className="  bg-[#f6f8ff] py-12 text-gray-600 font-medium">
      <div className="text-center">
      <p className="text-red-500 text-xl font-semibold">Values</p>
      <p className="text-indigo-950 font-extrabold text-4xl py-4" >We believe in</p>
      <p className="pb-6">
        We believe in creating an environment where individuals can thrive and
        make a meaningful impact.
      </p>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-16 px-36">
        <div className="card flex justify-start flex-col gap-3  p-8 border-2  bg-white shadow-2xl rounded-2xl">
          <p>Icon</p>
          <p className="text-lg font-bold text-blue-950">Lorem ipsum dolor</p>
          <p className="text-sm">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
        </div>
      
    
       
    
       
      </div>
    </div>
  );
};

export default Values;
