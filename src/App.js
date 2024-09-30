// src/App.js
import React, { useState, useEffect } from "react";
import Flashcard from "./components/Flashcard";
import questions from "./flashcard_questions_final.json";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
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
          <AnimatePresence exitBeforeEnter>
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
