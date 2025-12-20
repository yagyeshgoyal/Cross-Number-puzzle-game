
# 🧩 Cross Number Puzzle Game

A fun and interactive **Cross Numbers Puzzle Game** built with **React**.  
Players solve number-based crossword-style puzzles by following logical rules.

---

## 🚀 Features

- 🧠 Multiple logic-based puzzles
- 🔢 Drag & Drop numbers into the grid
- ⌨️ Keyboard input support
- ✅ Rule-based validation system
- ❌ Detailed error feedback with correct answers
- 🎉 Success screen on correct completion
- 🔁 Restart & Next Puzzle navigation

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **lucide-react icons**

---

## 📂 Project Structure

```
src/
├── components/
│   ├── AvailableNumbers.jsx
│   ├── PuzzleGrid.jsx
│   ├── ErrorResult.jsx
│   ├── SuccessResult.jsx
│   └── ...
├── data/
│   └── puzzlesData.js
├── App.jsx
└── main.jsx
```

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start development server
```bash
npm run dev
```

> ⚠️ Make sure `package.json` exists in the root directory.

---

## 🧩 Game Rules Example

### Rule 1
**Make the largest 4-digit number where the sum of digits is 20**  
✔ Correct Answer: `9911`

### Rule 2
**Make the smallest 6-digit number where the difference between largest and smallest digit is 4**  
✔ Correct Answer: `100040`

### Rule 3
**Tens place of 6-digit number should be 3 more than ones place of 4-digit number**  
✔ Correct Answer: `100040`

---

## 🧠 Learning Outcomes

- React state management
- Component-based architecture
- Rule validation logic
- Defensive UI rendering
- Clean data-driven design

---

## 📌 Author

**Yagyesh**  
Frontend / Full Stack Developer  


---

## ⭐ Future Improvements

- Add more puzzles
- Timer-based challenges
- Mobile responsiveness
- Score system

---

Happy puzzling! 🎉
