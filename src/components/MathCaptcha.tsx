'use client';

import { useState } from 'react';

interface MathCaptchaProps {
  onValidate: (isValid: boolean) => void;
  labelColor?: string;
}

export default function MathCaptcha({ onValidate, labelColor = "text-gray-700 dark:text-white" }: MathCaptchaProps) {
  const [num1, setNum1] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [answer, setAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnswer(value);
    const correct = parseInt(value) === num1 + num2;
    setIsValid(correct);
    onValidate(correct);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="captcha" className={`block text-sm font-medium ${labelColor} mb-1`}>
        What is {num1} + {num2}? <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="captcha"
        value={answer}
        onChange={handleAnswerChange}
        required
        className="w-full px-4 py-3 text-black border bg-white border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the answer"
      />
      {!isValid && answer && (
        <p className="text-red-500 text-sm mt-1">Incorrect answer. Please try again.</p>
      )}
    </div>
  );
}