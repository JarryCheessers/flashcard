import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { flashcards, type FlashcardCategory } from "../data/flashcards";

type Mode = "study" | "quiz";

function isMode(value: string | undefined): value is Mode {
  return value === "study" || value === "quiz";
}

const categoryLabels: Record<FlashcardCategory, string> = {
  animals: "Animals",
  food: "Food",
  verbs: "Verbs",
};

export function CategorySelectionPage() {
  const params = useParams();
  const navigate = useNavigate();

  const mode = isMode(params.mode) ? params.mode : "study";

  const categories = useMemo(() => {
    const set = new Set<FlashcardCategory>();
    for (const card of flashcards) set.add(card.category);
    return Array.from(set).sort();
  }, []);

  const [selected, setSelected] = useState<FlashcardCategory | null>(null);

  function onContinue() {
    if (!selected) return;
    navigate(`/${mode}?category=${encodeURIComponent(selected)}`);
  }

  return (
    <section>
      <h2>Choose a category</h2>
      <p className="muted">
        Mode: <strong>{mode}</strong>
      </p>

      <div className="card-grid" role="list">
        {categories.map((category) => {
          const active = selected === category;
          return (
            <button
              key={category}
              type="button"
              role="listitem"
              className={`select-card ${active ? "active" : ""}`}
              onClick={() => setSelected(category)}
            >
              <div className="select-card-title">{categoryLabels[category]}</div>
              <div className="select-card-subtitle">{category}</div>
            </button>
          );
        })}
      </div>

      <div className="actions">
        <button
          type="button"
          className={`primary ${mode === "study" ? "primary-green" : "primary-blue"}`}
          disabled={!selected}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </section>
  );
}

