import React from 'react'

const ActionButtons = ({ onClearAll, onShowSolution }) => (
  <div className="flex gap-4 mb-6 flex-wrap justify-between">
    <button
      onClick={onClearAll}
      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2 font-semibold"
    >
      Clear All
    </button>
    <button
      onClick={onShowSolution}
      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 flex items-center gap-2 font-semibold"
    >
      <HelpCircle size={18} /> Show Solution
    </button>
  </div>
);

export default ActionButtons;
