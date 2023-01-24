import UseInputs from "@/contexts/inputs.context";
import { FC } from "react";

const UtilityBar: FC = () => {
  const {setAddresse, setStyle, setWeight, setSize} = UseInputs();

  return (
    <div className="w-full h-20 flex justify-around items-center absolute zs-1 bg-purple-700">
        <p className="font-bold text-lg text-white">Ski app</p>
      <input type="text" name="" id="" placeholder="Search by adresse" className="px-4 py-1" onChange={(e) => setAddresse(e.target.value)} defaultValue="" />
      <select className="px-4 py-1" onChange={(e) => setWeight(Number(e.target.value))}>
        <option value="0">Weight</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      <select className="px-4 py-1" onChange={(e) => setStyle(e.target.value)}>
        <option value="">Style</option>
        <option value="Piste">Piste</option>
        <option value="Freestyle">Freestyle</option>
        <option value="Freeride">Freeride</option>
      </select>
      <select className="px-4 py-1" onChange={(e) => setSize(Number(e.target.value))}>
        <option value="0">Size</option>
        <option value="100">100</option>
        <option value="105">105</option>
        <option value="110">110</option>
        <option value="115">115</option>
        <option value="120">120</option>
      </select>
    </div>
  );
};

export default UtilityBar;
