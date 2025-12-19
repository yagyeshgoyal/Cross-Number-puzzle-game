import React from 'react'

const RulesDisplay = ({ rules }) => {
  return (
    <div className="mb-6 bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
      <h3 className="font-bold text-lg text-blue-900 mb-3">📋 Rules to Follow:</h3>
      <div className="space-y-3">
        {rules.map((rule, idx) => (
          <div key={rule.id} className="flex gap-3">
            <span className="font-bold text-blue-700 text-lg">{idx + 1}.</span>
            <p className="text-gray-800">{rule.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RulesDisplay
