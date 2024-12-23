import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChapterGrid } from "./components/ChapterGrid";
import { QuestionSelectionCardGrid } from "./components/QuestionSelectionCardGrid";
import Button from "./components/Button";
import QuizContent from "./quiz/QuizContent";
import "./App.css";
import { FormField } from "./components/FormField";
import { ChildCard } from "./components/ChildCard";
import { AddChildCard } from "./components/AddChildCard";
import { AddChildModal } from "./components/AddChildModal";
import { DeleteChildModal } from "./components/DeleteChildModal";
import {QuizCard} from "./components/quizcard/QuizCard"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ConfirmCode from './pages/ConfirmCode';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  const Quiz = {
    id: 1,
    title: " الفصل الأول: المقدمة",
    totalQuestions: 10,
    answeredQuestions: 5,
    imageUrl:
      "https://images8.alphacoders.com/135/1352217.png",
    year: "2021",
    className : "الاولى ابتدائي",
  };
  const Quiz2 = {
    id: 1,
    title: " الفصل الأول: المقدمة",
    totalQuestions: 10,
    answeredQuestions: 10,
    imageUrl:
      "https://images8.alphacoders.com/135/1352217.png",
    year: "2021",
    className : "الاولى ابتدائي",
  };
  const Quiz3 = {
    id: 1,
    title: " الفصل الأول: المقدمة",
    totalQuestions: 10,
    answeredQuestions: 0,
    imageUrl:
      "https://images8.alphacoders.com/135/1352217.png",
    year: "2021",
    className : "الاولى ابتدائي",
  };


  const Child = {
    _id: 1,
    name: " علاء عبد الفتاح",
    profilePicture: "https://images8.alphacoders.com/135/1352217.png",
    studyLevel: "خامسة ابتدائي",
    score: 75,
  };

  const chapters = [
    {
      id: 1,
      title: "Chapter 1: Introduction",
      description:
        "Learn the basics of React and how to build a simple application.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.ELPxP8izsuTQs6F0LcdtaAHaEo?rs=1&pid=ImgDetMain",
      quizCount: 3,
      progress: 50,
    },
    {
      id: 2,
      title: "Chapter 2: Components",
      description:
        "Understand the concept of components and how to create reusable UI elements.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.ELPxP8izsuTQs6F0LcdtaAHaEo?rs=1&pid=ImgDetMain",
      quizCount: 5,
      progress: 25,
    },
    {
      id: 3,
      title: "Chapter 3: State & Props",
      description:
        "Learn how to manage state and pass data between components using props.",
      imageUrl:
        "https://th.bing.com/th/id/OIP.ELPxP8izsuTQs6F0LcdtaAHaEo?rs=1&pid=ImgDetMain",
      quizCount: 2,
      progress: 75,
    },
  ];

  

  return (
    <Router>
      <Routes>
      <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/quiz" element={<QuizContent />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirm" element={<ConfirmCode />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/"
          element={
            <div className="App flex flex-col items-center justify-center min-h-screen bg-white-200">
              <div className="flex flex-col justify-center items-center text-white space-y-5">
                <div className="w-full max-w-4xl">
                  <ChapterGrid chapters={chapters} />
                </div>
                <div className="w-full max-w-4xl">
                  <QuestionSelectionCardGrid />
                </div>
                <div className="w-full max-w-4xl">
                  <Button children={"Generate Random"}  onclick={() => {}} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <ChildCard
                    key={Child._id}
                    Child={Child}
                    onDelete={() => {}}
                    onClick={() => {}}
                  />
                  <ChildCard
                    key={Child._id}
                    Child={Child}
                    onDelete={() => {}}
                    onClick={() => {}}
                  />
                  <QuizCard {...Quiz} />
                  <QuizCard {...Quiz2} />
                  <QuizCard {...Quiz3} />

                  <AddChildCard onclick={() => {}} />
                </div>
                <div className="w-80">
                  <div className="w-full max-w-4xl">
                    <FormField
                      label="Name"
                      required={true}
                      children={
                        <input
                          type="text"
                          className="w-full bg-black p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
                        />
                      }
                    />
                  </div>
                </div>
                
              </div>
              <AddChildModal isOpen={false} onClose={true} onAdd={()=>{}} />
              <DeleteChildModal
                isOpen={true}
                onClose={false}
                onDelete={false}
                studentToDelete={Child}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
