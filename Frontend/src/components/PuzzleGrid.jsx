import GridCell from "./GridCell";

const PuzzleGrid = ({
  grid,
  currentPuzzle,
  selectedCell,
  showResult,
  onCellClick,
  onClearCell,
  onDrop,
  onDragOver,
  getCellStatus
}) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-block p-6 bg-gray-50 rounded-lg">
        {grid.map((row, r) => (
          <div key={r} className="flex">
            {row.map((cell, c) => (
              <GridCell
                key={c}
                cell={cell}
                isSelected={
                  selectedCell?.row === r &&
                  selectedCell?.col === c &&
                  !showResult
                }
                cellStatus={getCellStatus(r, c)}
                correctValue={currentPuzzle.solution[r][c]}
                onClick={() => onCellClick(r, c)}
                onDrop={(e) => onDrop(e, r, c)}
                onDragOver={onDragOver}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGrid;
