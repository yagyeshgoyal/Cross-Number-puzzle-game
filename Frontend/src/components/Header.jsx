import React from 'react'

const Header = ({ currentPuzzle, currentPuzzleIndex, totalPuzzles }) => (
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-purple-900">
      Cross Numbers Puzzle
    </h1>
    <p className="text-gray-600">
      {currentPuzzle.title} ({currentPuzzleIndex + 1}/{totalPuzzles})
    </p>
  </div>
);

export default Header;
