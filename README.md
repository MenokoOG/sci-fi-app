
# Sci-Fi Themed CRUD Application

## Overview

Welcome to the Sci-Fi Themed CRUD Application! This app lets you manage characters in a sci-fi universe. You can create, read, update, and delete characters. The backend is built with FastAPI and MongoDB Atlas, while the frontend uses React, Vite, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.10
- Node.js and npm
- MongoDB Atlas account

## Setup

### Backend

1. **Install Python and Virtual Environment**:
   ```bash
   sudo apt update
   sudo apt install python3.10 python3.10-venv python3.10-dev
   ```

2. **Create Project Directory**:
   ```bash
   mkdir sci-fi-app
   cd sci-fi-app
   ```

3. **Setup Virtual Environment**:
   ```bash
   python3.10 -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

4. **Install Dependencies**:
   ```bash
   pip install fastapi uvicorn pymongo python-dotenv
   ```

5. **Create `.env` File**:
   ```env
   MONGODB_URI="your_mongodb_connection_string"
   ```

6. **Create Backend Files**:
   - Create a `backend` folder and a `main.py` file inside it.
   - Add routes for creating, reading, updating, and deleting characters.

7. **Run the Backend Server**:
   ```bash
   uvicorn main:app --reload
   ```

### Frontend

1. **Create React + Vite Project**:
   ```bash
   cd ..
   npm create vite@latest frontend -- --template react-ts
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install axios tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**:
   - Edit `tailwind.config.js` to set up dark theme colors.
   - Edit `src/index.css` to apply global styles.

4. **Create API Client**:
   - Create an `api` folder and a `client.ts` file to handle API requests.

5. **Create Components**:
   - Create `CharacterForm.tsx` for adding and editing characters.
   - Create `CharacterList.tsx` for displaying and deleting characters.

6. **Update App Component**:
   - Combine the form and list components in `App.tsx`.

7. **Run the Frontend Development Server**:
   ```bash
   npm run dev
   ```

## Testing the Application

You can use Postman to test the API endpoints:

1. **Create a Character (POST)**:
   - URL: `http://localhost:8000/characters/`
   - Body:
     ```json
     {
       "name": "Luke Skywalker",
       "species": "Human",
       "homeworld": "Tatooine"
     }
     ```

2. **Get All Characters (GET)**:
   - URL: `http://localhost:8000/characters/`

3. **Update a Character (PUT)**:
   - URL: `http://localhost:8000/characters/{character_id}`
   - Body:
     ```json
     {
       "name": "Anakin Skywalker",
       "species": "Human",
       "homeworld": "Tatooine"
     }
     ```

4. **Delete a Character (DELETE)**:
   - URL: `http://localhost:8000/characters/{character_id}`

## Conclusion

That's it! You've set up a sci-fi themed CRUD application with a modern, dark-themed interface. Enjoy managing your characters in this fun universe!
