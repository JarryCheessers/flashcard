export type QuizType = "multiple-choice" | "fill-in-the-blank";

export type FlashcardCategory = "animals" | "food" | "verbs";

export interface Flashcard {
  id: string;
  category: FlashcardCategory;
  spanish: string;
  english: string;
  quiz: {
    type: QuizType;
    options?: string[];
  };
}

export const flashcards: Flashcard[] = [
  {
    id: "animals-cat",
    category: "animals",
    spanish: "el gato",
    english: "the cat",
    quiz: {
      type: "multiple-choice",
      options: ["the dog", "the house", "the cat", "the bird"],
    },
  },
  {
    id: "animals-dog",
    category: "animals",
    spanish: "el perro",
    english: "the dog",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the dog", "the bird", "the horse"],
    },
  },
  {
    id: "food-bread",
    category: "food",
    spanish: "el pan",
    english: "the bread",
    quiz: {
      type: "fill-in-the-blank",
    },
  },
  {
    id: "food-apple",
    category: "food",
    spanish: "la manzana",
    english: "the apple",
    quiz: {
      type: "multiple-choice",
      options: ["the orange", "the apple", "the banana", "the bread"],
    },
  },
  {
    id: "verbs-eat",
    category: "verbs",
    spanish: "comer",
    english: "to eat",
    quiz: {
      type: "fill-in-the-blank",
    },
  },
  {
    id: "verbs-drink",
    category: "verbs",
    spanish: "beber",
    english: "to drink",
    quiz: {
      type: "multiple-choice",
      options: ["to sleep", "to read", "to drink", "to eat"],
    },
  },
];

