# 💸 Expense Tracker (React App)

A simple and user-friendly Expense Tracker built with **React**. This app allows users to **add**, **update**, and **delete** expenses with details like amount, purpose, and date. The project uses **React Hooks**, **React Hook Form**, and **inline CSS styling** for a clean, interactive experience.

---

## 🚀 Features

- ✅ Add new expenses with details and amount
- ✏️ Edit existing expenses
- ❌ Delete expenses
- 📅 Auto-generates the current date on entry and update
- 🧠 Managed using `useState` and `useEffect`
- 🎯 Form handling via `react-hook-form`
- 🧼 Fully styled with inline CSS (no external CSS files)

---

## 🛠️ Technologies Used

- **React** (Functional Components & Hooks)
- **React Hook Form** (for form management)
- **Font Awesome** (for icons)
- **JavaScript ES6**
- **Inline CSS**

---

## 📂 Project Structure

/src
┣ 📄 Component.jsx # Main component with expense state & handlers
┣ 📄 Inputs.jsx # Form to add a new expense
┣ 📄 UpdateExpense.jsx # Form to edit an existing expense
┣ 📄 index.js / App.js # Root render files


---

## 🧠 How It Works

### Add Expense
- Fill in the form for **details** and **amount**.
- On submit, a new expense is created with an auto-generated ID and today's date.

### Update Expense
- Click the ✏️ icon next to an expense to edit it.
- Submit the updated details and it replaces the previous entry.

### Delete Expense
- Click the **Delete** button to remove any entry from the list.

---

## 🖥️ Screenshots

| Add Form | Expense Cards | Update Form |
|----------|----------------|-------------|
| ![Add Form](https://via.placeholder.com/200x100?text=Add+Form) | ![Cards](https://via.placeholder.com/200x100?text=Cards) | ![Update Form](https://via.placeholder.com/200x100?text=Update+Form) |

---

## ⚙️ Installation & Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/expense-tracker-react.git

# 2. Navigate to the project directory
cd expense-tracker-react

# 3. Install dependencies
npm install

# 4. Start the app
npm start

App runs locally on http://localhost:3000

📌 Future Improvements
Add persistent storage (LocalStorage / Firebase / Backend)

Filter expenses by date or category

Add user authentication

Add charts for expense analysis

🙌 Acknowledgements
React

React Hook Form

Font Awesome

📃 License
This project is open-source and free to use under the MIT License.

👨‍💻 Author
Arnav Jadhav
Bachelor of Science in Information Technology
GitHub • LinkedIn

