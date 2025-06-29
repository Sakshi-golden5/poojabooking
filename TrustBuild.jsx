import React from 'react';
import { items } from '../assets/assets';

const TrustBuild = () => {

  return (
    <div className="bg-gray-100 py-25 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        With years os sacred service and trust fron hundred of families, Pandit ji brings not just rituals-but blessing, meaning, and peace to every pooja he performs.
      </p>
      
      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={item.image} alt="icon" className="w-14 h-14 mb-4" />
            {/* <h3 className="text-4xl font-bold text-blue-600 mb-2">{item.number}</h3> */}
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBuild;
