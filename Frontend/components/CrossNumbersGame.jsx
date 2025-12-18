import React from 'react'

const CrossNumbersGame = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [grid, setGrid] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongRules, setWrongRules] = useState([]);

  const currentPuzzle = puzzlesData[currentPuzzleIndex];

  // Initialize grid
  useEffect(() => {
    const newGrid = Array(currentPuzzle.size).fill(null).map(() => 
      Array(currentPuzzle.size).fill('')
    );
    
    currentPuzzle.blacks.forEach(([r, c]) => {
      newGrid[r][c] = 'black';
    });
    
    setGrid(newGrid);
    setSelectedCell(null);
    setShowResult(false);
    setIsCorrect(false);
    setWrongRules([]);
  }, [currentPuzzleIndex]);

  const handleCellClick = (row, col) => {
    if (grid[row][col] === 'black' || showResult) return;
    setSelectedCell({ row, col });
  };

  const handleInput = (value) => {
    if (!selectedCell || showResult) return;
    if (!/^[0-9]$/.test(value) && value !== '') return;
    
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

  const showSolution = () => {
    setGrid(currentPuzzle.solution.map(row => [...row]));
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">Cross Numbers Puzzle</h1>
          <p className="text-gray-600">Follow the rules to fill the grid correctly</p>
          <div className="mt-4">
            <span className="inline-block bg-purple-200 text-purple-800 px-4 py-2 rounded-full font-bold">
              {currentPuzzle.title} ({currentPuzzleIndex + 1}/{puzzlesData.length})
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <div className="flex gap-4 mb-6 flex-wrap justify-end">
            <button
              onClick={showSolution}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2 font-semibold"
            >
              <HelpCircle size={18} /> Show Solution
            </button>
          </div>

          <RulesDisplay rules={currentPuzzle.rules} />
          
          <PuzzleGrid
            puzzle={currentPuzzle}
            grid={grid}
            selectedCell={selectedCell}
            showResult={showResult}
            onCellClick={handleCellClick}
          />
        </div>

        {showResult && (
          <ResultDisplay
            isCorrect={isCorrect}
            wrongRules={wrongRules}
            onNextPuzzle={goToNextPuzzle}
            isLastPuzzle={currentPuzzleIndex === puzzlesData.length - 1}
            showNextButton={true}
          />
        )}

        {!showResult && (
          <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
            <button
              onClick={checkSolution}
              className="w-full px-6 py-4 bg-green-500 text-white text-xl font-bold rounded-lg hover:bg-green-600 flex items-center justify-center gap-3 transition-colors shadow-lg"
            >
              <Check size={28} /> Submit Answer
            </button>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-lg mb-3">📖 How to Play:</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>1.</strong> Read all the rules carefully above the grid</p>
            <p><strong>2.</strong> Click on any white (dashed border) cell to select it</p>
            <p><strong>3.</strong> Type a number (0-9) to fill the cell</p>
            <p><strong>4.</strong> Fill all cells to satisfy ALL the rules</p>
            <p><strong>5.</strong> Click "Submit Answer" to check if you're correct</p>
            <p className="text-sm text-gray-600 mt-3">💡 The labels show which cells form Number 1 and Number 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossNumbersGame;