import React, { useRef, useEffect } from 'react';

export default function DigitInput({ length = 6, value, onChange }) {
  const inputs = useRef([]);

  useEffect(() => {
    if (inputs.current[0]) {
      inputs.current[0].focus();
    }
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault(); // Prevent default backspace behavior
      const newCode = value.split('');
      
      // If current input is empty and we're not at the first input, move to previous
      if (!newCode[index] && index > 0) {
        inputs.current[index - 1].focus();
        return;
      }
      
      // Clear current digit and move focus left
      newCode[index] = '';
      onChange(newCode.join(''));
      
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleChange = (e, index) => {
    const newValue = e.target.value;
    if (newValue.match(/^[0-9]$/)) {
      const newCode = value.split('');
      newCode[index] = newValue;
      onChange(newCode.join(''));
      
      if (index < length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, length);
    if (pastedData.match(/^[0-9]+$/)) {
      onChange(pastedData.padEnd(length, ''));
      if (inputs.current[pastedData.length - 1]) {
        inputs.current[pastedData.length - 1].focus();
      }
    }
  };

  return (
    <div className="flex gap-2 justify-center" dir="ltr">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={(el) => (inputs.current[i] = el)}
          value={value[i] || ''}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-xl font-semibold border-2 rounded-lg border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
        />
      ))}
    </div>
  );
}