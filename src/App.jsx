import { Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Note from './pages/Note';
import Sidebar from './components/Sidebar';

function App() {
   return (
      <div className="h-screen w-screen flex">
         <Sidebar />
         <div className="flex flex-1 overflow-scroll">
            <Routes>
               <Route path="/" element={<Welcome />} />
               <Route path="/note" element={<Note />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
