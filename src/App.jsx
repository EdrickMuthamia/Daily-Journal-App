import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import JournalList from './components/JournalList';
import AddJournal from './components/AddJournal';
import EditEntry from './components/EditEntry';
import NotFound from './page/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entries" element={<JournalList />} />
          <Route path="/add" element={<AddJournal />} />
          <Route path="/edit/:id" element={<EditEntry />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
