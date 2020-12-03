import './App.css';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';


function App() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Main></Main>
          </div>
        </BrowserRouter>
      </div>
    );
}

export default App;