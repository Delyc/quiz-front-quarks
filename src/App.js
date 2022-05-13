import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import QuizPageAdmin from "./components/admin/QuizPageAdmin";
import CreateQuiz from "./components/CreateQuiz";
import AllQuiz from "./pages/AllQuiz";
import Editqn from "./pages/Editqn";
import Login from "./pages/Login";
import OneQuizQn from "./pages/OneQuizQn";
import QuizPage from "./pages/QuizPage";
import Signup from "./pages/Signup";
import TakeQuiz from "./pages/TakeQuiz";
import TakeQuizAdmin from "./components/admin/TakeQuizAdmin";
import AddQuizAdmin from "./components/admin/AddQuizAdmin";
import QuestInquizAdm from "./components/admin/QuestInQuizAdm";
import AddQnAdmin from "./components/admin/AddQnAdmin";
import PickQn from "./components/admin/PickQn";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<CreateQuiz />} />
        <Route path="/getquiz" element={<AllQuiz />} />
        <Route path="/oneqn/:id" element={<OneQuizQn />} />
        <Route path="/editqn/:id" element={<Editqn />} />
        <Route path="/take-quiz" element={<QuizPage />} />
        <Route path="/take-quiz/:id" element={<TakeQuiz />} />
        {/* 
        admin */}
        <Route path="/admin-type" element={<QuizPageAdmin />} />
        <Route path="/take-quiz-admin/:id" element={<TakeQuizAdmin />} />
        <Route path="/add-quiz-admin" element={<AddQuizAdmin />} />
        <Route path="/qn-inquiz-admin/:id" element={<QuestInquizAdm />} />
        <Route path="/add-qn-admin" element={<AddQnAdmin />} />
        <Route path="/pick-qn/:id" element={<PickQn />} />
      
      </Routes>
    </Router>
  );
}

export default App;
