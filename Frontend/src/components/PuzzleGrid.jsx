import React from 'react'
import GridCell from "./GridCell";

const PuzzleGrid = ({ puzzle, grid, selectedCell, showResult, onCellClick }) => {
  const getCellStatus = (row, col) => {
    if (!showResult || grid[row][col] === 'black') return null;
    
    const userValue = grid[row][col];
    const correctValue = puzzle.solution[row][col];

    
    if (userValue === correctValue) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  };

  return (
    <div className="flex justify-center mb-6">
      <div className="inline-block bg-gray-50 p-6 pb-8 rounded-lg relative">
        {puzzle.labels.map((label, idx) => (
          <div
            key={idx}
            className="absolute text-xs font-bold text-gray-600 whitespace-nowrap"
            style={{
              top: `${label.row * 48 + 24}px`,
              left: label.col === 0 ? '-80px' : `${label.col * 48 + 24}px`,
              transform: label.col === 0 ? 'translateY(-50%)' : 'translateX(-50%) translateY(-30px)'
            }}
          >
            {label.text} ✏️
          </div>
        ))}
        
        {grid.map((row, rowIdx) => (
          <div key={rowIdx} className="flex">
            {row.map((cell, colIdx) => {
              const cellStatus = getCellStatus(rowIdx, colIdx);
              const correctValue = puzzle.solution[rowIdx][colIdx];
              const isSelected = selectedCell?.row === rowIdx && selectedCell?.col === colIdx && !showResult;
              
              return (
                <GridCell
                  key={colIdx}
                  cell={cell}
                  rowIdx={rowIdx}
                  colIdx={colIdx}
                  isSelected={isSelected}
                  cellStatus={cellStatus}
                  correctValue={correctValue}
                  onClick={() => onCellClick(rowIdx, colIdx)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGrid
