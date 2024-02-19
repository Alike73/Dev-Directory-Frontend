import { useEffect } from 'react';
import './App.css';
import Main from './pages/main/Main';
import { getMeAdmin } from './api/FetchAdmin';
import { setIsAdmin } from './redux/AdminSlice';



function App() {

  useEffect(() => {
    getMeAdmin(setIsAdmin)
  }, []);

  

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
