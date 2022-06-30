import Welcome from './pages/Welcome';
import Sidebar from './components/Sidebar';

function App() {
   return (
      <div className="h-screen w-screen flex">
         <Sidebar />
         <div className="flex flex-1 overflow-scroll">
            <Welcome />
         </div>
      </div>
   )
}

export default App
