import React from "react";

interface GenderCheckBoxPropType {
  selectedGender: string;
  onCheckboxChange: (gender: string) => void;
}

const GenderCheckBox = ({ selectedGender, onCheckboxChange}: GenderCheckBoxPropType) => {

  // const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputs({ ...inputs, gender: e.target.name });
  // };

  return (
    <div className="flex space-x-4">
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-gray-300">Male</span>
        <input type="checkbox" name="male" checked={selectedGender === "male"} onChange={()=>onCheckboxChange("male")} />
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-gray-300">Female</span>
        <input type="checkbox" name="female" checked={selectedGender === "female"} onChange={()=> onCheckboxChange("female")} />
      </label>
    </div>
  );
};

export default GenderCheckBox;
