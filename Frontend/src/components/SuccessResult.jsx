import React from 'react'

const SuccessResult = ({ currentPuzzleIndex, totalPuzzles, onNextPuzzle, onRestart }) => (
  <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
    <div className="p-6 bg-green-100 border-2 border-green-500 rounded-lg text-center">
      <div className="text-6xl mb-3">🎉</div>
      <h3 className="text-3xl font-bold text-green-800 mb-2">Perfect!</h3>
      <p className="text-xl text-green-700 mb-6">All rules are satisfied! Puzzle solved correctly!</p>
      
      {currentPuzzleIndex < totalPuzzles - 1 ? (
        <button
          onClick={onNextPuzzle}
          className="px-8 py-3 bg-purple-600 text-white text-lg font-bold rounded-lg hover:bg-purple-700 flex items-center justify-center gap-3 mx-auto transition-colors shadow-lg"
        >
          Next Puzzle <ArrowRight size={24} />
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-green-800">🏆 Congratulations! You've completed all puzzles!</p>
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 flex items-center justify-center gap-3 transition-colors shadow-lg"
          >
            <RotateCcw size={24} /> Restart from Puzzle 1
          </button>
        </div>
      )}
    </div>
  </div>
);

export default SuccessResult
