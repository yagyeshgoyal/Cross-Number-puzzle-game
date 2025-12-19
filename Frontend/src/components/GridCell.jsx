import React from 'react'

const GridCell = ({
  cell,
  isSelected,
  cellStatus,
  correctValue,
  onClick,
  onDrop,
  onDragOver
}) => {
  return (
    <div
      onClick={onClick}
      onDragOver={cell !== 'black' ? onDragOver : undefined}
      onDrop={cell !== 'black' ? onDrop : undefined}
      className={`w-12 h-12 border-2 flex items-center justify-center text-xl font-bold cursor-pointer relative
        ${cell === 'black' ? 'bg-gray-300' : 'bg-white hover:bg-indigo-50'}
        ${isSelected ? 'border-blue-500 ring-4 ring-blue-200' : ''}
        ${cellStatus === 'correct' ? 'bg-green-100 text-green-700' : ''}
        ${cellStatus === 'incorrect' ? 'bg-red-100 text-red-700' : ''}
      `}
    >
      {cell !== 'black' && cell}
      {cellStatus === 'incorrect' && (
        <div className="absolute -bottom-5 text-xs text-green-600">
          {correctValue}
        </div>
      )}
    </div>
  );
};

export default GridCell;

