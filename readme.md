# 📊 PulseVote

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to create, view, and vote on polls in real-time. It features a clean, responsive interface and a robust backend API.

## ✨ Features

* **Create Polls**: Easily create new polls with a question and multiple options.
* **Vote**: Cast your vote on any available poll.
* **Live Results**: View poll results instantly with dynamically updated bar charts.
* **View All Polls**: Browse a list of all created polls.
* **Responsive Design**: A seamless experience on both desktop and mobile devices.

---

## 💻 Tech Stack

This project is built with the MERN stack and utilizes modern tools for development.

* **Frontend:**
    * [React](https://reactjs.org/)
    * [Redux Toolkit](https://redux-toolkit.js.org/) for state management
    * [React Router](https://reactrouter.com/) for client-side routing
    * [Axios](https://axios-http.com/) for API requests
    * [Vite](https://vitejs.dev/) as a build tool

* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express.js](https://expressjs.com/) for the server framework
    * [MongoDB](https://www.mongodb.com/) as the database
    * [Mongoose](https://mongoosejs.com/) for object data modeling

---

## ⚙️ Getting Started

Follow these instructions to get the project up and running on your local machine.

### **Prerequisites**

* **Node.js** (v18.x or later recommended)
* **npm** or **yarn**
* **MongoDB**: You'll need a MongoDB Atlas account or a local instance of MongoDB running.

### **Installation & Setup**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/Krritin/PulseVote.git](https://github.com/Krritin/PulseVote.git)
    cd PulseVote
    ```

2.  **Setup the Backend:**
    * Navigate to the backend directory:
        ```sh
        cd backend
        ```
    * Install dependencies:
        ```sh
        npm install
        ```
    * Create a `.env` file in the `backend` root and add your MongoDB connection string:
        ```env
        # .env
        MONGO_URI=
        PORT=5000
        ```

3.  **Setup the Frontend:**
    * Navigate to the frontend directory from the root folder:
        ```sh
        cd frontend
        ```
    * Install dependencies:
        ```sh
        npm install
        ```
    *The frontend is pre-configured with a Vite proxy to communicate with the backend server.*

### **Running the Application**

You'll need to run both the backend and frontend servers simultaneously in separate terminals.

1.  **Start the Backend Server:**
    * In the `backend` directory:
        ```sh
        npm run dev
        ```
    * The server should now be running on `http://localhost:5000`.

2.  **Start the Frontend Development Server:**
    * In the `frontend` directory:
        ```sh
        npm run dev
        ```
    * The application should now be accessible at `http://localhost:5173`.

---

## 🌐 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint               | Description              | Request Body Example                      |
| :----- | :--------------------- | :----------------------- | :---------------------------------------- |
| `GET`  | `/api/polls`           | Fetches all polls        | `(none)`                                  |
| `POST` | `/api/polls`           | Creates a new poll       | `{ "question": "...", "options": [...] }` |
| `POST` | `/api/polls/:id/vote`  | Adds a vote to a poll    | `{ "optionIndex": 0 }`                    |