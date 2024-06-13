import './App.css';
import Homepage from './components/homepage';
import Onboarding from './components/onboarding';
import SignIn from './components/signIn';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Onboarding/>}></Route>
      <Route path='/login' element={<SignIn/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
