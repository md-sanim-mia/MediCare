import React from "react";
import TestimonialCard from "./TestmonilCard";

const TestmonialSection = () => {
  return (
    <div className="  lg:my-24 md:my-20 my-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default TestmonialSection;
