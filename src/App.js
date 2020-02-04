import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPolling from 'react-polling';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ReactPolling
        url={'http://api-candidatos-qa.ad.vagastec.com.br/api/v1/healthcheck'}
        interval= {3000}
        retryCount={3}
        onSuccess={() => {
            console.log('handle success');
            return true
          }
        }
        onFailure={() => console.log('handle success')}
        method={'GET'}
        body={ { 'teste': true } }
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {
            return (
              <div> Hello I am polling</div>
            );
          } else {
            return (
              <div> Hello I stopped polling</div>
            );
          }
        }}
      />
    </div>
  );
}

export default App;
