import React, { useContext } from "react";
import { menuTimeRange } from "../utils/utils";
import SpotifyContext from "../context/SpotifyContext";

const Dropdown = () => {
  const { handleChange } = useContext(SpotifyContext);

  return (
    <div className="relative w-full lg:max-w-sm flex justify-center items-center">
      <select
        onChange={handleChange}
        className="relative w-40 p-2.5 my-4 capitalize text-sm text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
      >
        <option defaultValue disabled>
          Select Time...
        </option>
        {menuTimeRange.map((item) => {
          return (
            <option value={item.value} key={item.id}>
              {item.description}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
