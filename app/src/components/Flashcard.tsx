export interface FlashcardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onToggleFlip: () => void;
}

export function Flashcard({
  front,
  back,
  isFlipped,
  onToggleFlip,
}: FlashcardProps) {
  const text = isFlipped ? back : front;

  return (
    <button
      type="button"
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={onToggleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-label">
          {isFlipped ? "English" : "Spanish"}
        </div>
        <div className="flashcard-text">{text}</div>
        <div className="flashcard-hint">Click to flip</div>
      </div>
    </button>
  );
}
