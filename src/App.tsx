import './App.css';
import {useState} from 'react';
import boysData from './data/boys-name.json';
import girlsData from './data/girls-names.json'

import Search from './components/Search';

function App() {
  const [usersName, setUsersName] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular names - 90s edition</h1>
        <p>Find out if your name is one of the top 10 from 1999!</p>
      </header>
      <main id="main">
        <Search setUsersName={setUsersName}/>
        {usersName}
      </main>
      <footer className="footer">
        Data from <a href="/www.ons.gov.uk">ONS</a> 1999 datasets
      </footer>
    </div>
  );
}

export default App;
