import React from 'react'

const SubmitButton = ({ onSubmit }) => (
  <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
    <button
      onClick={onSubmit}
      className="w-full px-6 py-4 bg-green-500 text-white text-xl font-bold rounded-lg hover:bg-green-600 flex items-center justify-center gap-3 transition-colors shadow-lg"
    >
       Submit Answer
    </button>
  </div>
);

export default SubmitButton
