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
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-gray-900 text-2xl font-bold mb-6">{question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`py-4 px-6 rounded-lg text-lg font-semibold transition duration-300 ease-in-out transform ${
              selectedAnswer === index
                ? isCorrect
                  ? "bg-green-500" // Modern hex green for correct
                  : "bg-red-500" // Modern hex red for wrong
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div className="mt-4">
          <motion.p
            className={`text-lg font-bold ${
              isCorrect ? "text-green-400" : "text-red-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isCorrect ? "Correct!" : "Incorrect!"}
          </motion.p>
          <motion.p
            className="text-gray-700 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {explanation}
          </motion.p>
          <motion.button
            onClick={handleNext}
            className="mt-4 bg-gray-800 text-white py-2 px-6 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            Next Question
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Flashcard;
