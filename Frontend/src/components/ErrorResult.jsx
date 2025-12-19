import React from 'react'
import { ArrowRight } from "lucide-react";
import puzzlesData from "../data/puzzlesData";

const ErrorResult = ({ wrongRules, currentPuzzleIndex, totalPuzzles, onNextPuzzle }) =>{ 
    const currentPuzzle = puzzlesData[currentPuzzleIndex];
    return (
  <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
    <div className="p-6 bg-red-100 border-2 border-red-500 rounded-lg">
      <div className="text-center mb-6">
        <div className="text-6xl mb-3">❌</div>
        <h3 className="text-3xl font-bold text-red-800 mb-2">Not Correct Yet</h3>
        <p className="text-lg text-red-700 mb-4">Some rules are not satisfied. Check the grid above for hints!</p>
      </div>

      <div className="space-y-6">
        {wrongRules.map((wrong, idx) => (
          <div key={wrong.id} className="bg-white p-5 rounded-lg border-2 border-red-300">
            <div className="mb-4">
              <span className="inline-block bg-red-200 text-red-800 font-bold px-3 py-1 rounded-full text-sm mb-2">
                Rule {idx + 1} ❌
              </span>
              <p className="text-gray-800 font-semibold">{wrong.description}</p>
              
            </div>

            <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-300">
              <p className="text-sm text-red-700 font-semibold mb-2">❌ Your Answer:</p>
              {wrong.result.current ? (
                <div className="space-y-1">
                  <p className="text-lg font-bold text-red-600">{wrong.result.current}</p>
                  {wrong.result.sum !== undefined && (
                    <p className="text-sm text-red-600">Sum: {wrong.result.sum}</p>
                  )}
                  {wrong.result.diff !== undefined && (
                    <p className="text-sm text-red-600">Difference: {wrong.result.diff}</p>
                  )}
                </div>
              ) : (
                <p className="text-red-600">Incomplete or missing digits</p>
              )}
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-400">
              <p className="text-sm font-bold text-green-800 mb-2">✓ Correct Answer:</p>
              <p className="text-lg font-bold text-green-700">{wrong.result.expected}</p>
              <p className="text-xs text-green-600 mt-2">💡 Make sure your numbers follow this rule exactly {wrong.expected } </p>
            </div>
          </div>
        ))}
      </div>

      {currentPuzzleIndex < totalPuzzles - 1 && (
        <div className="mt-6 text-center">
          <button
            onClick={onNextPuzzle}
            className="px-8 py-3 bg-purple-600 text-white text-lg font-bold rounded-lg hover:bg-purple-700 flex items-center justify-center gap-3 mx-auto transition-colors shadow-lg"
          >
            Skip to Next Puzzle <ArrowRight size={24} />
          </button>
        </div>
      )}
    </div>
  </div>
);}

export default ErrorResult
