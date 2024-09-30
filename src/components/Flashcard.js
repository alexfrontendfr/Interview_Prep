// src/components/Flashcard.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Flashcard = ({ questionData, onNextQuestion }) => {
  const { question, options, answer, explanation } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === answer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    onNextQuestion(isCorrect);
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-white text-2xl font-bold mb-6">{question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`py-4 px-6 rounded-lg text-white text-lg font-semibold transition duration-300 ease-in-out transform ${
              selectedAnswer === index
                ? isCorrect
                  ? "bg-green-500" // Modern hex green for correct
                  : "bg-red-500" // Modern hex red for wrong
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div className="mt-4">
          <p
            className={`text-lg font-bold ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
          >
            {isCorrect ? "Correct!" : "Incorrect!"}
          </p>
          {isCorrect && <p className="text-white mt-2">{explanation}</p>}
          <button
            onClick={handleNext}
            className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg"
          >
            Next Question
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Flashcard;
