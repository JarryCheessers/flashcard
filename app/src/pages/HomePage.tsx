import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section>
      <h2>Welcome to Spanish Flashcards</h2>
      <p>Practice Spanish vocabulary with study, quiz, and stats views.</p>

      <div className="actions">
        <Link className="primary primary-green" to="/select/study">
          Study Mode
        </Link>
        <Link className="primary primary-blue" to="/select/quiz">
          Quiz Mode
        </Link>
        <Link className="primary" to="/stats">
          Stats
        </Link>
      </div>
    </section>
  );
}

