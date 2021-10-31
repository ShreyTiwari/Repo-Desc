import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout/Layout';
import './App.css';
import routes from '../routes';


const switchRoutes = (
  <Switch>
      {routes.map((prop, key) => {
          return (
              <Route
                  exact={prop.exact}
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
              />
          )
      })}
  </Switch>
)

function App() {
  return (
      <div className="App">
        <Layout>  
          {switchRoutes}
        </Layout>
      </div>
  );
}

export default App;
