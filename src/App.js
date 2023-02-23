import logo from './logo.svg';
import './App.css';
import { Navbar } from './features/shared/NavBar/Navbar';
import { Signup } from './features/users/Signup/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Signup />
    </div>
  );
}

export default App;
