import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition
                  classNames="fade"
                  timeout={500}
                >
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/registration"
            element={<Registration />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
