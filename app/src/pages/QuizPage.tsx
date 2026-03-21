import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { flashcards, type FlashcardCategory } from "../data/flashcards";

const categoryLabels: Record<FlashcardCategory, string> = {
  animals: "Animals",
  food: "Food",
  verbs: "Verbs",
};

export function QuizPage() {
  const [params] = useSearchParams();
  const categoryParam = params.get("category") as FlashcardCategory | null;

  const count = useMemo(() => {
    if (!categoryParam) return null;
    return flashcards.filter((c) => c.category === categoryParam).length;
  }, [categoryParam]);

  return (
    <section>
      <h2>Quiz Mode</h2>
      {categoryParam ? (
        <p className="muted">
          Category: <strong>{categoryLabels[categoryParam] ?? categoryParam}</strong>
          {typeof count === "number" ? ` (${count} cards)` : null}
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

