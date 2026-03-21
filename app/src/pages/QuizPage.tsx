import { useSearchParams } from "react-router-dom";
import {
  categoryLabels,
  getCardsByCategory,
  isFlashcardCategory,
} from "../data/flashcards";

export function QuizPage() {
  const [params] = useSearchParams();
  const rawCategory = params.get("category");
  const categoryParam = isFlashcardCategory(rawCategory) ? rawCategory : null;

  const count = categoryParam ? getCardsByCategory(categoryParam).length : null;

  return (
    <section>
      <h2>Quiz Mode</h2>
      {categoryParam ? (
        <p className="muted">
          Category: <strong>{categoryLabels[categoryParam]}</strong>
          {count !== null ? ` (${count} cards)` : null}
        </p>
      ) : (
        <p className="muted">No category selected yet.</p>
      )}
      <p>
        This page will contain multiple-choice and fill-in-the-blank quizzes
        built from the flashcard data.
      </p>
    </section>
  );
}
