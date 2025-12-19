import React from 'react'

const GridCell = ({ cell, rowIdx, colIdx, isSelected, cellStatus, correctValue, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold cursor-pointer relative
        ${cell === 'black' ? 'bg-gray-300 border-gray-400' : 'bg-white border-gray-400'}
        ${isSelected ? 'border-blue-500 ring-4 ring-blue-200' : ''}
        ${cellStatus === 'correct' ? 'bg-green-100 text-green-700' : ''}
        ${cellStatus === 'incorrect' ? 'bg-red-100 text-red-700' : ''}
        ${!cellStatus && cell && cell !== 'black' ? 'text-purple-700' : ''}
      `}
      style={{
        borderStyle: cell === 'black' ? 'solid' : 'dashed'
      }}
    >
      {cell !== 'black' && cell}
      {cellStatus === 'incorrect' && correctValue !== 'black' && (
        <div className="absolute -bottom-5 text-xs font-bold text-green-600 bg-green-100 px-1 rounded">
          {correctValue}
        </div>
      )}
    </div>
  );
};

export default GridCell
