import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/main/Main';
import { getMeAdmin } from './api/FetchAdmin';


function App() {
  
  const [isAdmin, setIsAdmin] = useState([]);
    

    useEffect(() => {
        getMeAdmin(setIsAdmin)
    }, []);

    const myPassword = isAdmin.map((item) => item.password).join('');

    console.log(myPassword)

  return (
    <div className="App">
      <Main myPassword = { myPassword } />
    </div>
  );
}

export default App;
