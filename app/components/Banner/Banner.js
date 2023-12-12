import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <header className="bg-gray-200 text-black p-4">
      <h1 className="text-4xl font-bold text-indigo-400 ">
        <strong>Shop Smart with 1Click Mall</strong>
      </h1>
      <p className="text-2xl mt-2 text-gray-700">
        Explore a world of choices and convenience at your fingertips.
      </p>
    </header>
  );
};

export default Banner;
