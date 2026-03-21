import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  categoryLabels,
  getCardsByCategory,
  isFlashcardCategory,
} from "../data/flashcards";
import { Flashcard } from "../components/Flashcard";

export function StudyPage() {
  const [params] = useSearchParams();
  const rawCategory = params.get("category");
  const categoryParam = isFlashcardCategory(rawCategory) ? rawCategory : null;

  const deck = useMemo(
    () => getCardsByCategory(categoryParam),
    [categoryParam],
  );

  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = deck[index] ?? null;
  const count = deck.length;

  function goNext() {
    setIsFlipped(false);
    setIndex((prev) => Math.min(prev + 1, deck.length));
  }

  return (
    <section>
      <h2>Study Mode</h2>
      {categoryParam ? (
        <p className="muted">
          Category: <strong>{categoryLabels[categoryParam]}</strong>
          {` (${count} cards)`}
        </p>
      ) : (
        <p className="muted">No category selected; showing all cards.</p>
      )}

      {count === 0 ? (
        <p>No cards found for this category.</p>
      ) : current ? (
        <>
          <p className="muted">
            Card {index + 1} / {count}
          </p>

          <Flashcard
            front={current.spanish}
            back={current.english}
            isFlipped={isFlipped}
            onToggleFlip={() => setIsFlipped((v) => !v)}
          />

          {isFlipped ? (
            <div className="actions">
              <button
                type="button"
                className="primary primary-green"
                onClick={goNext}
              >
                I got it right
              </button>
              <button
                type="button"
                className="primary primary-red"
                onClick={goNext}
              >
                I got it wrong
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <p>Nice work — you’ve reached the end of the deck.</p>
          <div className="actions">
            <button
              type="button"
              className="primary"
              onClick={() => {
                setIndex(0);
                setIsFlipped(false);
              }}
            >
              Restart
            </button>
          </div>
        </>
      )}
    </section>
  );
}
