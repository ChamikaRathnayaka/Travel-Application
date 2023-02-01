import './App.css';
import TopBar from './Components/TopBar/TopBar'; 
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {

  const user = true;
  return (
    <div className="App">

      <Router>

      <TopBar/>

      <switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/register">
              {/* {user ? <Home/> : <Register/>} */}
              <Register/>
            </Route>
            <Route path="/login">
              <Login/>
              {/* {user ? <Home/> : <Login/>} */}
            </Route>
            <Route path="/write">
              {user ? <Write/> : <Register/>}
            </Route>
            <Route path="/settings">
                {user ? <Settings/> : <Register/>}
            </Route>
            <Route path="/post/:postId">
              <Single/>
            </Route>
           
            
        </switch>
      </Router>
       
       
     
    </div>
  );
}

export default App;
