import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex space-x-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-gray-300">Male</span>
        <input type="checkbox" />
      </label>
 
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-gray-300">Female</span>
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default GenderCheckBox;
