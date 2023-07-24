import logo from './logo.svg';
import './App.css';
import { Navbar } from './features/shared/NavBar/Navbar';
import { Signup } from './features/users/Signup/SignUp';
import { Signin } from './features/users/SIgnIn/SignIn';
import { Provider } from 'react-redux';
import { Home } from './features/movie/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { MovieDetail } from './features/movie/MovieDetail/MovieDetail';
import { TicketPlan } from './features/booking/TicketPlan/TicketPlan';
import { SeatPlan } from './features/booking/SeatPlan/SeatPlan';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      {/* Providing redux store to entire application */}
      {/* without this, components can't access reducer & actions */}
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
             <Home />
          }>
          </Route>
          <Route path='/signin' element={
             <Signin />
          }>
          </Route>
          <Route path='/signup' element={
             <Signup />
          }>
          </Route>
          <Route path='/movie/:id/' element={
             <MovieDetail />
          }>
          </Route>
          <Route path='/movie/:id/ticketPlan' element={
                <TicketPlan />
                }>
          </Route>
          <Route path='/movie/seatPlan/:cinemaID'
            element={
              <SeatPlan />
            }>
              
            </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      {/* <Navbar /> */}
      {/* <Signup /> */}
      {/* <Signin /> */}
     
    </div>
  );
}

export default App;
