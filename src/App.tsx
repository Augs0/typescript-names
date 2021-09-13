import './App.css';
import React from 'react';

import Search from './components/Search';

function App() {
  const [usersName, setUsersName] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Popular names in the UK - 90s edition</h1>
        <p>Find out if your name is one of the top 10 from 1999!</p>
      </header>
      <main id='main'>
        <Search
          setMessage={setMessage}
          usersName={usersName}
          setUsersName={setUsersName}
        />
        <p className='msg'> {message}</p>
      </main>
      <footer className='footer'>
        Data from <a href='/www.ons.gov.uk'>ONS</a> 1999 datasets
      </footer>
    </div>
  );
}

export default App;
