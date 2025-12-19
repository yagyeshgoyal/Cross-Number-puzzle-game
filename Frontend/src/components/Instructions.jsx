import React from 'react'

const Instructions = () => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="font-bold text-lg mb-3">📖 How to Play:</h3>
    <div className="space-y-2 text-gray-700">
      <p><strong>Method 1 - Drag & Drop:</strong> Drag numbers from above and drop them into white cells</p>
      <p><strong>Method 2 - Click & Type:</strong> Click any white cell and press a number key (0-9)</p>
      <p><strong>Clear cells:</strong> Click the × button on filled cells or press Backspace/Delete</p>
      <p><strong>Rules:</strong> Read all rules carefully - ALL must be satisfied</p>
      <p><strong>Submit:</strong> Click "Submit Answer" to check if you're correct</p>
      <p className="text-sm text-gray-600 mt-3">💡 The labels show which cells form each number</p>
    </div>
  </div>
);

export default Instructions
