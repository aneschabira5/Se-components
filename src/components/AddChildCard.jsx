import React from "react";


import { CirclePlus } from 'lucide-react';

export const AddChildCard= () => {
 
  return (
    <div
      className="group bg-transparent rounded-xl shadow-sm  overflow-hidden cursor-pointer relative select-none " 
    >
        <div className="relative w-full h-full overflow-hidden hover:scale-120 transition-transform duration-300">
            <div className="absolute  z-10" />
            <div className="flex justify-center items-center w-full h-full">
            <CirclePlus size={100} className="text-blue-200 hover:text-blue-500 group-hover/delete:text-white transition-colors" />
            </div>
        </div>
        
    </div>
  );
};
