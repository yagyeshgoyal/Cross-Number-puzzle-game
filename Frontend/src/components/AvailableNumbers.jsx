import React from 'react'

const AvailableNumbers = ({ availableNumbers, draggedNumber, onDragStart, onDragEnd }) => (
    console.log(availableNumbers),
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">Available Numbers (Drag or Click & Type):</h2>
    {/* <p className="text-sm text-gray-600 mb-4">Numbers disappear when used. Each can only be used as many times as needed in the solution.</p> */}
    <div className="flex flex-wrap gap-4 justify-center min-h-24">
      {availableNumbers.length === 0 ? (
        <div className="text-gray-400 text-lg flex items-center justify-center w-full">
          All numbers used! 🎉
        </div>
      ) : (
        availableNumbers.map((number, index) => (
          <div
            key={`${number}-${index}`}
            draggable
            onDragStart={(e) => onDragStart(e, number, index)}
            onDragEnd={onDragEnd}
            className={`
              bg-gradient-to-br from-green-500 to-emerald-600 
              text-white text-3xl font-bold 
              rounded-xl shadow-md
              flex items-center justify-center
              w-20 h-20 cursor-move
              transition-all duration-200
              hover:shadow-xl hover:scale-110
              ${draggedNumber?.index === index ? 'opacity-50' : 'opacity-100'}
            `}
          >
            {number}
          </div>
        ))
      )}
    </div>
  </div>
);

export default AvailableNumbers
