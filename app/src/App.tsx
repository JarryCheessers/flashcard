import { NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CategorySelectionPage } from "./pages/CategorySelectionPage";
import { StudyPage } from "./pages/StudyPage";
import { QuizPage } from "./pages/QuizPage";
import { StatsPage } from "./pages/StatsPage";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Spanish Flashcards</h1>
        <nav className="app-nav">
          <NavLink to="/" end className="nav-btn nav-btn-home">
            Home
          </NavLink>
          <NavLink to="/select/study" className="nav-btn nav-btn-study">
            Study
          </NavLink>
          <NavLink to="/select/quiz" className="nav-btn nav-btn-quiz">
            Quiz
          </NavLink>
          <NavLink to="/stats" className="nav-btn nav-btn-stats">
            Stats
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select/:mode" element={<CategorySelectionPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
    </div>
  );
}

