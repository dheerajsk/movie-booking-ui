import logo from './logo.svg';
import './App.css';
import { Navbar } from './features/shared/NavBar/Navbar';
import { Signup } from './features/users/Signup/SignUp';
import { Signin } from './features/users/SIgnIn/SignIn';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Signup /> */}
      <Signin />
    </div>
  );
}

export default App;
