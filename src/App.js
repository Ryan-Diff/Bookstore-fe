import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          Diffen-Books
        </header>
        <Router>

          <div className="sidebar">
              <ul>
                  <li className='nav'><Link to='/'>Inventory</Link></li>
                  <li className='nav'><Link to='/create'>Admin</Link></li> 
              </ul>
          </div>
          <div>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <ListPage {...routerProps} />} 
              />
              <Route 
                  path="/create" 
                  exact
                  render={(routerProps) => <CreatePage {...routerProps} />} 
              />
              <Route 
                  path="/detail/:id" 
                  exact
                  render={(routerProps) => <DetailPage {...routerProps} />} 
              />
          </Switch>
          </div>
          
          </Router>
  
  </div>
);
}

}



export default App;
