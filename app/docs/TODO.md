Here’s a **clean, phased TODO checklist** (easy → hard), with **acceptance criteria for every item** so you can track progress clearly.

---

# ✅ Spanish Flashcards App — Implementation TODO

## 🟢 Phase 1: Project Setup & Basic Structure (Easiest)

### ☑ Initialize Project (Vite + React + TypeScript)

**Acceptance Criteria:**

* App runs locally without errors
* TypeScript is configured correctly
* Folder structure is clean (`components`, `pages`, `data`, etc.)

---

### ☑ Set Up Routing (Home, Study, Quiz, Stats)

**Acceptance Criteria:**

* User can navigate between pages
* URLs update correctly (e.g. `/study`, `/quiz`)
* No page reload required (SPA behavior)

---

### ☑ Create Static Flashcard Data

**Acceptance Criteria:**

* Data file includes at least 3 categories (Animals, Food, Verbs)
* Each card has `spanish`, `english`, and `quiz` fields
* Data is successfully imported and usable in components

---

## 🟢 Phase 2: Core UI Pages

### ☑ Build Home Page

**Acceptance Criteria:**

* Displays welcome message
* Buttons navigate to Study, Quiz, and Stats pages

---

### ☑ Build Category Selection Page

**Acceptance Criteria:**

* Displays all categories
* User can select a category
* Selected category is passed to next page

---

## 🟡 Phase 3: Study Mode (Core Feature)

### ☑ Create Flashcard Component

**Acceptance Criteria:**

* Displays Spanish word by default
* Clicking flips to English translation
* Flip state toggles correctly

---

### ☑ Add “Right” and “Wrong” Buttons

**Acceptance Criteria:**

* Buttons only appear after flip
* Clicking buttons moves to next card
* No UI glitches between transitions

---

### ☐ Track Incorrect Cards (In Memory)

**Acceptance Criteria:**

* Wrong answers are stored in state
* Stored list persists during session
* No duplicates in wrong list

---

### ☐ Implement Card Navigation Logic

**Acceptance Criteria:**

* Cards cycle one-by-one
* End-of-deck behavior handled (e.g. completion message)
* No crashes on last card

---

## 🟡 Phase 4: Redo Mode

### ☐ Create Redo Component

**Acceptance Criteria:**

* Only shows cards marked wrong
* UI behaves same as Study Mode

---

### ☐ Add Reset Wrong Cards Option

**Acceptance Criteria:**

* User can clear wrong list
* After reset, redo mode shows no cards
* State updates immediately

---

## 🟡 Phase 5: Quiz Mode (Intermediate)

### ☐ Implement Quiz Mode Selection (MCQ / Fill Blank)

**Acceptance Criteria:**

* User can choose quiz type before starting
* Selected type controls quiz behavior

---

### ☐ Build Multiple Choice Quiz

**Acceptance Criteria:**

* Displays 1 Spanish word + 4 options
* Only 1 correct answer
* User receives immediate feedback
* Next question loads properly

---

### ☐ Build Fill-in-the-Blank Quiz

**Acceptance Criteria:**

* User can type answer
* Case-insensitive matching works
* Correct/incorrect feedback is shown

---

### ☐ Track Quiz Score (Session Only)

**Acceptance Criteria:**

* Tracks correct vs incorrect answers
* Displays score at end
* Score resets when quiz restarts

---

## 🔵 Phase 6: Statistics (Advanced)

### ☐ Design Stats Data Model

**Acceptance Criteria:**

* Tracks:

  * Total cards studied
  * Correct vs incorrect
  * Per-category stats
* Data structure is consistent and scalable

---

### ☐ Track Study + Quiz Performance

**Acceptance Criteria:**

* Stats update after each interaction
* Works for both study and quiz modes
* No data loss during session

---

### ☐ Build Statistics Page UI

**Acceptance Criteria:**

* Displays:

  * Total studied
  * Accuracy %
  * Category breakdown
* Values reflect actual usage

---

### ☐ Add localStorage Persistence (Optional)

**Acceptance Criteria:**

* Stats persist after page refresh
* Data loads correctly on app start
* No crashes if localStorage is empty

---

## 🔵 Phase 7: UX Enhancements (Harder / Optional)

### ☐ Add Flip Animation

**Acceptance Criteria:**

* Smooth animation on card flip
* No performance issues
* Works across browsers

---

### ☐ Improve UI/Styling

**Acceptance Criteria:**

* Consistent layout and spacing
* Mobile responsive
* Buttons and interactions feel intuitive

---

### ☐ Add Progress Indicators

**Acceptance Criteria:**

* Shows current card index (e.g. 3/10)
* Updates correctly during session

---

## 🟣 Phase 8: Final Polish

### ☐ Error Handling & Edge Cases

**Acceptance Criteria:**

* Handles empty datasets gracefully
* No crashes on invalid state
* User-friendly messages displayed

---

### ☐ Code Refactoring & Cleanup

**Acceptance Criteria:**

* No unused code
* Components are reusable
* State logic is clean and maintainable

---

## 💡 Suggested Phase Summary

* **Phase 1–2:** Setup & navigation (foundation)
* **Phase 3–4:** Core learning experience (MVP ready here)
* **Phase 5:** Quiz system (adds real value)
* **Phase 6:** Stats (makes it “complete”)
* **Phase 7–8:** Polish (makes it “good product”)

---

If you want, I can next:

* Convert this into a **tracking Excel sheet (like your previous request)**
* Or break it into **GitHub issues / sprint plan (Agile-style)**
