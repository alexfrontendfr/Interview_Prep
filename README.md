# Flashcard Quiz App

This project is a dynamic flashcard quiz application built with **React**, **Tailwind CSS**, and **Framer Motion** for animations. The application features a set of technical interview questions, answers, and explanations to help users prepare for interviews.

## **Features**

- Dynamic background changes with each question
- Smooth animations for correct and incorrect answers using **Framer Motion**
- Detailed explanations for each question, displayed after selecting an answer
- User-friendly interface with mobile responsiveness
- Score tracking with an option to reset the quiz and start over

## **Technologies Used**

- **React**: Frontend JavaScript framework
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: For smooth animations
- **JSON**: Used for storing the quiz questions, options, and explanations

## **Installation and Setup Instructions**

### **Prerequisites**

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Installed with Node.js
- **Git**: [Download and install Git](https://git-scm.com/)

### **1. Clone the repository**

```bash
git clone https://github.com/alexfrontendfr/Interview_Prep.git
cd flashcard-app
```

2. Install dependencies
   Make sure you have the necessary dependencies installed. Run the following command to install them:

npm install

3. Start the development server
   To run the application in development mode:
   npm start

This will run the app locally on http://localhost:3000. The page will reload when you make changes to the code.

4. Build for production
   To build the project for production:
   npm run build
   The build files will be created in the build/ directory, which is ready for deployment.

5. Deploy to GitHub Pages
   You can deploy this app to GitHub Pages by following these steps:

Install the gh-pages package (if not already installed):
npm install gh-pages --save-dev

Add the following scripts to your package.json:
"homepage": "https://<your-github-username>.github.io/<repository-name>",
"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

Deploy the app to GitHub Pages:
npm run deploy
