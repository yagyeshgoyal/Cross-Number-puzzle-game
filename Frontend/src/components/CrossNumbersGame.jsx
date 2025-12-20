import React, { useEffect, useState } from "react";
import { Check, HelpCircle } from "lucide-react";

import puzzlesData from "../data/puzzlesData";
import PuzzleGrid from "./PuzzleGrid";
import RulesDisplay from "./RulesDisplay";
import ResultDisplay from "./ResultDisplay";
import Header from "./Header";
import ActionButtons from "./ActionButtons";
import AvailableNumbers from "./AvailableNumbers";
import SubmitButton from "./SubmitButton";
import Instructions from "./Instructions";
import SuccessResult from "./SuccessResult";
import ErrorResult from "./ErrorResult";

const CrossNumbersGame = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [grid, setGrid] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongRules, setWrongRules] = useState([]);
  const [draggedNumber, setDraggedNumber] = useState(null);
  const [availableNumbers, setAvailableNumbers] = useState([]);

  const currentPuzzle = puzzlesData[currentPuzzleIndex];

  const getAvailableNumbers = () => {
    const numberCount = {};
    currentPuzzle.solution.forEach(row => {
      row.forEach(cell => {
        if (cell !== 'black' && cell !== null) {
          const num = cell.toString();
          numberCount[num] = (numberCount[num] || 0) + 1;
        }
      });
    });
    
    const numbers = [];
    Object.keys(numberCount).forEach(num => {
      for (let i = 0; i < numberCount[num]; i++) {
        numbers.push(num);
      }
    });
    // setAvailableNumbers([...currentPuzzle.numbers])
    return numbers.sort();
    // return currentPuzzle.numbers;
  };

  const getRemainingNumbers = () => {
    const solutionCount = {};
    currentPuzzle.solution.forEach(row => {
      row.forEach(cell => {
        if (cell !== 'black' && cell !== null) {
          const num = cell.toString();
          solutionCount[num] = (solutionCount[num] || 0) + 1;
        }
      });
    });

    console.log('Solution Count:', solutionCount);

    const usedCount = {};
    grid.forEach(row => {
      row.forEach(cell => {
        if (cell !== 'black' && cell !== null) {
          const num = cell.toString();
          usedCount[num] = (usedCount[num] || 0) + 1;
        }
      });
    });

    console.log('Used Count:', usedCount);

    const remaining = [];
    Object.keys(solutionCount).forEach(num => {
      const available = solutionCount[num] - (usedCount[num] || 0);
      for (let i = 0; i < available; i++) {
        remaining.push(num);
      }
    });
    console.log('Remaining Numbers:', remaining);
    return remaining.sort();
  };

  useEffect(() => {
    const newGrid = Array(currentPuzzle.size).fill(null).map(() => 
      Array(currentPuzzle.size).fill(null)
    );
    
    currentPuzzle.blacks.forEach(([r, c]) => {
      newGrid[r][c] = 'black';
    });
    
    setGrid(newGrid);
    setAvailableNumbers(getAvailableNumbers());
    setSelectedCell(null);
    setShowResult(false);
    setIsCorrect(false);
    setWrongRules([]);
  }, [currentPuzzleIndex]);

  useEffect(() => {
    if (grid.length > 0) {
      setAvailableNumbers(getRemainingNumbers());
    }
  }, [grid]);

  const handleDragStart = (e, number, index) => {
    setDraggedNumber({ value: number, index: index });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, row, col) => {
    e.preventDefault();
    
    if (draggedNumber === null || grid[row][col] === 'black' || showResult) return;

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = draggedNumber.value;
    setGrid(newGrid);
    setDraggedNumber(null);
  };

  const handleDragEnd = () => {
    setDraggedNumber(null);
  };

  const handleCellClick = (row, col) => {
    if (grid[row][col] === 'black' || showResult) return;
    setSelectedCell({ row, col });
  };

  const clearCell = (row, col) => {
    if (showResult) return;
    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = null;
    setGrid(newGrid);
  };

  const handleInput = (value) => {
    if (!selectedCell || showResult) return;
    if (!/^[0-9]$/.test(value) && value !== '') return;
    
    if (value !== '' && !availableNumbers.includes(value)) {
      return;
    }
    
    const newGrid = grid.map(row => [...row]);
    newGrid[selectedCell.row][selectedCell.col] = value;
    setGrid(newGrid);
  };

  const handleKeyDown = (e) => {
    if (!selectedCell || showResult) return;
    
    if (e.key >= '0' && e.key <= '9') {
      handleInput(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      handleInput('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, grid, showResult]);

  const getCellStatus = (row, col) => {
    if (!showResult || grid[row][col] === 'black') return null;
    
    const userValue = grid[row][col];
    const correctValue = currentPuzzle.solution[row][col];
    
    if (userValue === correctValue) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  };

  const checkSolution = () => {
    const wrong = [];
    let allCorrect = true;

    currentPuzzle.rules.forEach(rule => {
      const result = rule.check(grid);
      if (!result.valid) {
        allCorrect = false;
        wrong.push({
          ...rule,
          result
        });
      }
    });

    setWrongRules(wrong);
    setIsCorrect(allCorrect);
    setShowResult(true);
  };

  const goToNextPuzzle = () => {
    if (currentPuzzleIndex < puzzlesData.length - 1) {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1);
    }
  };

  const restartGame = () => {
    setCurrentPuzzleIndex(0);
  };

  const showSolution = () => {
    setGrid(currentPuzzle.solution.map(row => [...row]));
    setShowResult(false);
  };

  const clearAll = () => {
    const newGrid = Array(currentPuzzle.size).fill(null).map(() => 
      Array(currentPuzzle.size).fill(null)
    );
    currentPuzzle.blacks.forEach(([r, c]) => {
      newGrid[r][c] = 'black';
    });
    setGrid(newGrid);
    setShowResult(false);
    setAvailableNumbers(getAvailableNumbers());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <Header 
          currentPuzzle={currentPuzzle}
          currentPuzzleIndex={currentPuzzleIndex}
          totalPuzzles={puzzlesData.length}
        />

        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          

          <RulesDisplay rules={currentPuzzle.rules} />
          
          <PuzzleGrid 
            grid={grid}
            currentPuzzle={currentPuzzle}
            selectedCell={selectedCell}
            showResult={showResult}
            onCellClick={handleCellClick}
            onClearCell={clearCell}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            getCellStatus={getCellStatus}
          />
        </div>

        <AvailableNumbers 
          availableNumbers={availableNumbers}
          draggedNumber={draggedNumber}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />

        {showResult && isCorrect && (
          <SuccessResult 
            currentPuzzleIndex={currentPuzzleIndex}
            totalPuzzles={puzzlesData.length}
            onNextPuzzle={goToNextPuzzle}
            onRestart={restartGame}
          />
        )}

        {showResult && !isCorrect && (
          <ErrorResult 
            wrongRules={wrongRules}
            currentPuzzleIndex={currentPuzzleIndex}
            totalPuzzles={puzzlesData.length}
            onNextPuzzle={goToNextPuzzle}
          />
        )}

        {!showResult && (
          <SubmitButton onSubmit={checkSolution} />
        )}

        {/* <Instructions /> */}
      </div>
    </div>
  );
};

export default CrossNumbersGame;