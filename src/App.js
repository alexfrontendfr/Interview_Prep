// src/App.js
import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import questions from "./flashcard_questions_final.json";
import { motion, AnimatePresence } from "framer-motion";

const gradients = [
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
  "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
  "bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600",
  "bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [finished, setFinished] = useState(false);

  const handleNextQuestion = (isCorrect) => {
    setScore((prevScore) => ({
      correct: isCorrect ? prevScore.correct + 1 : prevScore.correct,
      incorrect: isCorrect ? prevScore.incorrect : prevScore.incorrect + 1,
    }));

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setScore({ correct: 0, incorrect: 0 });
    setFinished(false);
  };

  const backgroundClass = gradients[currentQuestionIndex % gradients.length];

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundClass} text-white`}
    >
      <div className="container max-w-xl p-4">
        <h1 className="text-3xl text-center mb-6">Flashcard Quiz</h1>
        {finished ? (
          <div className="text-center">
            <h2 className="text-2xl mb-4">Quiz Finished!</h2>
            <p>
              Correct: {score.correct} / {questions.length}
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Reset Quiz
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flashcard
                questionData={questions[currentQuestionIndex]}
                onNextQuestion={handleNextQuestion}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default App;
