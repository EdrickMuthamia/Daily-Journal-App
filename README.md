# Daily Journal App

A React-based journal application where users can write, edit, and manage their daily entries.

## Features I Built
- **Add Entries**: Create new journal entries with title, content, date, and mood
- **View All Entries**: Display all journal entries in a clean list format
- **Edit Entries**: Update existing entries with new information
- **Delete Entries**: Remove entries with confirmation dialog
- **Navigation**: Easy navigation between different pages
- **Responsive Design**: Works on different screen sizes

## Technical Implementation

### Frontend (React)
- **Components**: Built 6 reusable React components
- **Routing**: Implemented React Router for page navigation
- **State Management**: Used React hooks (useState, useEffect)
- **Forms**: Created controlled forms for data input
- **API Integration**: Connected frontend to backend with fetch requests

### Backend (Firebase)
- **Database**: Firebase Firestore cloud database
- **Real-time**: Cloud-based NoSQL database
- **CRUD Operations**: Create, Read, Update, Delete with Firebase SDK

### Components I Created
1. `Navbar.jsx` - Navigation menu
2. `Home.jsx` - Welcome page
3. `JournalList.jsx` - Display all entries
4. `AddJournal.jsx` - Form to add new entries
5. `EditEntry.jsx` - Form to edit existing entries
6. `NotFound.jsx` - 404 error page

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Setup Firebase (see FIREBASE_SETUP.md for details):
   - Create Firebase project
   - Setup Firestore database
   - Update firebase.js with your config

3. Start the React app:
   ```bash
   npm run dev
   ```

4. Open browser: `http://localhost:5173`

# license  
MIT