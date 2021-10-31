import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '../containers/HomePage';
import { Layout } from '../containers/Layout';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} />
            {/* <Route path="/:repositroryId" element={<ActionPage />} /> */}
          </Switch>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
