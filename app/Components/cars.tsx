import React from 'react';
import { cardContents } from '../Constans/index';

const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardContents.map((card) => (
        <div key={card.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={card.imageUrl} alt="Card" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
