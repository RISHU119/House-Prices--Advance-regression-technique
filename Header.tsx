
import React from 'react';
import { HouseIcon } from './icons/HouseIcon';

function Header(): React.ReactNode {
  return (
    <header className="bg-white shadow-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center gap-4">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full">
          <HouseIcon />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            AI House Price Predictor
          </h1>
          <p className="text-slate-500 mt-1">
            Using Gemini to perform linear regression for price estimates.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
