import React, { useState } from 'react';

// Updated cardData object with consistent labels
const cardData = {
  line1: {
    title: 'Line 1',
    cards: [
      { id: 1, label: 'TotalQuality', value: 0, symbol: '-' },
      { id: 2, label: 'UsedQuality', value: 0, symbol: '=' },
      { id: 3, label: 'Pending', value: 0, symbol: '' }
    ]
  },
  line2: {
    title: 'Line 2',
    cards: [
      { id: 4, label: 'TotalQuality', value: 0, symbol: '-' },
      { id: 5, label: 'UsedQuality', value: 0, symbol: '=' },
      { id: 6, label: 'Pending', value: 0, symbol: '' }
    ]
  },
 
  line4: {
    title: 'Line 4',
    cards: [
      { id: 10, label: 'TotalQuality', value: 0, symbol: '-' },
      { id: 11, label: 'UsedQuality', value: 0, symbol: '=' },
      { id: 12, label: 'Pending', value: 0, symbol: '' }
    ]
  },
  line5: {
    title: 'Line 5',
    cards: [
      { id: 13, label: 'TotalQuality', value: 0, symbol: '-' },
      { id: 14, label: 'UsedQuality', value: 0, symbol: '=' },
      { id: 15, label: 'Pending', value: 0, symbol: '' }
    ]
  },
  line6: {
    title: 'Line 6',
    cards: [
      { id: 16, label: 'TotalQuality', value: 0, symbol: '-' },
      { id: 17, label: 'UsedQuality', value: 0, symbol: '=' },
      { id: 18, label: 'Pending', value: 0, symbol: '' }
    ]
  }
};

const WP1 = () => {
  const [inputValues, setInputValues] = useState({
    1: 0,
    2: 0,
    4: 0,
    5: 0,
    7: 0,
    8: 0,
    10: 0,
    11: 0,
    13: 0,
    14: 0,
    16: 0,
    17: 0
  });

  // Update input values based on user input
  const handleInputChange = (id, value) => {
    const newValue = parseInt(value) || 0;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: newValue
    }));
  };

  // Calculate results based on card inputs
  const totalDifference =
    (inputValues[1] - inputValues[2]) +
    (inputValues[4] - inputValues[5]) +
    (inputValues[7] - inputValues[8]);

  const additionalResult = inputValues[10] - inputValues[11];
  
  const thirdResult = inputValues[13] - inputValues[14];
  
  const fourthResult = inputValues[16] - inputValues[17];

  return (
    <div>
      <div className='p-8 mt-8 mb-8 ml-12 mr-12 bg-white border-2 border-gray-300 rounded-2xl'>
        {Object.keys(cardData).map((lineKey) => {
          const { title, cards } = cardData[lineKey];
          return (
            <div key={lineKey} className='mb-8'>
              {/* Line Title */}
              <h2 className='m-3 text-xl font-semibold'>{title}</h2>
              {/* Cards for this line */}
              <div className='flex space-x-14'>
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className='relative flex items-center justify-center mb-4 border-2 border-gray-300 border-dashed w-72 h-14 bg-gray-00 rounded-xl'
                  >
                    {/* Input Fields for the first two cards in each line */}
                    {card.label !== 'Pending' ? (
                      <input
                        type='number'
                        value={inputValues[card.id]}
                        onChange={(e) => handleInputChange(card.id, e.target.value)}
                        className='absolute w-20 pl-2 text-xl text-black border border-gray-300 rounded-md left-4'
                      />
                    ) : (
                      <h1 className='absolute pl-2 text-xl text-black left-4'>
                        {lineKey === 'line3' && card.id === 9
                          ? totalDifference
                          : lineKey === 'line4' && card.id === 12
                          ? additionalResult
                          : lineKey === 'line5' && card.id === 15
                          ? thirdResult
                          : lineKey === 'line6' && card.id === 18
                          ? fourthResult
                          : inputValues[card.id - 2] - inputValues[card.id - 1]}
                      </h1>
                    )}
                    <p className='absolute top-0 px-6 text-lg font-semibold text-black transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg left-24'>
                      {card.label}
                    </p>
                    {/* Symbol outside the card */}
                    {card.symbol && (
                      <span className='absolute right-[-1.5rem] text-2xl text-black'>
                        {card.symbol}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WP1;
